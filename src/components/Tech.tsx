import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={`${styles.sectionHeadText} mb-4`}>Language and Tools</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="my-4 text-secondary text=[17px] max-w-3xl leading-[30px]"
      >
        Here are some of my favorite programming languages and tools! Check them
        out below by rotating the icosahedrons.
      </motion.p>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <div className="text-center">{technology.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
