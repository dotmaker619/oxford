module.exports = [{
      plugin: require('../node_modules/gatsby-theme-shopify-manager/gatsby-browser.js'),
      options: {"plugins":[],"accessToken":"55c5b043a2ce51502bdf5296f49d73e8","shouldConfigureSourcePlugin":false,"shopName":"oxford-pennant"},
    },{
      plugin: require('../node_modules/gatsby-source-prismic/gatsby-browser.js'),
      options: {"plugins":[],"repositoryName":"oxfordpennant","accessToken":"MC5YdEt4YnhFQUFDUUFOSmZh.77-977-977-977-9B3JL77-977-9Je-_vQ0_Ou-_vStG77-9Qxnvv73vv70LWO-_vXzvv70bae-_vRrvv70","prismicToolbar":true,"schemas":{"page":{"Main":{"uid":{"type":"UID","config":{"label":"Slug","placeholder":"Appears in the URL (e.g. /about-us)"}},"title":{"type":"StructuredText","config":{"single":"heading1","label":"Title"}},"body":{"type":"Slices","fieldset":"Slice zone","config":{"labels":{"column_paragraph":[],"large_image":[],"blockquote":[],"video":[],"large_image1":[],"columns":[],"instagram":[],"spotlight":[],"paragraph":[],"hero":[],"image":[],"faq":[],"cards":[],"features":[],"split":[],"title":[]},"choices":{"paragraph":{"type":"Slice","fieldset":"Paragraph","description":"Full width text","icon":"face","display":"list","non-repeat":{"content":{"type":"StructuredText","config":{"multi":"paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item","label":"Content"}}},"repeat":{}},"columns":{"type":"Slice","fieldset":"Content Grid","description":"As many as you want","icon":"border_all","display":"grid","non-repeat":{},"repeat":{"image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}},"image_size":{"type":"Select","config":{"options":["Small","Medium","Large","Bleed"],"default_value":"Small","label":"Image Size"}},"header":{"type":"StructuredText","config":{"single":"heading1, heading2, heading3, heading4, heading5, heading6","label":"Header"}},"description":{"type":"StructuredText","config":{"multi":"paragraph, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, list-item","label":"Description"}},"button_text":{"type":"Text","config":{"label":"Button Text"}},"button_path":{"type":"Text","config":{"label":"Button Path","placeholder":"(i.e. /about-us)"}},"link":{"type":"Link","config":{"label":"Link"}}}},"blockquote":{"type":"Slice","fieldset":"Blockquote","description":"Large italicized text","icon":"format_quote","display":"list","non-repeat":{"quote":{"type":"StructuredText","config":{"multi":"paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item","label":"Quote"}}},"repeat":{}},"marquee":{"type":"Slice","fieldset":"Marquee","description":"Scrolling text","icon":"format_color_text","display":"list","non-repeat":{"text":{"type":"StructuredText","config":{"multi":"strong, em, hyperlink","label":"Text"}},"style":{"type":"Select","config":{"options":["Light","Dark"],"default_value":"Light","label":"Style"}}},"repeat":{}},"video":{"type":"Slice","fieldset":"Video","description":"Video Player","icon":"play_arrow","display":"list","non-repeat":{"url":{"type":"Embed","config":{"label":"URL","placeholder":"YouTube, Vimeo, etc"}}},"repeat":{}},"hero":{"type":"Slice","fieldset":"Hero","description":"Large image(s) with text","icon":"accessibility","display":"list","non-repeat":{"title":{"type":"Text","config":{"label":"Title"}},"content":{"type":"StructuredText","config":{"multi":"paragraph, strong, em, hyperlink, list-item","label":"Content"}},"link_text":{"type":"Text","config":{"label":"Link Text"}},"link_path":{"type":"Text","config":{"label":"Link Path","placeholder":"/about-us"}}},"repeat":{"image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}}}},"image":{"type":"Slice","fieldset":"Image","description":"Large Image","icon":"image","display":"list","non-repeat":{"image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}}},"repeat":{}},"faq":{"type":"Slice","fieldset":"FAQ","description":"Frequently Asked Questions","icon":"live_help","display":"list","non-repeat":{},"repeat":{"question":{"type":"StructuredText","config":{"single":"heading3","label":"Question"}},"answer":{"type":"StructuredText","config":{"multi":"paragraph, strong, em, hyperlink, image, list-item, o-list-item","label":"Answer"}}}},"spotlight":{"type":"Slice","fieldset":"Spotlight","description":"Featured Collection","icon":"search","display":"list","non-repeat":{"title":{"type":"Text","config":{"label":"Title"}},"content":{"type":"StructuredText","config":{"multi":"paragraph, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, list-item, o-list-item","label":"Content"}},"buttonText":{"type":"Text","config":{"label":"Button Text"}},"buttonPath":{"type":"Text","config":{"label":"Button Path"}},"image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}},"icon":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Icon"}}},"repeat":{"product":{"type":"IntegrationFields","config":{"catalog":"oxfordpennant--shopify","label":"Product"}}}},"cards":{"type":"Slice","fieldset":"Cards","description":"A grid of cards like Collabs or Galleries","icon":"subtitles","display":"grid","non-repeat":{},"repeat":{"card":{"type":"Link","config":{"select":"document","customtypes":["gallery","project"],"label":"Card"}}}},"features":{"type":"Slice","fieldset":"Features","description":"Made in the USA","icon":"art_track","display":"grid","non-repeat":{},"repeat":{"icon":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Icon"}},"title":{"type":"StructuredText","config":{"single":"heading6","label":"Title"}},"content":{"type":"StructuredText","config":{"multi":"paragraph, strong, em, hyperlink","label":"Content"}}}},"split":{"type":"Slice","fieldset":"Split","description":"Text on one side, media on the other","icon":"face","display":"list","non-repeat":{"title1":{"type":"StructuredText","config":{"single":"heading1","label":"Title"}},"content":{"type":"StructuredText","config":{"multi":"paragraph, preformatted, strong, em, hyperlink, list-item, o-list-item","label":"Content"}}},"repeat":{"image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}}}},"title":{"type":"Slice","fieldset":"Title","description":"Simple Title","icon":"short_text","display":"list","non-repeat":{"title":{"type":"StructuredText","config":{"single":"heading1","label":"Title"}},"subtitle":{"type":"StructuredText","config":{"multi":"strong, em, hyperlink","label":"Subtitle"}}},"repeat":{}}}}}},"SEO":{"seo_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}},"seo_title":{"type":"Text","config":{"label":"Title"}},"seo_description":{"type":"Text","config":{"label":"Description"}},"seo_keywords":{"type":"Text","config":{"label":"Keywords"}}}},"project":{"Main":{"title":{"type":"StructuredText","config":{"single":"heading1","label":"Title"}},"uid":{"type":"UID","config":{"label":"Slug","placeholder":"(i.e. project-name)"}},"shopify_collection_handle":{"type":"Text","config":{"label":"Shopify Collection Handle"}},"image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}},"teaser":{"type":"StructuredText","config":{"multi":"paragraph, strong, em, hyperlink, embed","label":"Teaser"}},"body":{"type":"Slices","fieldset":"Slice zone","config":{"labels":{},"choices":{"content_grid":{"type":"Slice","fieldset":"Content Grid","description":"As many as you want","icon":"border_all","display":"grid","non-repeat":{},"repeat":{"image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}},"image_size":{"type":"Select","config":{"options":["Small","Medium","Large","Bleed"],"default_value":"Small","label":"Image Size"}},"header":{"type":"StructuredText","config":{"single":"heading1, heading2, heading3, heading4, heading5, heading6","label":"Header"}},"description":{"type":"StructuredText","config":{"multi":"paragraph, heading6, strong, em, hyperlink, list-item","label":"Description"}},"button_text":{"type":"Text","config":{"label":"Button Text"}},"button_path":{"type":"Text","config":{"label":"Button Path","placeholder":"(i.e. /about-us)"}}}},"video":{"type":"Slice","fieldset":"Video","description":"Video Player","icon":"play_arrow","display":"list","non-repeat":{"size":{"type":"Select","config":{"options":["Large","Medium","Small"],"default_value":"Large","label":"Size"}},"url":{"type":"Embed","config":{"label":"URL","placeholder":"YouTube, Vimeo, etc"}}},"repeat":{}},"image":{"type":"Slice","fieldset":"Image","description":"Large Image","icon":"image","display":"list","non-repeat":{"image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}}},"repeat":{}}}}}},"SEO":{"seo_image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}},"seo_title":{"type":"Text","config":{"label":"Title"}},"seo_description":{"type":"Text","config":{"label":"Description"}},"seo_keywords":{"type":"Text","config":{"label":"Keywords"}}}},"custom":{"Main":{"title":{"type":"StructuredText","config":{"single":"heading1","label":"Title"}},"content":{"type":"StructuredText","config":{"multi":"paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item","allowTargetBlank":true,"label":"Content"}},"colors":{"type":"Group","config":{"fields":{"name":{"type":"Text","config":{"label":"Name"}},"color":{"type":"Color","config":{"label":"Color"}}},"label":"Colors"}},"icons":{"type":"Group","config":{"fields":{"icon":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Icon"}},"name":{"type":"Text","config":{"label":"Name"}}},"label":"Icons"}},"type_style":{"type":"Group","config":{"fields":{"image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}},"name":{"type":"Text","config":{"label":"Name"}}},"label":"Type Style"}},"galleries":{"type":"Group","config":{"fields":{"gallery":{"type":"Link","config":{"select":"document","label":"Gallery","customtypes":["gallery"]}}},"label":"Galleries"}}}},"layout":{"Main":{"name":{"type":"Text","config":{"label":"Name"}}},"ProductNavigation":{"productNavigation":{"type":"Slices","fieldset":"Slice zone","config":{"labels":{"section":[]},"choices":{"section":{"type":"Slice","fieldset":"Section","description":"Product Type","icon":"collections_bookmark","display":"list","non-repeat":{"header":{"type":"Text","config":{"label":"Header"}},"path":{"type":"Text","config":{"label":"Path (Optional)","placeholder":""}}},"repeat":{"text":{"type":"Text","config":{"label":"Text"}},"path":{"type":"Text","config":{"label":"Path","placeholder":""}}}}}}}},"Banner":{"bannerText":{"type":"StructuredText","config":{"multi":"strong, em","label":"Banner Text"}},"bannerPath":{"type":"Text","config":{"label":"Banner Path","placeholder":"i.e. /pennants"}}},"Navigation":{"navigationItems":{"type":"Group","config":{"fields":{"text":{"type":"Text","config":{"label":"Text"}},"path":{"type":"Text","config":{"label":"Path","placeholder":"i.e. /custom"}}},"label":"Navigation Items"}}},"Footer":{"body":{"type":"Slices","fieldset":"Slice zone","config":{"labels":{"link_column":[]},"choices":{"link_column":{"type":"Slice","fieldset":"Link Column","description":"Column of links","icon":"filter_list","display":"list","non-repeat":{"title":{"type":"StructuredText","config":{"single":"heading3","label":"Title"}}},"repeat":{"text":{"type":"Text","config":{"label":"Text"}},"path":{"type":"Text","config":{"label":"Path","placeholder":"/about"}}}}}}}}},"instagram":{"Main":{"date":{"type":"Timestamp","config":{"label":"Date"}},"image":{"type":"Link","config":{"select":"media","label":"Image"}},"instagram":{"type":"Embed","config":{"label":"Instagram"}},"products":{"type":"Group","config":{"fields":{"product":{"type":"IntegrationFields","config":{"catalog":"oxfordpennant--shopify","label":"Product"}}},"label":"Products"}}}},"gallery":{"Main":{"title":{"type":"StructuredText","config":{"single":"heading1","label":"Title"}},"uid":{"type":"UID","config":{"label":"uid","placeholder":"gallery-title"}},"teaser":{"type":"StructuredText","config":{"multi":"paragraph, strong, em, hyperlink","label":"Teaser"}},"images":{"type":"Group","config":{"fields":{"image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}}},"label":"Images"}}}},"product_category_detail":{"Main":{"productType":{"type":"Select","config":{"options":["Flag","Pennant","Camp Flag","Banner"],"default_value":"Flag","label":"Product Type"}},"body":{"type":"Slices","fieldset":"Slice zone","config":{"labels":{"video":[]},"choices":{"video":{"type":"Slice","fieldset":"Video","description":"Video Player","icon":"play_circle_outline","display":"list","non-repeat":{"url":{"type":"Embed","config":{"label":"URL"}}},"repeat":{}},"columns":{"type":"Slice","fieldset":"Columns","description":"As many as you want","icon":"view_column","display":"grid","non-repeat":{},"repeat":{"image":{"type":"Image","config":{"constraint":{},"thumbnails":[],"label":"Image"}},"title":{"type":"Text","config":{"label":"Title"}},"description":{"type":"StructuredText","config":{"multi":"paragraph, heading6, strong, em, hyperlink, list-item","label":"Description"}}}}}}}}}}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
