import { allPosts, type Post } from 'contentlayer/generated';
import Link from 'next/link';
import { formatShortDate } from 'src/lib/formatShortDate';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react';
import { useWindowSize } from 'react-use';
import { InView } from 'react-intersection-observer';

interface Props {
  posts: Post[];
}
export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  return { props: { posts: allPosts } };
};

const PostsComponent = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { height } = useWindowSize();

  return (
    <div className="flex w-full flex-col px-6 gap-6 items-center">
      {[...posts].reverse().map((post) => (
        <Link
          key={post.slug}
          href={post.slug}
        >
          <div>
            <InView
              threshold={0}
              rootMargin={`-${height / 2 - 15}px 0px -${height / 2 - 15}px 0px`}
            >
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`flex rounded-2xl bg-transparent duration-300 ${
                    inView ? 'bg-gradient-to-b from-cyan-500 to-green-500' : ''
                  }`}
                >
                  <div className="bg-stone-800 z-[1] p-6 ease-in duration-300 m-[3px] flex flex-col w-full max-w-[900px] rounded-2xl justify-between hover:bg-stone-700 cursor-pointer ">
                    <h2 className="text-gray-100 text-2xl font-medium">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-xs py-1">
                      {formatShortDate(post.publishedAt)}
                    </p>
                    <p className="text-gray-300">{post.description}</p>
                  </div>
                </div>
              )}
            </InView>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostsComponent;
