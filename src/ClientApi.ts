import { App } from "./ui";

export class ClientApi {
  static publicFirebaseApiKey = "AIzaSyA6k-XDZwLIjGfCuXgd9L7nna1AWgx1AN4";
  static get apiBaseUrl() {
    return App.env === "development"
      ? "http://localhost"
      : "https://dev.aspect.app";
  }

  static apiUrl(endpoint: string) {
    return new URL(endpoint, ClientApi.apiBaseUrl).href;
  }

  static async postRequest(
    fullUrl: string,
    formData: FormData = new FormData(),
    json?: any,
    responseType: "json" | "text" | "zip" = "json"
  ) {
    try {
      if (responseType === "zip") {
        formData.append("responseType", "zip");
      }
      const response = await fetch(fullUrl, {
        method: "POST",
        body: JSON.stringify(json) || formData,
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
      } else {
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
    baseUrl: string,
    data: { [key: string]: string | number } = {},
    responseType: "json" | "text" | "zip" = "json"
  ) {
    try {
      const url = new URL(baseUrl);
      for (const key in data) {
        url.searchParams.append(key, `${data[key]}`);
      }

      const response = await fetch(url.href, {
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

  // auth

  static async getAuthToken(preAuthToken: string) {
    const formData = new FormData();
    formData.append("token", preAuthToken);
    const getAuthTokenRes = (
      await ClientApi.postRequest(
        ClientApi.apiUrl("/v1/get-validated-pre-auth-token"),
        formData
      )
    ).data as {
      authToken: string;
    };
    return getAuthTokenRes.authToken;
  }

  static async getIdTokenFromAuthToken(authToken: string) {
    try {
      const formData = new FormData();
      formData.append("token", authToken);
      formData.append("returnSecureToken", "true");

      const res = await this.postRequest(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=" +
          this.publicFirebaseApiKey,
        undefined,
        {
          token: authToken,
          returnSecureToken: true,
        }
      );

      return res as {
        idToken: string;
        expiresIn: number;
        refreshToken: string;
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async refreshIdToken(refreshToken: string) {
    try {
      return (
        await ClientApi.postRequest(
          "https://securetoken.googleapis.com/v1/token?key=" +
            ClientApi.publicFirebaseApiKey,
          undefined,
          {
            grant_type: "refresh_token",
            refresh_token: refreshToken,
          }
        )
      ).data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // user

  static async getUser(idToken: string) {
    const data = new FormData();
    data.append("idToken", idToken);
    return (await ClientApi.postRequest(ClientApi.apiUrl("/v1/get-user"), data))
      .data;
  }

  constructor(
    public idToken: string,
    public refreshToken: string,
    public expiresIn: number,
    public user: any
  ) {}

  async getUser() {
    const data = new FormData();
    data.append("idToken", this.idToken);
    return (await ClientApi.postRequest(ClientApi.apiUrl("/v1/user"), data))
      .data;
  }
}
