import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import CardComponent from '../components/CardComponent';
import { Post } from '../models/Post.interface';
import HeroComponent from '../components/HeroComponent';

const Home: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(posts);
  return (
    <div>
      {posts.map((post: Post, index: number) =>
        index === 0 ? (
          <HeroComponent
            key={index}
            post={post}
          />
        ) : (
          <CardComponent
            key={index}
            post={post}
          />
        )
      )}
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
