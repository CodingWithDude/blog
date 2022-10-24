import Image from 'next/image';
import { FC } from 'react';
import { Post } from '../models/Post.interface';
import { Tag } from '../models/Tag';
import { useRouter } from 'next/router';
import Link from 'next/link';

const CardComponent: FC<{ post: Post }> = ({ post }: { post: Post }) => {
  const { slug, metaData } = post;
  const { title, dateString, description, excerpt, tags } = metaData;
  const router = useRouter();

  return (
    <Link
      href={slug}
      passHref
    >
      <div className="bg-stone-800 z-[1] p-6 gap-2 flex flex-col w-full max-w-[700px] rounded-2xl justify-between hover:bg-stone-700 cursor-pointer">
        <h2 className="text-gray-50 text-lg">{title}</h2>
        <p className="text-gray-500 text-sm -mt-2">
          {dateString.slice(0, 3) +
            ' ' +
            dateString.split(' ')[1].replace(',', '')}
        </p>
        <p className="text-gray-400">{description}</p>
      </div>
    </Link>
  );
};

export default CardComponent;
