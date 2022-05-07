import { DesignNode, Rect } from "./Data";

figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {
  try {
    switch (msg.type) {
      case "getFramesToExport":
        figma.ui.postMessage({
          type: "getFramesToExport",
          frames: getFramesToExport(),
        });
        break;
      case "addSelectedFramesToExport":
        figma.currentPage.selection
          .filter((x) => x.type === "FRAME")
          .forEach((node) => {
            node.setPluginData("shouldExport", "true");
          });
        figma.ui.postMessage({
          type: "getFramesToExport",
          frames: getFramesToExport(),
        });
        break;
      case "removeFrameFromExport":
        figma.root
          .findAll((node) => node.id === msg.id)
          .forEach((node) => {
            node.setPluginData("shouldExport", "");
          });
        figma.ui.postMessage({
          type: "getFramesToExport",
          frames: getFramesToExport(),
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

figma.on("selectionchange", () => {
  console.log("selectionchange");

  figma.ui.postMessage({
    type: "selectionChange",
    frames: figma.currentPage.selection
      .filter((x) => x.type === "FRAME")
      .map((frame) => getNodeData(frame)),
  });
});

function getNodeData(node: any) {
  const data = new DesignNode(
    node.id,
    node.name,
    node.type,
    new Rect(node.x, node.y, node.width, node.height),
    undefined,
    undefined,
    (node as any).fills ? (node as any).fills : undefined
  );
  if (node.children) {
    node.children.forEach((child) => {
      data.children.push(getNodeData(child));
    });
  }
  return data;
}

function getFramesToExport() {
  const frames: DesignNode[] = [];
  figma.root
    .findAll(
      (node) =>
        node.type === "FRAME" && node.getPluginData("shouldExport") === "true"
    )
    .forEach((frame) => {
      frames.push(getNodeData(frame));
    });
  return frames;
}
