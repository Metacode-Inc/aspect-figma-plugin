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
import { FigmaPluginFrameItemView, FigmaPluginLoginView, FigmaPluginView, } from "./aspect_modules/components";
import { ClientApi } from "./ClientApi";
import "./ui.css";
class State {
    constructor(preAuthToken, api, framesToExport = [], selectedFrames = [], pageFrameIds = {}, isExporting = false, errorMessage) {
        this.preAuthToken = preAuthToken;
        this.api = api;
        this.framesToExport = framesToExport;
        this.selectedFrames = selectedFrames;
        this.pageFrameIds = pageFrameIds;
        this.isExporting = isExporting;
        this.errorMessage = errorMessage;
    }
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = new State();
    }
    get pluginSource() {
        return navigator.userAgent.toLowerCase().includes("electron/")
            ? "app"
            : "web";
    }
    get sortedFrames() {
        return Object.values(this.state.framesToExport).sort((a, b) => a.name.localeCompare(b.name));
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            window.onmessage = (event) => __awaiter(this, void 0, void 0, function* () {
                switch (event.data.pluginMessage.type) {
                    case "selectionChange":
                        this.setState({
                            selectedFrames: event.data.pluginMessage.frames.map((x) => JSON.parse(x)),
                        });
                        break;
                    case "getFramesToExport":
                        this.setState({
                            framesToExport: event.data.pluginMessage.frames.map((x) => JSON.parse(x)),
                        });
                        break;
                    case "getPageNodeIds":
                        this.setState({
                            pageFrameIds: event.data.pluginMessage.pageFrameIds,
                        });
                        break;
                    case "getSavedAuthData":
                        (() => __awaiter(this, void 0, void 0, function* () {
                            this.setupPostInitListeners();
                            // get and validate auth token
                            const { idToken, refreshToken, expiresIn } = event.data.pluginMessage;
                            if (!(idToken && refreshToken && expiresIn)) {
                                return;
                            }
                            try {
                                yield this.initAuthedState(idToken, refreshToken, expiresIn, true);
                            }
                            catch (error) {
                                this.handleError(error);
                            }
                        }))();
                        break;
                    default:
                        break;
                }
            });
            // get saved auth token
            parent.postMessage({ pluginMessage: { type: "getSavedAuthData" } }, "*");
        });
    }
    render() {
        if (this.state.api) {
            const itemsView = (() => {
                if (!this.state.framesToExport.length) {
                    return (React.createElement("div", { style: {
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: 13,
                            fontWeight: 500,
                        } }, "Select frames to import"));
                }
                else {
                    return this.state.framesToExport.map((frame) => {
                        var _a;
                        return (React.createElement(FigmaPluginFrameItemView, { key: frame.id, title: frame.name, detail: (_a = Object.values(this.state.pageFrameIds).find((page) => page.frameIds.includes(frame.id))) === null || _a === void 0 ? void 0 : _a.name, accessoryIcon: React.createElement("span", { style: { fontWeight: 300, userSelect: "none" } }, "\u2014"), accessoryIconOnClick: () => {
                                console.log("remove frame");
                                this.removeFrameFromExport(frame);
                            } }));
                    });
                }
            })();
            return (React.createElement(FigmaPluginView, { title: "Frames".toUpperCase(), style: { width: "100%", height: "100%", cursor: "default" }, itemsView: itemsView, secondaryActionTitle: "Add selected frames", isExporting: this.state.isExporting, secondaryActionOnClick: this.addSelectedFramesToExport, callToAction: this.state.isExporting ? "Exporting…" : "Export", callToActionOnClick: () => this.exportFrames(true), signOutOnClick: () => this.signOut() }));
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(FigmaPluginLoginView, { logoView: React.createElement("img", { src: require("./logotype.svg"), style: { height: 26 } }), signinOnClick: () => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const res = yield ClientApi.postRequest(ClientApi.apiUrl("/v1/get-pre-auth-token"));
                        const preAuthToken = res.data.token;
                        this.setState({ preAuthToken });
                        // open new tab to https://dev.aspect.app/auth/figma-plugin?preAuthToken=preAuthToken
                        const baseUrl = ClientApi.env === "development"
                            ? "http://localhost:3000"
                            : "https://dev.aspect.app";
                        const url = new URL(`${baseUrl}/auth/figma-plugin`);
                        url.searchParams.set("preAuthToken", preAuthToken);
                        url.searchParams.set("src", this.pluginSource);
                        window.open(url.href, "_blank");
                    }
                    catch (err) {
                        this.setState({ errorMessage: err.message });
                    }
                }), signupOnClick: () => {
                    window.open("https://dev.aspect.app/signup", "_blank");
                } }),
            this.state.errorMessage && (React.createElement("div", { className: "error-message" }, this.state.errorMessage))));
    }
    initAuthedState(idToken, refreshToken, expiresIn, shouldRetryOnAuthError = false) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield ClientApi.getUser(idToken);
                const projectId = yield ClientApi.getMainProjectId(idToken);
                this.setState({
                    api: new ClientApi(idToken, refreshToken, expiresIn, user, projectId),
                    preAuthToken: undefined,
                }, () => {
                    this.getFramesToExport();
                });
            }
            catch (error) {
                this.handleError(error);
                if (shouldRetryOnAuthError) {
                    this.handleAuthedRequestError(error, refreshToken);
                }
            }
        });
    }
    setupPostInitListeners() {
        // when tab becomes active
        window.addEventListener("focus", () => __awaiter(this, void 0, void 0, function* () {
            if (!this.state.preAuthToken) {
                return;
            }
            try {
                const authToken = yield ClientApi.getAuthToken(this.state.preAuthToken);
                this.setState({ preAuthToken: undefined });
                const { idToken, refreshToken, expiresIn } = yield ClientApi.getIdTokenFromAuthToken(authToken);
                this.saveAuthData(idToken, refreshToken, expiresIn);
                this.initAuthedState(idToken, refreshToken, expiresIn);
            }
            catch (error) {
                this.handleError(error);
            }
        }));
    }
    saveAuthData(idToken, refreshToken, expiresIn) {
        parent.postMessage({
            pluginMessage: {
                type: "saveAuthData",
                idToken,
                refreshToken,
                expiresIn,
            },
        }, "*");
    }
    signOut() {
        this.deleteAuthData();
        this.setState(new State());
    }
    deleteAuthData() {
        parent.postMessage({ pluginMessage: { type: "deleteAuthData" } }, "*");
    }
    addSelectedFramesToExport() {
        parent.postMessage({ pluginMessage: { type: "addSelectedFramesToExport" } }, "*");
    }
    removeFrameFromExport(frame) {
        parent.postMessage({ pluginMessage: { type: "removeFrameFromExport", id: frame.id } }, "*");
    }
    getFramesToExport() {
        parent.postMessage({ pluginMessage: { type: "getFramesToExport" } }, "*");
    }
    exportFrames(shouldRetryOnAuthError = false) {
        return __awaiter(this, void 0, void 0, function* () {
            this.setState({ isExporting: true }, () => __awaiter(this, void 0, void 0, function* () {
                if (!this.state.api) {
                    this.setState({ isExporting: false });
                    return;
                }
                try {
                    yield this.state.api.uploadDesignFrames(this.state.framesToExport);
                }
                catch (error) {
                    console.log(error);
                    this.handleError(error);
                    if (shouldRetryOnAuthError) {
                        this.handleAuthedRequestError(error, this.state.api.refreshToken, () => __awaiter(this, void 0, void 0, function* () {
                            try {
                                yield this.exportFrames();
                            }
                            catch (error) {
                                this.handleError(error);
                            }
                        }));
                    }
                }
                this.setState({ isExporting: false });
            }));
        });
    }
    handleError(error) {
        this.setState({
            errorMessage: typeof error === "string" ? error : error.message,
        });
    }
    handleAuthedRequestError(error, refreshToken, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (error.status) {
                case 403:
                    try {
                        const authData = yield ClientApi.refreshAuth(refreshToken);
                        this.saveAuthData(authData.idToken, authData.refreshToken, authData.expiresIn);
                        yield this.initAuthedState(authData.idToken, authData.refreshToken, authData.expiresIn);
                        callback && callback();
                    }
                    catch (error) {
                        this.handleError(error);
                        this.signOut();
                    }
                    break;
                default:
                    break;
            }
        });
    }
}
ReactDOM.render(React.createElement(App, null), document.getElementById("react-page"));
