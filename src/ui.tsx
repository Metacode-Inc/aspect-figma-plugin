import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  FigmaPluginItem,
  FigmaPluginLoginView,
  FigmaPluginView,
} from "./aspect_modules/components";
import { ClientApi } from "./ClientApi";
import { DesignNode, FigmaImportPreferences } from "./Data";
import "./ui.css";

declare function require(path: string): any;

class State {
  constructor(
    public preAuthToken?: string,
    public api?: ClientApi,
    public framesToExport: DesignNode[] = [],
    public selectedFrames: DesignNode[] = [],
    public errorMessage?: string
  ) {}
}

class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = new State();
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
              await this.setupAuthedData(idToken, refreshToken, expiresIn);
            } catch (err) {
              this.setState({
                errorMessage: typeof err === "string" ? err : err.message,
              });
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

  async setupAuthedData(
    idToken: string,
    refreshToken: string,
    expiresIn: number
  ) {
    try {
      const user = await ClientApi.getUser(idToken);
      this.setState(
        {
          api: new ClientApi(idToken, refreshToken, expiresIn, user),
          preAuthToken: undefined,
        },
        () => {
          this.getFramesToExport();
        }
      );
    } catch (err) {
      this.setState({
        errorMessage: typeof err === "string" ? err : err.message,
      });
    }
  }

  setupPostInitListeners() {
    // when tab becomes active
    window.addEventListener("focus", async () => {
      try {
        if (!this.state.preAuthToken) {
          return;
        }

        const authToken = await ClientApi.getAuthToken(this.state.preAuthToken);
        this.setState({ preAuthToken: undefined });

        const { idToken, refreshToken, expiresIn } =
          await ClientApi.getIdTokenFromAuthToken(authToken);
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
        this.setupAuthedData(idToken, refreshToken, expiresIn);
      } catch (err) {
        this.setState({
          errorMessage: typeof err === "string" ? err : err.message,
        });
      }
    });
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

                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              Select frames to import
            </div>
          );
        } else {
          return this.state.framesToExport.map((frame) => (
            <FigmaPluginItem
              key={frame.id}
              title={frame.name}
              // detail={frame.n}
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
          callToActionOnClick={this.addSelectedFramesToExport}
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
}

ReactDOM.render(<App />, document.getElementById("react-page"));
