import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '../models/Post.interface';
import CardComponent from '../components/CardComponent';

const Home: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <div className="flex flex-col gap-6 items-center">
        {posts.map((post: Post, index: number) => (
          <CardComponent
            key={index}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join('src/posts');

  const files = fs.readdirSync(postsDirectory);

  const blogPosts = files.map((fileName: string) => {
    const slug = fileName.replace('.mdx', '');
    const post = fs.readFileSync(path.join('src/posts', fileName));
    const { data: metaData } = matter(post);
    return { slug, metaData };
  });
  return { props: { posts: blogPosts } };
};
