import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaWhatsappSquare,
} from 'react-icons/fa';
import heroImage from '../assets/images/foto_background.webp';
import colorHeroImage from '../assets/images/foto_background_color.webp';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section className="w-full h-screen relative flex flex-column justify-center">
      <motion.img
        animate={{
          opacity: [1, 0],
          transition: { delay: 2, duration: 4 },
        }}
        src={heroImage}
        alt="camera"
        className="object-cover w-full h-screen absolute top-0"
      />
      <motion.img
        animate={{
          opacity: [0, 1],
          transition: { delay: 2, duration: 2 },
        }}
        src={colorHeroImage}
        alt="camera color"
        className="object-cover w-full h-screen absolute top-0"
      />
      <motion.header className="z-10 absolute top-2 right-2">
        <div className="flex gap-1">
          <a href="#">
            <FaInstagramSquare className="h-7 w-7 fill-zinc-800" />
          </a>
          <a href="#">
            <FaFacebookSquare className="h-7 w-7 fill-zinc-800" />
          </a>
          <a href="#">
            <FaWhatsappSquare className="h-7 w-7 fill-zinc-800" />
          </a>
        </div>
      </motion.header>

      <div className="flex flex-col items-center mt-20">
        <motion.h1
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
          }}
          transition
          className="font-display1 text-mainRed text-6xl drop-shadow-md"
        >
          Photomatic
        </motion.h1>
        <motion.h3
          animate={{
            x: [-100, 0],
            opacity: [0, 1],
            transition: { delay: 0.5 },
          }}
          className="text-sm text-white font-display1 bg-zinc-800/60 px-2 py-1 rounded-md drop-shadow-md"
        >
          Recuerdos creados a la perfección
        </motion.h3>
      </div>
      <motion.a
        animate={{
          y: [100, 0],
          opacity: [0, 1],
          transition: { delay: 4 },
        }}
        className="bottom-[12rem] absolute mt-5 bg-zinc-800 text-white font-body text-sm px-3 py-1 rounded-sm "
        href="#informacion"
      >
        ¿Quiénes somos?
      </motion.a>
    </motion.section>
  );
};

export default Hero;
