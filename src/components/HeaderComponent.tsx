import Image from 'next/image';
import Link from 'next/link';
import { BsChatSquareDotsFill, BsTwitter } from 'react-icons/bs';
import { MdOutlineWeb } from 'react-icons/md';
import { TbMessage2 } from 'react-icons/tb';
import { BiMessageAltDetail } from 'react-icons/bi';
import { RiProfileLine } from 'react-icons/ri';

const HeaderComponent = () => {
  const styledLinkContainer: string =
    'flex gap-2 md:gap-4 group cursor-pointer text-white items-center';
  const styledIcon: string =
    'text-2xl md:text-3xl bg-gradient-to-b from-cyan-500 text-white group-hover:scale-105 to-green-500 ease-in duration-75 p-1  rounded-lg group-hover:bg-gradient-to-b group-hover:from-purple-500 group-hover:to-cyan-500';
  return (
    <header className="flex flex-col mt-48 w-full max-w-[1100px] ">
      <div className="flex gap-6">
        <div className="items-center group hover:scale-105 justify-center flex w-[90px] h-[90px] md:w-[130px] md:h-[130px] rounded-full bg-stone-600/30">
          <Link href="/">
            <div className="items-center cursor-pointer justify-center flex w-[80px] h-[80px] md:w-[115px] md:h-[115px] rounded-full bg-gradient-to-b from-cyan-500 to-green-500 group-hover:bg-gradient-to-b group-hover:from-purple-500 group-hover:to-cyan-500 group-hover:duration-1000">
              <div className="flex items-center p-[6px]">
                <Image
                  src="https://res.cloudinary.com/djjxydn3p/image/upload/v1666480691/profile-white-bg-500px_d9qlcq.png"
                  alt="profile picture"
                  className="rounded-full"
                  objectFit="cover"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-gray-100 text-4xl md:text-7xl">Ryan</h1>
          <Link
            href="https://codingwithdude.com"
            passHref
          >
            <p className="text-gray-400 mt-1 md:mt-2 cursor-pointer md:text-xl">
              Coding With Dude
            </p>
          </Link>
        </div>
      </div>
      <p className="mt-6 text-gray-100 mb-8 lg:text-4xl">
        Welcome to my digital playground where I share what I&apos;m learning
        about exciting new technologies and building a career as a self taught
        developer.
      </p>
      <div className="flex px-2 gap-4 md:gap-10 font-medium md:text-2xl">
        <Link
          href="/posts"
          passHref
        >
          <div className={styledLinkContainer}>
            <BiMessageAltDetail className={styledIcon} />
            <p>Posts</p>
          </div>
        </Link>
        <Link
          href="https://twitter.com/codingwithdude"
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
            <RiProfileLine className={`${styledIcon} `} />
            <p>Portfolio</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
