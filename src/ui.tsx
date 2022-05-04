import * as React from "react";
import * as ReactDOM from "react-dom";
import { FigmaPluginItem, FigmaPluginView } from "./aspect_modules/components";
import "./ui.css";

declare function require(path: string): any;

class App extends React.Component {
  textbox: HTMLInputElement;

  countRef = (element: HTMLInputElement) => {
    if (element) element.value = "5";
    this.textbox = element;
  };

  onAdd = () => {
    const count = parseInt(this.textbox.value, 10);
    parent.postMessage({ pluginMessage: { type: "addFrames", count } }, "*");
  };

  onCancel = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  componentDidMount() {
    window.onmessage = async (event) => {
      switch (event.data.pluginMessage.type) {
        case "networkRequest":
          (() => {
            var request = new XMLHttpRequest();
            // This link has random lorem ipsum text
            request.open(
              "GET",
              "https://cors-anywhere.herokuapp.com/http://www.randomtext.me/download/text/lorem/ul-8/5-15"
            );
            request.responseType = "text";
            request.onload = () => {
              window.parent.postMessage(
                { pluginMessage: request.response },
                "*"
              );
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
    };
  }

  render() {
    return (
      <FigmaPluginView
        title="Imported frames"
        style={{ height: "100%", cursor: "default" }}
        itemsView={<FigmaPluginItem title="test" detail="another" />}
        callToAction="Add selected frames"
        callToActionOnClick={this.onAdd}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react-page"));
