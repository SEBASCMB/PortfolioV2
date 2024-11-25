import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duartion: 0.5 }}
        className="my-10 text-center text-4xl">Contactame</motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: -100 }}
          transition={{ duartion: 1 }}
          className="my-4">
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: 100 }}
          transition={{ duartion: 1 }}
          className="my-4">
          {CONTACT.phoneNo}
        </motion.p>
        <a href="mailto:sebastiancmarquez1998@gmail.com?subject=contratacion" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  )
}

export default Contact;
