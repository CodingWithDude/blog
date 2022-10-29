import { socialLinkList } from '../utils/constants';

const Footer = () => {
  return (
    <footer className="flex bottom-0 w-full flex-col items-center justify-center gap-2 pt-96 pb-4 text-gray-100">
      <a href="https://github.com/CodingWithDude">
        <span className="text-xs">Built by Ryan Austin</span>
      </a>
      {/* <a
        href="https://github.com/CodingWithDude"
        className="cursor-pointer "
      >
        <div className="cursor-pointer group text-lg font-bold">
          <span className="text-green-500 group-hover:text-purple-500">{`<Coding`}</span>
          <span className="text-gray-300 ">With</span>
          <span className="text-green-500 group-hover:text-purple-500">{`Dude/>`}</span>
        </div>
      </a> */}
      <div className="flex w-full items-center justify-center gap-6 pt-2">
        {socialLinkList.map((item, index) => (
          <a
            className="social-icons"
            href={item.href}
            key={index}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
