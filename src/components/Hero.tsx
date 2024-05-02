import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// interface Props {
//   children:
// }

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-purple-400" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {" "}
            Hi, I'm <span className="text-purple-500">Sion</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop full-stack web applications with modern UI.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* <div className="absolute xs:bottom-10 bottm-32 w-full flex justify-center items-center">
        {" "}
        <a ref="#about">
          <div className="w-[350px] h-[64px] rounded-3xl border-4 border-secondary flex justify -center items-start p-2 ">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            ></motion.div>
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
