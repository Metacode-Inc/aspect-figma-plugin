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

class Auth {
  constructor(private readonly token: string, uid: string) {}
}

class State {
  constructor(
    public preAuthToken?: string,
    public auth?: Auth,
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

  componentDidMount() {
    window.onmessage = async (event) => {
      switch (event.data.pluginMessage.type) {
        // case "networkRequest":
        //   (() => {
        //     var request = new XMLHttpRequest();
        //     // This link has random lorem ipsum text
        //     request.open(
        //       "GET",
        //       "https://cors-anywhere.herokuapp.com/http://www.randomtext.me/download/text/lorem/ul-8/5-15"
        //     );
        //     request.responseType = "text";
        //     request.onload = () => {
        //       window.parent.postMessage(
        //         { pluginMessage: request.response },
        //         "*"
        //       );
        //     };
        //     request.send();
        //   })();
        //   break;
        case "addSelectedFrames":
          (() => {
            const frames: SceneNode[] = event.data.pluginMessage.frames;
            console.log(frames);
          })();

        default:
          break;
      }
    };

    // when tab becomes active
    window.addEventListener("focus", async () => {
      if (!this.state.preAuthToken) {
        return;
      }
      try {
        const formData = new FormData();
        formData.append("token", this.state.preAuthToken);
        const res = await ClientApi.postRequest(
          "/v1/get-validated-pre-auth-token",
          formData
        );
        const auth = new Auth(res.data.authToken, res.data.uid);
        this.setState({ auth, preAuthToken: undefined });
      } catch (error) {
        this.setState({ errorMessage: error.message });
      }
    });
  }

  render() {
    if (this.state.auth) {
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
              const res = await ClientApi.postRequest("/v1/get-pre-auth-token");
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
