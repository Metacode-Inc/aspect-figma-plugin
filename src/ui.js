var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from "react";
import * as ReactDOM from "react-dom";
import { FigmaPluginItem, FigmaPluginLoginView, FigmaPluginView, } from "./aspect_modules/components";
import { ClientApi } from "./ClientApi";
import "./ui.css";
class Auth {
    constructor(token, uid) {
        this.token = token;
    }
}
class State {
    constructor(preAuthToken, auth, errorMessage) {
        this.preAuthToken = preAuthToken;
        this.auth = auth;
        this.errorMessage = errorMessage;
    }
}
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.onAdd = () => {
            parent.postMessage({ pluginMessage: { type: "addSelectedFrames" } }, "*");
        };
        this.onCancel = () => {
            parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
        };
        this.state = new State();
    }
    componentDidMount() {
        window.onmessage = (event) => __awaiter(this, void 0, void 0, function* () {
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
                        const frames = event.data.pluginMessage.frames;
                        console.log(frames);
                    })();
                default:
                    break;
            }
        });
        // when tab becomes active
        window.addEventListener("focus", () => __awaiter(this, void 0, void 0, function* () {
            if (!this.state.preAuthToken) {
                return;
            }
            try {
                const formData = new FormData();
                formData.append("token", this.state.preAuthToken);
                const res = yield ClientApi.postRequest("/v1/get-validated-pre-auth-token", formData);
                const auth = new Auth(res.data.authToken, res.data.uid);
                this.setState({ auth, preAuthToken: undefined });
            }
            catch (error) {
                this.setState({ errorMessage: error.message });
            }
        }));
    }
    render() {
        if (this.state.auth) {
            return (React.createElement(FigmaPluginView, { title: "Frames to import", style: { height: "100%", cursor: "default" }, itemsView: React.createElement(FigmaPluginItem, { title: "test", detail: "another" }), callToAction: "Add selected frames", callToActionOnClick: this.onAdd }));
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(FigmaPluginLoginView, { logoView: React.createElement("img", { src: require("./logotype.svg"), style: { height: 26 } }), signinOnClick: () => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const res = yield ClientApi.postRequest("/v1/get-pre-auth-token");
                        const preAuthToken = res.data.token;
                        this.setState({ preAuthToken });
                        // open new tab to https://dev.aspect.app/auth/figma-plugin?preAuthToken=preAuthToken
                        const baseUrl = App.env === "development"
                            ? "http://localhost:3000"
                            : "https://dev.aspect.app";
                        const authUrl = `${baseUrl}/auth/figma-plugin?preAuthToken=${preAuthToken}`;
                        window.open(authUrl, "_blank");
                    }
                    catch (err) {
                        this.setState({ errorMessage: err.message });
                    }
                }) }),
            this.state.errorMessage && (React.createElement("div", { className: "error-message" }, this.state.errorMessage))));
    }
}
App.env = "development";
ReactDOM.render(React.createElement(App, null), document.getElementById("react-page"));
