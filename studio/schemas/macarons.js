export default {
  name: "macarons",
  title: "Macarons",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "imageGallery",
      type: "imageGallery",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "macaronsImage",
      title: "Macarons Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
}
