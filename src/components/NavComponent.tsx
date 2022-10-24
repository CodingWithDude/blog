import Image from 'next/image';
import { useWindowScroll } from 'react-use';
import NavLinks from './NavLinks';

interface Props {
  yScrollPosition: number;
  navShowYScrollPosition: number;
}

const NavComponent = ({ yScrollPosition, navShowYScrollPosition }: Props) => {
  return (
    <nav
      className={`fixed z-[2] flex justify-between ease-in-out transition-all duration-300 w-full max-w-[700px] p-2 my-6 rounded-2xl bg-stone-800/75 backdrop-blur-sm ${
        yScrollPosition > navShowYScrollPosition ? '' : 'translate-y-[-110vh]'
      }`}
    >
      <div className="items-center justify-center flex w-[54px] h-[54px] rounded-full bg-stone-600/30">
        <div className="items-center cursor-pointer justify-center flex w-[47px] h-[47px] rounded-full bg-gradient-to-b from-cyan-500 to-green-500">
          <Image
            src="https://res.cloudinary.com/djjxydn3p/image/upload/v1666480691/profile-white-bg-500px_d9qlcq.png"
            alt="profile picture"
            className="rounded-full"
            width={40}
            height={40}
          />
        </div>
      </div>
      <NavLinks />
    </nav>
  );
};

export default NavComponent;
