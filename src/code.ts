import { DesignNode } from "./Data";

figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {
  if (msg.type === "upload-designs") {
    const selectedNodes = figma.currentPage.selection;

    if (selectedNodes.length === 0) {
      figma.ui.postMessage({
        type: "error",
        message: "No designs selected. Please select designs and try again.",
      });
      return;
    }

    try {
      const response = await uploadDesigns(selectedNodes);
      figma.ui.postMessage({
        type: "success",
        message: "Designs uploaded successfully!",
        links: response.data,
      });
    } catch (error) {
      figma.ui.postMessage({
        type: "error",
        message: "Failed to upload designs. Please try again.",
      });
    }
  } else if (msg.type === "close-plugin") {
    figma.closePlugin();
  }
};

async function uploadDesigns(nodes) {
  const designs = nodes.map(DesignNode.fromSceneNode);
  const response = await fetch("http://localhost:80/api/v1/upload-designs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(designs),
  });

  if (!response.ok) {
    throw new Error("Failed to upload designs");
  }

  return await response.json();
}
