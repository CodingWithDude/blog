import { allPosts, type Post } from 'contentlayer/generated';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import PostsComponent from 'src/components/PostsComponent';
import { formatShortDate } from 'src/lib/formatShortDate';

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  return { props: { posts: allPosts } };
};

export default function PostListPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <PostsComponent posts={posts} />;
}
