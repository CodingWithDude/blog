import { type Options } from 'rehype-pretty-code';

const rehypePrettyCodeOptions: Partial<Options> = {
  theme: 'one-dark-pro',

  onVisitHighlightedLine(node) {
    node.properties.className.push('line--highlighted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word'];
  },
};

export default rehypePrettyCodeOptions;
