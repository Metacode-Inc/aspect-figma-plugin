import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  FigmaPluginFrameItemView,
  FigmaPluginLoginView,
  FigmaPluginView,
} from "./aspect_modules/components";
import { ClientApi } from "./ClientApi";
import { DesignNode } from "./Data";
import "./ui.css";

declare function require(path: string): any;

class State {
  constructor(
    public preAuthToken?: string,
    public api?: ClientApi,
    public framesToExport: DesignNode[] = [],
    public selectedFrames: DesignNode[] = [],
    public pageFrameIds: {
      [pageId: string]: { name: string; frameIds: string[] };
    } = {},
    public isUploadingFrames: boolean = false,
    public errorMessage?: string
  ) {}
}

class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = new State();
  }

  get pluginSource() {
    return navigator.userAgent.toLowerCase().includes("electron/")
      ? "app"
      : "web";
  }

  get sortedFrames() {
    return Object.values(this.state.framesToExport).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  async componentDidMount() {
    window.onmessage = async (event) => {
      switch (event.data.pluginMessage.type) {
        case "selectionChange":
          this.setState({ selectedFrames: event.data.pluginMessage.frames });
          break;
        case "addSelectedFramesToExport":
          this.setState({
            framesToExport: [
              ...this.state.framesToExport,
              ...this.state.selectedFrames.filter(
                (frame) =>
                  !this.state.framesToExport.some((f) => f.id === frame.id)
              ),
            ],
          });
          break;
        case "getFramesToExport":
          this.setState({ framesToExport: event.data.pluginMessage.frames });
          break;
        case "getPageNodeIds":
          this.setState({
            pageFrameIds: event.data.pluginMessage.pageFrameIds,
          });
          break;
        case "getSavedAuthData":
          (async () => {
            this.setupPostInitListeners();
            // get and validate auth token
            const { idToken, refreshToken, expiresIn } =
              event.data.pluginMessage;
            if (!(idToken && refreshToken && expiresIn)) {
              return;
            }

            try {
              await this.initAuthedState(idToken, refreshToken, expiresIn);
            } catch (error) {
              this.handleError(error);
            }
          })();
          break;

        default:
          break;
      }
    };

    // get saved auth token
    parent.postMessage({ pluginMessage: { type: "getSavedAuthData" } }, "*");
  }

  render() {
    if (this.state.api) {
      const itemsView = (() => {
        if (!this.state.framesToExport.length) {
          return (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                fontSize: 13,
                fontWeight: 500,
              }}
            >
              Select frames to import
            </div>
          );
        } else {
          return this.state.framesToExport.map((frame) => (
            <FigmaPluginFrameItemView
              key={frame.id}
              title={frame.name}
              detail={
                Object.values(this.state.pageFrameIds).find((page) =>
                  page.frameIds.includes(frame.id)
                )?.name
              }
              accessoryIcon={
                <span style={{ fontWeight: 300, userSelect: "none" }}>—</span>
              }
              accessoryIconOnClick={() => {
                console.log("remove frame");
                this.removeFrameFromExport(frame);
              }}
            />
          ));
        }
      })();
      return (
        <FigmaPluginView
          title={"Frames".toUpperCase()}
          style={{ width: "100%", height: "100%", cursor: "default" }}
          itemsView={itemsView}
          secondaryActionTitle="Add selected frames"
          secondaryActionOnClick={this.addSelectedFramesToExport}
          callToAction="Export"
          callToActionOnClick={() => this.exportFrames()}
          signOutOnClick={() => this.signOut()}
        />
      );
    }

    return (
      <>
        <FigmaPluginLoginView
          logoView={
            <img src={require("./logotype.svg")} style={{ height: 26 }} />
          }
          signinOnClick={async () => {
            try {
              const res = await ClientApi.postRequest(
                ClientApi.apiUrl("/v1/get-pre-auth-token")
              );
              const preAuthToken = res.data.token;
              this.setState({ preAuthToken });

              // open new tab to https://dev.aspect.app/auth/figma-plugin?preAuthToken=preAuthToken
              const baseUrl =
                ClientApi.env === "development"
                  ? "http://localhost:3000"
                  : "https://dev.aspect.app";
              const url = new URL(`${baseUrl}/auth/figma-plugin`);
              url.searchParams.set("preAuthToken", preAuthToken);
              url.searchParams.set("src", this.pluginSource);
              window.open(url.href, "_blank");
            } catch (err) {
              this.setState({ errorMessage: err.message });
            }
          }}
        />
        {this.state.errorMessage && (
          <div className="error-message">{this.state.errorMessage}</div>
        )}
      </>
    );
  }

  async initAuthedState(
    idToken: string,
    refreshToken: string,
    expiresIn: number
  ) {
    try {
      const user = await ClientApi.getUser(idToken);
      const projectId = await ClientApi.getMainProjectId(idToken);
      this.setState(
        {
          api: new ClientApi(idToken, refreshToken, expiresIn, user, projectId),
          preAuthToken: undefined,
        },
        () => {
          this.getFramesToExport();
        }
      );
    } catch (error) {
      this.handleError(error);
      if (error.status === 403) {
        try {
          const authData = await ClientApi.refreshAuth(refreshToken);
          this.saveAuthData(
            authData.idToken,
            authData.refreshToken,
            authData.expiresIn
          );
          this.initAuthedState(
            authData.idToken,
            authData.refreshToken,
            authData.expiresIn
          );
        } catch (error) {
          this.handleError(error);
        }
      }
    }
  }

  setupPostInitListeners() {
    // when tab becomes active
    window.addEventListener("focus", async () => {
      if (!this.state.preAuthToken) {
        return;
      }

      try {
        const authToken = await ClientApi.getAuthToken(this.state.preAuthToken);
        this.setState({ preAuthToken: undefined });

        const { idToken, refreshToken, expiresIn } =
          await ClientApi.getIdTokenFromAuthToken(authToken);
        this.saveAuthData(idToken, refreshToken, expiresIn);
        this.initAuthedState(idToken, refreshToken, expiresIn);
      } catch (error) {
        this.handleError(error);
      }
    });
  }

  saveAuthData(idToken: string, refreshToken: string, expiresIn: number) {
    parent.postMessage(
      {
        pluginMessage: {
          type: "saveAuthData",
          idToken,
          refreshToken,
          expiresIn,
        },
      },
      "*"
    );
  }

  signOut() {
    this.deleteAuthData();
    this.setState(new State());
  }

  deleteAuthData() {
    parent.postMessage({ pluginMessage: { type: "deleteAuthData" } }, "*");
  }

  addSelectedFramesToExport() {
    parent.postMessage(
      { pluginMessage: { type: "addSelectedFramesToExport" } },
      "*"
    );
  }

  removeFrameFromExport(frame: DesignNode) {
    parent.postMessage(
      { pluginMessage: { type: "removeFrameFromExport", id: frame.id } },
      "*"
    );
  }

  getFramesToExport() {
    parent.postMessage({ pluginMessage: { type: "getFramesToExport" } }, "*");
  }

  async exportFrames() {
    this.setState({ isUploadingFrames: true }, async () => {
      if (!this.state.api) {
        this.setState({ isUploadingFrames: false });
        return;
      }

      try {
        await this.state.api.uploadDesignFrames(this.state.framesToExport);
      } catch (error) {
        this.handleError(error);
      }

      this.setState({ isUploadingFrames: false });
    });
  }

  handleError(error: any) {
    this.setState({
      errorMessage: typeof error === "string" ? error : error.message,
    });
  }
}

ReactDOM.render(<App />, document.getElementById("react-page"));
