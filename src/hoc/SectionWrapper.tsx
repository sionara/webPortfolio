import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { JSX } from "react/jsx-runtime";

const StarWrapper = (
  Component: JSX.IntrinsicAttributes,
  idName: string | undefined
) =>
  function HOC() {
    return (
      <motion.section
        //@ts-ignore
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        {/* @ts-ignore */}
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
