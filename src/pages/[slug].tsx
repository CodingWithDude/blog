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
    <div className="w-full flex flex-col justify-center items-center">
      <div className="max-w-[900px]">
        <h1 className="text-4xl text-gray-100">{post.title}</h1>
        <p>{formatShortDate(post.publishedAt)}</p>
        <MDXContent />
      </div>
    </div>
  );
}
