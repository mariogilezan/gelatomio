export default {
  name: "productsSection",
  title: "Products Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        slugify: input => `/${input.toLowerCase()}`,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "productImage",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
}
