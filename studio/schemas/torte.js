export default {
  name: "torte",
  title: "Torte",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "recipeList",
      title: "Recipe List",
      type: "array",
      of: [
        {
          type: "recipes",
        },
      ],
    },
    {
      name: "torteImage",
      title: "Torte Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
}
