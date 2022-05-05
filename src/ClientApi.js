var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { App } from "./ui";
export class ClientApi {
    static get apiBaseUrl() {
        return App.env === "development"
            ? "http://localhost"
            : "https://dev.aspect.app";
    }
    static apiUrl(endpoint) {
        return new URL(endpoint, ClientApi.apiBaseUrl).href;
    }
    static postRequest(endpoint, body = new FormData(), responseType = "json") {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (responseType === "zip") {
                    body.append("responseType", "zip");
                }
                const response = yield fetch(ClientApi.apiUrl(endpoint), {
                    method: "POST",
                    body,
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
    static getRequest(endpoint, responseType = "json") {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(ClientApi.apiUrl(endpoint));
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
}
