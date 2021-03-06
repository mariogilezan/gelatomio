// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// We import object and document schemas
// Custom objects and arrays
import blockContent from "./blockContent"
import imageGallery from "./imageGallery"
import recipes from "./recipes"
// Documents
import hero from "./hero"
import products from "./products"
import about from "./about"
import productsMenu from "./productsMenu"
import contact from "./contact"
import gallery from "./gallery"
import torte from "./torte"
import kolaci from "./kolaci"
import macarons from "./macarons"
import sladoled from "./sladoled"
import footer from "./footer"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    hero,
    products,
    about,
    torte,
    kolaci,
    macarons,
    sladoled,
    productsMenu,
    gallery,
    contact,
    footer,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    imageGallery,
    recipes,
  ]),
})
