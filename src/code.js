figma.showUI(__html__);
figma.ui.onmessage = (msg) => {
    if (msg.type === "addSelectedFrames") {
        const selectedFrames = figma.currentPage.selection.filter((x) => x.type === "FRAME");
        // send selected frames to the plugin
        figma.ui.postMessage({
            type: "addSelectedFrames",
            frames: selectedFrames,
        });
    }
};
