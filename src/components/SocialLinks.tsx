import { socialLinkList } from '../utils/constants';

const SocialLinks = () => {
  return (
    <div className="hidden text-gray-400 lg:block">
      <div className="fade-in-social-links fixed left-8 bottom-0 flex flex-col items-center xl:left-10 ">
        <div className="flex flex-col gap-6 text-secondary">
          {socialLinkList.map((item, index) => (
            <a
              className="social-icons"
              target="_blank"
              rel="noopener noreferrer"
              href={item.href}
              key={index}
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="mt-8 h-16 w-[2px] bg-gray-400"></div>
      </div>
      <div className="fade-in-social-links fixed bottom-0 right-8 xl:right-10 ">
        <div className="flex flex-col items-center gap-[180px]">
          <a
            href="#"
            className="social-icons rotate-90 text-sm text-gray-400"
          >
            codingwithdude@gmail.com
          </a>
          <div className="mt-8 h-16 w-[2px] bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
