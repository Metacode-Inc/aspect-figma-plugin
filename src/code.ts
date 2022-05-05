figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {
  try {
    switch (msg.type) {
      case "addSelectedFrames":
        // send selected frames to the plugin
        figma.ui.postMessage({
          type: "addSelectedFrames",
          frames: figma.currentPage.selection.filter((x) => x.type === "FRAME"),
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
