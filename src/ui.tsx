import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  FigmaPluginItem,
  FigmaPluginLoginView,
  FigmaPluginView,
} from "./aspect_modules/components";
import { ClientApi } from "./ClientApi";
import { FigmaImportPreferences } from "./Data";
import "./ui.css";

declare function require(path: string): any;

// class Auth {
//   constructor(public token: string, public uid: string,) {}
// }

class State {
  constructor(
    public preAuthToken?: string,
    public api?: ClientApi,
    public importPreferences?: FigmaImportPreferences,
    public nativeFrames: { [id: string]: FrameNode } = {},
    public errorMessage?: string
  ) {}
}

class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = new State();
  }

  onAdd = () => {
    parent.postMessage({ pluginMessage: { type: "getSelectedNodes" } }, "*");
  };

  get pluginSource() {
    return navigator.userAgent.toLowerCase().includes("electron/")
      ? "app"
      : "web";
  }

  get sortedFrames() {
    return Object.values(this.state.nativeFrames).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  async componentDidMount() {
    window.onmessage = async (event) => {
      switch (event.data.pluginMessage.type) {
        case "getSelectedNodes":
          (() => {
            const frames: FrameNode[] = event.data.pluginMessage.frames;
          })();
          break;
        case "getSavedAuthData":
          (() => {
            this.setupPostInitListeners();

            // get and validate auth token
            const { idToken, refreshToken, expiresIn } =
              event.data.pluginMessage;
            if (!(idToken && refreshToken && expiresIn)) {
              return;
            }

            ClientApi.getUser(idToken)
              .then((user) => {
                this.setState(
                  {
                    api: new ClientApi(idToken, refreshToken, expiresIn, user),
                    preAuthToken: undefined,
                  },
                  async () => {
                    try {
                      this.setState({
                        importPreferences:
                          await this.state.api.getImportPreferences(),
                      });
                    } catch (error) {
                      this.setState({ errorMessage: error.message });
                    }
                  }
                );
              })
              .catch((err) => {
                console.log(err);
                this.setState({
                  errorMessage: typeof err === "string" ? err : err.message,
                });
              });
          })();
          break;

        default:
          break;
      }
    };

    // get saved auth token
    parent.postMessage({ pluginMessage: { type: "getSavedAuthData" } }, "*");
  }

  setupPostInitListeners() {
    // when tab becomes active
    window.addEventListener("focus", async () => {
      try {
        if (!this.state.preAuthToken) {
          return;
        }

        const authToken = await ClientApi.getAuthToken(this.state.preAuthToken);
        this.setState({
          preAuthToken: undefined,
        });

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

        const user = await ClientApi.getUser(idToken);

        this.setState(
          {
            api: new ClientApi(idToken, refreshToken, expiresIn, user),
          },
          async () => {
            try {
              const importPreferences =
                await this.state.api.getImportPreferences();
              this.setState({
                importPreferences,
              });
            } catch (error) {
              this.setState({ errorMessage: error.message });
            }
          }
        );
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
        if (this.state.importPreferences) {
          return Object.values(this.state.importPreferences.framesToImport).map(
            (frame) => (
              <FigmaPluginItem
                key={frame.id}
                title={frame.id}
                detail={frame.fileId}
              />
            )
          );
        } else {
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
              Loading...
            </div>
          );
        }
      })();
      return (
        <FigmaPluginView
          title={"Frames".toUpperCase()}
          style={{ width: "100%", height: "100%", cursor: "default" }}
          itemsView={itemsView}
          secondaryActionTitle="Add selected frames"
          secondaryActionOnClick={this.onAdd}
          callToAction="Export"
          callToActionOnClick={this.onAdd}
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
