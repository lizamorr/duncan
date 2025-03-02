import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="karla text-center flex-col lg:flex-row lg:text-left flex justify-center p-12 items-center text-[#25555e] w-full">
      <motion.div
        className="relative group"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="images/about/duncan.webp"
          className="rounded-full h-60 w-60 lg:h-80 lg:w-80 shadow-2xl hover:scale-105 transition-transform duration-300"
          alt="Duncan - Fashion Designer"
        />
      </motion.div>

      <motion.div
        className="max-w-2xl text-center lg:text-left py-2 lg:p-12 text-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className=" pt-4  text-start">
          Duncan is a <strong>Creative Fashion Designer </strong>
          with a business-minded approach and a distinctive focus on
          gender-neutral streetwear. As an aspiring designer, he crafts{" "}
          <strong>innovative</strong>, <strong>dynamic</strong>, and{" "}
          <strong>refined</strong> pieces inspired by his passion for nature,
          family, sports, and culture. Duncan's designs embody the essence of
          the things he values most in life, inviting others to connect with and
          appreciate these influences.{" "}
        </p>
        <p className=" italic pt-3 text-end">
          His goal is to create designs that not only exude life and personality
          but also empower the wearer with confidence, sparking meaningful
          conversations and leaving a lasting impression wherever they go.
        </p>
      </motion.div>
    </div>
  );
}
