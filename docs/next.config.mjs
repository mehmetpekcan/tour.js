import nextMDX from '@next/mdx';
import rehypeHighlight from 'rehype-highlight';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
});
