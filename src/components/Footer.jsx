import { SOCIAL_MEDIA_LINKS } from "../constants";
import logo from "../assets/chal.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={logo}
          width={200}
          className="my-20"
        />
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.5 }}
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      <p className="text-gray-400 mt-8 text-center text-sm tracking-wide  ">
        &copy;compileTab. All reght reserved.
      </p>
    </div>
  );
};
export default Footer;
