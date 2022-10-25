import { type Options } from 'rehype-pretty-code';

const rehypePrettyCodeOptions: Partial<Options> = {
  theme: 'one-dark-pro',

  onVisitHighlightedLine(node) {
    node.properties.className.push('line--highlighted');
  },
};

export default rehypePrettyCodeOptions;
