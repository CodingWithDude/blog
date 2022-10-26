import { allPosts, type Post } from 'contentlayer/generated';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { formatShortDate } from 'src/lib/formatShortDate';

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: Post;
}> = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

export default function SinglePostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="max-w-[900px]">
        <h1 className="text-4xl font-medium px-6 text-gray-100">
          {post.title}
        </h1>

        <h3 className="text-gray-300 px-6 text-2xl pt-4 ">
          {post.description}
        </h3>
        <p className="text-gray-500 px-6 mb-24 pt-1 ">
          {formatShortDate(post.publishedAt)}
        </p>
        <div
          id="post"
          className="pb-24 w-screen max-w-[900px] px-6"
        >
          <MDXContent />
        </div>
      </div>
    </div>
  );
}
