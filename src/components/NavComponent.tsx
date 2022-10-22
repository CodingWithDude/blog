import Image from 'next/image';

const NavComponent = () => {
  return (
    <nav className="fixed w-full max-w-[584px] py-4 my-6 rounded-2xl backdrop-blur-lg">
      <div className="items-center justify-center flex w-[54px] h-[54px] rounded-full bg-stone-600/30">
        <div className="items-center justify-center flex w-[47px] h-[47px] rounded-full bg-cyan-600">
          <Image
            src="https://res.cloudinary.com/djjxydn3p/image/upload/v1666480691/profile-white-bg-500px_d9qlcq.png"
            alt="profile picture"
            className="rounded-full"
            width={40}
            height={40}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
