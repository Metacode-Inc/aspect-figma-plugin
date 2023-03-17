import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";

declare function require(path: string): any;
const App = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [links, setLinks] = useState([]);

  window.onmessage = (event) => {
    const msg = event.data.pluginMessage;
    if (msg.type === "success") {
      setStatusMessage(msg.message);
      setLinks(msg.links);
    } else if (msg.type === "error") {
      setStatusMessage(msg.message);
    }
  };

  const handleUpload = () => {
    parent.postMessage({ pluginMessage: { type: "upload-designs" } }, "*");
  };

  const handleClose = () => {
    parent.postMessage({ pluginMessage: { type: "close-plugin" } }, "*");
  };

  return (
    <div>
      <h1>Upload Designs</h1>
      <button onClick={handleUpload}>Upload Selected Designs</button>
      <button onClick={handleClose}>Close Plugin</button>
      <p>{statusMessage}</p>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link} target="_blank">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("react-page"));
