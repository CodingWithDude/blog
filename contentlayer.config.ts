import { makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypePrettyCodeOptions from './src/lib/rehypePrettyCode';
import { Post } from './src/content/definitions/Post';

export default makeSource({
  // Location of source files for all defined documentTypes
  contentDirPath: './src/content',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});
