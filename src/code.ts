import { DesignNode } from "./Data";

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
      case "deleteAuthData":
        await figma.clientStorage.setAsync("idToken", "");
        await figma.clientStorage.setAsync("refreshToken", "");
        await figma.clientStorage.setAsync("expiresIn", "");
        break;

      default:
        break;
    }
  } catch (error) {
    console.log("ui.onmessage", error);
  }
};

figma.on("selectionchange", () => {
  figma.ui.postMessage({
    type: "selectionChange",
    frames: figma.currentPage.selection
      .filter((x) => x.type === "FRAME")
      .map((frame) => JSON.stringify(getNodeData(frame))),
  });
});

function getNodeData(node: any) {
  const data = new DesignNode(
    node.id,
    node.name,
    node.type,
    undefined,
    node.absoluteRenderBounds,
    node.blendMode,
    node.bottomLeftRadius,
    node.bottomRightRadius,
    node.characters,
    node.fills,
    node.fontName,
    node.fontSize,
    node.letterSpacing,
    node.lineHeight,
    node.opacity,
    node.paddingLeft,
    node.paddingRight,
    node.paddingTop,
    node.paddingBottom,
    node.rotation,
    node.strokeAlign,
    node.strokeCap,
    node.strokeGeometry,
    node.strokeJoin,
    node.strokeMiterLimit,
    node.strokeStyleId,
    node.strokeWeight,
    node.strokes,
    node.textAlignHorizontal,
    node.textAlignVertical,
    node.textAutoResize,
    node.textCase,
    node.textDecoration,
    node.topLeftRadius,
    node.topRightRadius,
    node.layoutAlign,
    node.layoutGrids,
    node.layoutGrow,
    node.layoutMode,
    node.layoutPositioning,
    node.itemSpacing,
    node.primaryAxisAlignItems,
    node.primaryAxisSizingMode,
    node.counterAxisAlignItems,
    node.counterAxisSizingMode
  );

  if (node.children) {
    node.children.forEach((child) => {
      data.children.push(getNodeData(child));
    });
  }
  return data;
}

function getFramesToExport() {
  const frames: string[] = [];
  figma.root
    .findAll(
      (node) =>
        node.type === "FRAME" && node.getPluginData("shouldExport") === "true"
    )
    .forEach((frame) => {
      frames.push(JSON.stringify(getNodeData(frame)));
    });
  return frames;
}

setInterval(() => {
  // keep frames in sync
  figma.ui.postMessage({
    type: "getFramesToExport",
    frames: getFramesToExport(),
  });

  // keep pages in sync
  const pageFrameIds: {
    [pageId: string]: { name: string; frameIds: string[] };
  } = {};
  figma.root.children.forEach((page) => {
    page
      .findAll((node) => node.type === "FRAME")
      .forEach((frame) => {
        if (!pageFrameIds[page.id]) {
          pageFrameIds[page.id] = { name: page.name, frameIds: [] };
        }
        pageFrameIds[page.id].frameIds.push(frame.id);
      });
  });
  figma.ui.postMessage({
    type: "getPageNodeIds",
    pageFrameIds,
  });
}, 1000);
