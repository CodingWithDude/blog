import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsChatSquareDotsFill, BsTwitter } from 'react-icons/bs';
import { MdOutlineWeb } from 'react-icons/md';

const HeaderComponent = () => {
  const styledLinkContainer: string =
    'flex gap-4 text-lg group cursor-pointer text-gray-100 items-center';
  const styledIcon: string =
    'text-4xl bg-gradient-to-b from-cyan-500 group-hover:scale-105 to-green-500 ease-in duration-75 p-[7px] rounded-lg';

  return (
    <header className="flex flex-col mb-12 w-full max-w-[584px] ">
      <div className="flex gap-6">
        <div className="items-center justify-center flex w-[90px] h-[90px] rounded-full bg-stone-600/30">
          <div className="items-center cursor-pointer justify-center flex w-[80px] h-[80px] rounded-full bg-gradient-to-b from-cyan-500 to-green-500">
            <Image
              src="https://res.cloudinary.com/djjxydn3p/image/upload/v1666480691/profile-white-bg-500px_d9qlcq.png"
              alt="profile picture"
              className="rounded-full"
              width={70}
              height={70}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-gray-50 text-4xl">Ryan</h1>
          <Link
            href="https://codingwithdude.com"
            passHref
          >
            <p className="text-gray-400 mt-1 cursor-pointer">
              Coding With Dude
            </p>
          </Link>
        </div>
      </div>
      <p className="mt-6 text-gray-100 ">
        Welcome to my digital playground where I share what I&apos;m learning
        about exciting new technologies and building a career as a self taught
        developer.
      </p>
      <div className="flex gap-6 font-medium my-12">
        <Link
          href="https://codingwithdude.com"
          passHref
        >
          <div className={styledLinkContainer}>
            <BsChatSquareDotsFill className={styledIcon} />
            <p>Posts</p>
          </div>
        </Link>
        <Link
          href="https://codingwithdude.com"
          passHref
        >
          <div className={styledLinkContainer}>
            <BsTwitter className={styledIcon} />
            <p>Twitter</p>
          </div>
        </Link>
        <Link
          href="https://codingwithdude.com"
          passHref
        >
          <div className={styledLinkContainer}>
            <MdOutlineWeb className={`${styledIcon} p-[3px]`} />
            <p>Portfolio</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
