import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import BlogHeaderComponent from '../components/BlogHeaderComponent';

const components = {
  BlogHeaderComponent,
};

export default function Post({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <MDXRemote
        {...source}
        components={components}
      />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join('src/posts');
  console.log(`postsDirectory: ${postsDirectory}`);

  const files = fs.readdirSync(postsDirectory);
  console.log(`files: ${files}`);

  const paths = files.map((fileName: string) => ({
    params: {
      slug: fileName.replace('.mdx', ''),
    },
  }));
  console.log(`paths: ${paths}`);

  return {
    paths,
    fallback: false,
  };
};

type Params = {
  [param: string]: any;
};

export const getStaticProps: GetStaticProps<Params> = async ({
  params: { slug },
}: Params) => {
  const post = fs.readFileSync(path.join('src/posts', slug + '.mdx'));

  const { data: metaData, content } = matter(post);

  const mdxSource = await serialize(content, {
    scope: metaData,
  });

  return { props: { source: mdxSource } };
};
