import * as React from "react";
import * as ReactDOM from "react-dom";
import { FigmaPluginItem, FigmaPluginView } from "./aspect_modules/components";
import "./ui.css";

declare function require(path: string): any;

class App extends React.Component {
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
  }

  render() {
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
}

ReactDOM.render(<App />, document.getElementById("react-page"));
