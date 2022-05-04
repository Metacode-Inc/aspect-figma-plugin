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
import { FigmaPluginItem, FigmaPluginView } from "./aspect_modules/components";
import "./ui.css";
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.countRef = (element) => {
            if (element)
                element.value = "5";
            this.textbox = element;
        };
        this.onAdd = () => {
            const count = parseInt(this.textbox.value, 10);
            parent.postMessage({ pluginMessage: { type: "addFrames", count } }, "*");
        };
        this.onCancel = () => {
            parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
        };
    }
    componentDidMount() {
        window.onmessage = (event) => __awaiter(this, void 0, void 0, function* () {
            switch (event.data.pluginMessage.type) {
                case "networkRequest":
                    (() => {
                        var request = new XMLHttpRequest();
                        // This link has random lorem ipsum text
                        request.open("GET", "https://cors-anywhere.herokuapp.com/http://www.randomtext.me/download/text/lorem/ul-8/5-15");
                        request.responseType = "text";
                        request.onload = () => {
                            window.parent.postMessage({ pluginMessage: request.response }, "*");
                        };
                        request.send();
                    })();
                    break;
                case "addFrames":
                    (() => {
                        const count = event.data.pluginMessage.count;
                        const frames = [];
                        for (let i = 0; i < count; i++) {
                            frames.push({
                                id: `frame-${i}`,
                                name: `frame-${i}`,
                                type: "FRAME",
                                children: [],
                            });
                        }
                    })();
                default:
                    break;
            }
            if (event.data.pluginMessage.type === "networkRequest") {
            }
        });
    }
    render() {
        return (React.createElement(FigmaPluginView, { title: "Imported frames", style: { height: "100%", cursor: "default" }, itemsView: React.createElement(FigmaPluginItem, { title: "test", detail: "another" }), callToAction: "Add selected frames", callToActionOnClick: this.onAdd }));
    }
}
ReactDOM.render(React.createElement(App, null), document.getElementById("react-page"));
