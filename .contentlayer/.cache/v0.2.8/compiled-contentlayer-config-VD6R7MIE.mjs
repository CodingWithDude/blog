// contentlayer.config.js
import { makeSource } from "contentlayer/source-files";

// src/content/definitions/Post.ts
import { defineDocumentType } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `posts/*.mdx`,
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    publishedAt: {
      type: "string",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));

// contentlayer.config.js
var contentlayer_config_default = makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Post]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-VD6R7MIE.mjs.map
