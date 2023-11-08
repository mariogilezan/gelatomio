import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import schemas from "./schemas/schema"

export default defineConfig({
  title: "gelatomio-studio",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  plugins: [deskTool(), visionTool()],
  tools: (prev, context) => {
    const isAdmin = context.currentUser.roles.find(
      ({ name }) => name === "administrator"
    )
    if (isAdmin) {
      return prev
    }
    return prev.filter(tool => tool.name !== "vision")
  },
  schema: {
    types: schemas,
  },
})
