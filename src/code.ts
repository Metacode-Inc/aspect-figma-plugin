import { DesignNode, Rect } from "./Data";

figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {
  try {
    switch (msg.type) {
      case "getSelectedNodes":
        // send selected frames to the plugin
        figma.ui.postMessage({
          type: "getSelectedNodes",
          frames: figma.currentPage.selection.filter((x) => x.type === "FRAME"),
        });
        (
          figma.currentPage.selection.filter(
            (x) => x.type === "FRAME"
          )[0] as FrameNode
        ).findAll((node) => {
          const printable = new DesignNode(
            node.id,
            node.name,
            node.type,
            new Rect(node.x, node.y, node.width, node.height),
            undefined,
            undefined,
            (node as any).fills ? (node as any).fills : undefined
          );
          console.log(JSON.stringify(printable));

          return true;
        });
        break;
      case "getSavedAuthData":
        figma.ui.postMessage({
          type: "getSavedAuthData",
          idToken: await figma.clientStorage.getAsync("idToken"),
          refreshToken: await figma.clientStorage.getAsync("refreshToken"),
          expiresIn: await figma.clientStorage.getAsync("expiresIn"),
        });
        break;
      case "saveAuthData":
        await figma.clientStorage.setAsync("idToken", msg.idToken);
        await figma.clientStorage.setAsync("refreshToken", msg.refreshToken);
        await figma.clientStorage.setAsync("expiresIn", msg.expiresIn);
        break;

      default:
        break;
    }
  } catch (error) {
    console.log("ui.onmessage", error);
  }
};
