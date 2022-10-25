import { allPosts, type Post } from 'contentlayer/generated';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import Link from 'next/link';

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  return { props: { posts: allPosts } };
};

export default function PostListPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex z-[1] w-full h-full flex-col gap-6 items-center">
      {posts.map((post) => (
        <div
          className="bg-stone-800  p-6 gap-2 flex flex-col w-full max-w-[900px] rounded-2xl justify-between hover:bg-stone-700 cursor-pointer"
          key={post.slug}
        >
          <h2>
            <Link href={post.slug}>{post.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
}
