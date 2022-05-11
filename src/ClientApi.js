var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class ClientApi {
    constructor(idToken, refreshToken, expiresIn, user, projectId) {
        this.idToken = idToken;
        this.refreshToken = refreshToken;
        this.expiresIn = expiresIn;
        this.user = user;
        this.projectId = projectId;
    }
    static apiUrl(endpoint) {
        return new URL(endpoint, ClientApi.apiBaseUrl).href;
    }
    static postRequest(fullUrl, formData = new FormData(), json, responseType = "json") {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (responseType === "zip") {
                    formData.append("responseType", "zip");
                }
                const response = yield fetch(fullUrl, {
                    method: "POST",
                    body: json ? JSON.stringify(json) : formData,
                });
                if (response.status === 200) {
                    switch (responseType) {
                        case "text":
                            return response.text();
                        case "zip":
                            return response.blob();
                        default:
                            return response.json();
                    }
                }
                else {
                    try {
                        let json = yield response.json();
                        json = Object.assign(Object.assign({}, json), { status: response.status });
                        return Promise.reject(json);
                    }
                    catch (_a) {
                        return Promise.reject(response.statusText);
                    }
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    static getRequest(baseUrl, data = {}, responseType = "json") {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = new URL(baseUrl);
                for (const key in data) {
                    url.searchParams.append(key, `${data[key]}`);
                }
                const response = yield fetch(url.href, {
                    method: "GET",
                });
                if (response.status === 200) {
                    switch (responseType) {
                        case "text":
                            return response.text();
                        case "zip":
                            return response.blob();
                        default:
                            return response.json();
                    }
                }
                else if (response.status === 500) {
                    try {
                        const json = yield response.json();
                        return Promise.reject(json);
                    }
                    catch (_a) {
                        return Promise.reject(response.statusText);
                    }
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    // auth
    static getAuthToken(preAuthToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append("token", preAuthToken);
            const getAuthTokenRes = (yield ClientApi.postRequest(ClientApi.apiUrl("/v1/get-validated-pre-auth-token"), formData)).data;
            return getAuthTokenRes.authToken;
        });
    }
    static getIdTokenFromAuthToken(authToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const formData = new FormData();
                formData.append("token", authToken);
                formData.append("returnSecureToken", "true");
                const res = yield this.postRequest("https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=" +
                    this.publicFirebaseApiKey, undefined, {
                    token: authToken,
                    returnSecureToken: true,
                });
                return res;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    static refreshAuth(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield ClientApi.postRequest("https://securetoken.googleapis.com/v1/token?key=" +
                    ClientApi.publicFirebaseApiKey, undefined, {
                    grant_type: "refresh_token",
                    refresh_token: refreshToken,
                });
                return {
                    idToken: data.id_token,
                    expiresIn: data.expires_in,
                    refreshToken: data.refresh_token,
                };
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    // user & project
    static getUser(idToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = new FormData();
            data.append("idToken", idToken);
            return (yield ClientApi.postRequest(ClientApi.apiUrl("/v1/get-user"), data))
                .data;
        });
    }
    static getMainProjectId(idToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = new FormData();
            data.append("idToken", idToken);
            return (yield ClientApi.postRequest(ClientApi.apiUrl("/v1/get-main-project-id"), data)).data.projectId;
        });
    }
    // user
    getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = new FormData();
            data.append("idToken", this.idToken);
            return (yield ClientApi.postRequest(ClientApi.apiUrl("/v1/user"), data))
                .data;
        });
    }
    // design
    uploadDesignFrames(frames) {
        const data = new FormData();
        data.append("idToken", this.idToken);
        data.append("projectId", this.projectId);
        data.append("frames", JSON.stringify(frames));
        return ClientApi.postRequest(ClientApi.apiUrl("/v1/upload-design-frames"), data);
    }
}
ClientApi.env = "production";
ClientApi.publicFirebaseApiKey = "AIzaSyA6k-XDZwLIjGfCuXgd9L7nna1AWgx1AN4";
ClientApi.apiBaseUrl = ClientApi.env === "development"
    ? "http://localhost"
    : "https://dev.aspect.app";
