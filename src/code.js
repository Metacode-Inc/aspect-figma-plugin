var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DesignNode } from "./Data";
figma.showUI(__html__);
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
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
                    idToken: yield figma.clientStorage.getAsync("idToken"),
                    refreshToken: yield figma.clientStorage.getAsync("refreshToken"),
                    expiresIn: yield figma.clientStorage.getAsync("expiresIn"),
                });
                break;
            case "saveAuthData":
                yield figma.clientStorage.setAsync("idToken", msg.idToken);
                yield figma.clientStorage.setAsync("refreshToken", msg.refreshToken);
                yield figma.clientStorage.setAsync("expiresIn", msg.expiresIn);
                break;
            case "deleteAuthData":
                yield figma.clientStorage.setAsync("idToken", "");
                yield figma.clientStorage.setAsync("refreshToken", "");
                yield figma.clientStorage.setAsync("expiresIn", "");
                break;
            default:
                break;
        }
    }
    catch (error) {
        console.log("ui.onmessage", error);
    }
});
figma.on("selectionchange", () => {
    figma.ui.postMessage({
        type: "selectionChange",
        frames: figma.currentPage.selection
            .filter((x) => x.type === "FRAME")
            .map((frame) => JSON.stringify(getNodeData(frame))),
    });
});
function getNodeData(node) {
    const data = new DesignNode(node.id, node.name, node.type, undefined, node.absoluteRenderBounds, node.blendMode, node.bottomLeftRadius, node.bottomRightRadius, node.characters, node.fills, node.fontName, node.fontSize, node.letterSpacing, node.lineHeight, node.opacity, node.paddingLeft, node.paddingRight, node.paddingTop, node.paddingBottom, node.rotation, node.strokeAlign, node.strokeCap, node.strokeGeometry, node.strokeJoin, node.strokeMiterLimit, node.strokeStyleId, node.strokeWeight, node.strokes, node.textAlignHorizontal, node.textAlignVertical, node.textAutoResize, node.textCase, node.textDecoration, node.topLeftRadius, node.topRightRadius);
    if (node.children) {
        node.children.forEach((child) => {
            data.children.push(getNodeData(child));
        });
    }
    return data;
}
function getFramesToExport() {
    const frames = [];
    figma.root
        .findAll((node) => node.type === "FRAME" && node.getPluginData("shouldExport") === "true")
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
    const pageFrameIds = {};
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
