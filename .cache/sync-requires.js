const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\oxford\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\oxford\\src\\pages\\404.js"))),
  "component---src-pages-custom-2-js": hot(preferDefault(require("D:\\oxford\\src\\pages\\custom-2.js"))),
  "component---src-pages-custom-new-js": hot(preferDefault(require("D:\\oxford\\src\\pages\\custom-new.js"))),
  "component---src-pages-lookbook-js": hot(preferDefault(require("D:\\oxford\\src\\pages\\lookbook.js"))),
  "component---src-pages-preview-js": hot(preferDefault(require("D:\\oxford\\src\\pages\\preview.js"))),
  "component---src-pages-search-js": hot(preferDefault(require("D:\\oxford\\src\\pages\\search.js"))),
  "component---src-templates-collection-js": hot(preferDefault(require("D:\\oxford\\src\\templates\\Collection.js"))),
  "component---src-templates-gallery-js": hot(preferDefault(require("D:\\oxford\\src\\templates\\Gallery.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("D:\\oxford\\src\\templates\\Page.js"))),
  "component---src-templates-product-js": hot(preferDefault(require("D:\\oxford\\src\\templates\\Product.js"))),
  "component---src-templates-project-js": hot(preferDefault(require("D:\\oxford\\src\\templates\\Project.js")))
}

