import Link from 'next/link';
import { BsChatSquareDotsFill, BsTwitter } from 'react-icons/bs';
import { MdOutlineWeb } from 'react-icons/md';

const NavLinks = () => {
  const styledLinkContainer: string =
    'flex gap-4 text-lg group cursor-pointer text-white items-center';
  const styledIcon: string =
    'text-4xl bg-gradient-to-b from-cyan-500 text-white group-hover:scale-105 to-green-500 ease-in duration-75 p-[7px] rounded-lg group-hover:bg-gradient-to-b group-hover:from-purple-500 group-hover:to-cyan-500';

  return (
    <div className="flex gap-6 font-medium">
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
  );
};

export default NavLinks;
