import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './NavLinks';

const HeaderComponent = () => {
  return (
    <header className="flex flex-col my-48 w-full max-w-[700px] ">
      <div className="flex gap-6">
        <div className="items-center group hover:scale-105 justify-center flex w-[90px] h-[90px] rounded-full bg-stone-600/30">
          <Link href="/">
            <div className="items-center cursor-pointer justify-center flex w-[80px] h-[80px] rounded-full bg-gradient-to-b from-cyan-500 to-green-500 group-hover:bg-gradient-to-b group-hover:from-purple-500 group-hover:to-cyan-500 group-hover:duration-1000">
              <Image
                src="https://res.cloudinary.com/djjxydn3p/image/upload/v1666480691/profile-white-bg-500px_d9qlcq.png"
                alt="profile picture"
                className="rounded-full"
                width={70}
                height={70}
              />
            </div>
          </Link>
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
      <p className="mt-6 text-gray-100 mb-8 ">
        Welcome to my digital playground where I share what I&apos;m learning
        about exciting new technologies and building a career as a self taught
        developer.
      </p>
      <NavLinks />
    </header>
  );
};

export default HeaderComponent;
