import Image from 'next/image';
import { FC } from 'react';

interface Props {
  title: string;
  dateString: string;
  mainImageUrl: string;
}

const BlogHeaderComponent: FC<Props> = ({
  title,
  dateString,
  mainImageUrl,
}) => {
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
    </div>
  );
};

export default BlogHeaderComponent;
