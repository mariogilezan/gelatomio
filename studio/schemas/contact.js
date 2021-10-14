export default {
  name: "contact",
  title: "Contact",
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
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "mobileNumber",
      title: "Mobile Number",
      type: "string",
    },
    {
      name: "ownerName",
      title: "Owner Name",
      type: "string",
    },
    {
      name: "ownerEmail",
      title: "Owner Email",
      type: "string",
    },
    {
      name: "managerName",
      title: "Manager Name",
      type: "string",
    },
    {
      name: "managerEmail",
      title: "Manager Email",
      type: "string",
    },
    {
      name: "contactImage",
      title: "Contact Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
}
