import Image from 'next/image';
import Link from 'next/link';
import { BsChatSquareDotsFill, BsTwitter } from 'react-icons/bs';
import { MdOutlineWeb } from 'react-icons/md';

const NavComponent = () => {
  const styledLinkContainer: string =
    'flex flex-col sm:flex-row gap-2 group cursor-pointer text-white items-center';
  const styledIcon: string =
    'text-2xl  bg-gradient-to-b from-cyan-500 text-white group-hover:scale-105 to-green-500 ease-in duration-75 p-1  rounded-lg group-hover:bg-gradient-to-b group-hover:from-purple-500 group-hover:to-cyan-500';
  return (
    <nav
      className={`fixed z-[2] flex justify-center ease-in-out transition-all duration-300 w-full p-6 my-2`}
    >
      <div className="bg-stone-800/75 shadow-md p-4 sm:p-2 flex-1 rounded-2xl max-w-[900px] backdrop-blur-sm">
        <div className="flex grow w-full justify-between items-center gap-3">
          <Link href="/">
            <div className="items-center justify-center group flex w-[54px] h-[54px] rounded-full">
              <div className="items-center cursor-pointer justify-center flex w-[47px] h-[47px] rounded-full bg-gradient-to-b from-cyan-500 to-green-500 group-hover:bg-gradient-to-b group-hover:from-purple-500 group-hover:to-cyan-500 group-hover:duration-1000">
                <Image
                  src="https://res.cloudinary.com/djjxydn3p/image/upload/v1666480691/profile-white-bg-500px_d9qlcq.png"
                  alt="profile picture"
                  className="rounded-full"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </Link>
          <div className="flex px-2 gap-4 md:gap-6 font-medium">
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
                <MdOutlineWeb className={`${styledIcon} `} />
                <p>Portfolio</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
