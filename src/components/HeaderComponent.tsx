import Image from 'next/image';
import React from 'react';

const HeaderComponent = () => {
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
          <a
            href="https://codingwithdude.com"
            className="cursor-pointer"
          >
            <p className="text-gray-400 mt-1">Coding With Dude</p>
          </a>
        </div>
      </div>

      <p className="mt-6 text-gray-100 ">
        Welcome to my digital playground where I share what I&apos;m learning
        about exciting new technologies and building a career as a self taught
        developer.
      </p>
    </header>
  );
};

export default HeaderComponent;
