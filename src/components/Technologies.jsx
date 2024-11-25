import { FaGitAlt } from "react-icons/fa";
import { RiCss3Line, RiHtml5Fill, RiJavascriptFill, RiReactjsLine } from "react-icons/ri";
import { SiNeovim } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Tecnologias
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 10, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4">
          <RiHtml5Fill className="text-7xl text-red-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4">
          <RiCss3Line className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4">
          <RiJavascriptFill className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4">
          <FaGitAlt className="text-7xl text-orange-800" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4">
          <SiNeovim className="text-7xl text-green-600" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies;
