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
import rehypePrettyCode from "rehype-pretty-code";
import { rehypePrettyCodeOptions } from "rehype-pretty-code-options";
var contentlayer_config_default = makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypePrettyCode]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-73KL6R3K.mjs.map
