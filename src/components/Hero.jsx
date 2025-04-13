import { HERO } from "../constants";
import { HERO1 } from "../constants";
import sumon_img from "../assets/sumonmia.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex min-h-screen items-center flex-wrap">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2"
      >
        <h2 className="my-8 text-4xl font-bold md:text-5xl lg:text-[7rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl">
          {HERO.description} <br /> {HERO1.description}
        </p>
        <button className="border hover:bg-sky-700 ml-2 border-stone-50/30 rounded p-1">
          <a
            target="_black"
            href="https://drive.proton.me/urls/N0XEXMH13C#lm8e92x1B7a8"
          >
            {" "}
            Resume
          </a>
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 0.8 }}
        animate={{ opacity: 1, x: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:p-8"
      >
        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={sumon_img}
            alt=""
            width={550}
            height={550}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
