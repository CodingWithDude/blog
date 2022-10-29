import { allPosts, type Post } from 'contentlayer/generated';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import PostsComponent from 'src/components/PostsComponent';

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  return { props: { posts: allPosts } };
};

export default function Posts({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <PostsComponent posts={posts} />;
}
