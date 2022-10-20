import Image from 'next/image';
import { FC } from 'react';
import { Post } from '../models/Post.interface';
import { Tag } from '../models/Tag';

const HeroComponent: FC<{ post: Post }> = ({ post }: { post: Post }) => {
  const { slug, metaData } = post;
  const { title, dateString, mainImageUrl, excerpt, tags } = metaData;

  return (
    <div>
      <h1>{title}</h1>

      <Image
        src={mainImageUrl}
        alt="main image"
        width={200}
        height={200}
      />
      <p>Posted on {dateString}</p>
      <p>hero</p>
    </div>
  );
};

export default HeroComponent;
