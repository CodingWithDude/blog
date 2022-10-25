// contentlayer.config.js
import { makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";

// src/content/definitions/Post.ts
import { defineDocumentType } from "contentlayer/source-files";
import { formatShortDate } from "src/lib/formatShortDate";
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
    },
    publishedAtFormatted: {
      type: "string",
      required: false
    }
  },
  computedFields: {
    publishedAtFormatted: {
      type: "string",
      resolve: (doc) => {
        return formatShortDate(doc.publishedAt);
      }
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));

// src/lib/rehypePrettyCode.ts
var rehypePrettyCodeOptions = {
  theme: "one-dark-pro",
  onVisitHighlightedLine(node) {
    node.properties.className.push("line--highlighted");
  }
};

// contentlayer.config.js
var contentlayer_config_default = makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypePrettyCode, rehypePrettyCodeOptions]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-CY63UHYO.mjs.map
