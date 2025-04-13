import { SOCIAL_MEDIA_LINKS } from "../constants";
import logo from "../assets/chal.png";

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <img src={logo} width={200} className="my-20" />
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>

      <p className="text-gray-400 mt-8 text-center text-sm tracking-wide  ">
        &copy;compileTab. All reght reserved.
      </p>
    </div>
  );
};
export default Footer;
