import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  FigmaPluginItem,
  FigmaPluginLoginView,
  FigmaPluginView,
} from "./aspect_modules/components";
import { ClientApi } from "./ClientApi";
import "./ui.css";

declare function require(path: string): any;

// class Auth {
//   constructor(public token: string, public uid: string,) {}
// }

class State {
  constructor(
    public preAuthToken?: string,
    public api?: ClientApi,
    public errorMessage?: string
  ) {}
}

export class App extends React.Component<any, State> {
  static env = "development";

  constructor(props: any) {
    super(props);
    this.state = new State();
  }

  onAdd = () => {
    parent.postMessage({ pluginMessage: { type: "addSelectedFrames" } }, "*");
  };

  onCancel = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  async componentDidMount() {
    window.onmessage = async (event) => {
      switch (event.data.pluginMessage.type) {
        case "addSelectedFrames":
          (() => {
            const frames: SceneNode[] = event.data.pluginMessage.frames;
            console.log(frames);
          })();
          break;
        case "getSavedAuthData":
          (() => {
            this.setupPostInitListeners();
            console.log(event.data.pluginMessage);

            // get and validate auth token
            const { idToken, refreshToken, expiresIn } =
              event.data.pluginMessage;
            if (!(idToken && refreshToken && expiresIn)) {
              return;
            }

            ClientApi.getUser(idToken)
              .then((user) => {
                this.setState({
                  api: new ClientApi(idToken, refreshToken, expiresIn, user),
                  preAuthToken: undefined,
                });
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
        console.log("focus preAuthToken", this.state.preAuthToken);

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
        console.log("getUserRes", user);

        this.setState({
          api: new ClientApi(idToken, refreshToken, expiresIn, user),
        });
      } catch (err) {
        this.setState({
          errorMessage: typeof err === "string" ? err : err.message,
        });
      }
    });
  }

  render() {
    if (this.state.api) {
      return (
        <FigmaPluginView
          title="Frames to import"
          style={{ height: "100%", cursor: "default" }}
          itemsView={<FigmaPluginItem title="test" detail="another" />}
          callToAction="Add selected frames"
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
                App.env === "development"
                  ? "http://localhost:3000"
                  : "https://dev.aspect.app";
              const authUrl = `${baseUrl}/auth/figma-plugin?preAuthToken=${preAuthToken}`;
              window.open(authUrl, "_blank");
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
