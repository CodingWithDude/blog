import { allPosts, type Post } from 'contentlayer/generated';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { formatShortDate } from 'src/lib/formatShortDate';

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  return { props: { posts: allPosts } };
};

export default function Posts({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex z-[1] w-full h-full flex-col gap-6 items-center">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={post.slug}
        >
          <div className="bg-stone-800 p-6 flex flex-col w-full max-w-[900px] rounded-2xl justify-between hover:bg-stone-700 cursor-pointer">
            <h2 className="text-gray-100 text-2xl font-medium">{post.title}</h2>
            <p className="text-gray-400 text-xs py-1">
              {formatShortDate(post.publishedAt)}
            </p>
            <p className="text-gray-300">{post.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
