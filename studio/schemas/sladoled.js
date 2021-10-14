export default {
  name: "sladoled",
  title: "Sladoled",
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
      name: "imageOne",
      title: "Image One",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageTwo",
      title: "Image Two",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
}
