import { App } from "./ui";

export class ClientApi {
  static get apiBaseUrl() {
    return App.env === "development"
      ? "http://localhost"
      : "https://dev.aspect.app";
  }

  static apiUrl(endpoint: string) {
    return new URL(endpoint, ClientApi.apiBaseUrl).href;
  }

  static async postRequest(
    endpoint: string,
    body: FormData = new FormData(),
    responseType: "json" | "text" | "zip" = "json"
  ) {
    try {
      if (responseType === "zip") {
        body.append("responseType", "zip");
      }
      const response = await fetch(ClientApi.apiUrl(endpoint), {
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
      } else if (response.status === 500) {
        try {
          const json = await response.json();
          return Promise.reject(json);
        } catch {
          return Promise.reject(response.statusText);
        }
      }
    } catch (error) {
      throw error;
    }
  }

  static async getRequest(
    endpoint: string,
    responseType: "json" | "text" | "zip" = "json"
  ) {
    try {
      const response = await fetch(ClientApi.apiUrl(endpoint));
      if (response.status === 200) {
        switch (responseType) {
          case "text":
            return response.text();
          case "zip":
            return response.blob();

          default:
            return response.json();
        }
      } else if (response.status === 500) {
        try {
          const json = await response.json();
          return Promise.reject(json);
        } catch {
          return Promise.reject(response.statusText);
        }
      }
    } catch (error) {
      throw error;
    }
  }
}
