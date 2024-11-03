import { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedTitleProps {
  text: string;
  id: string;
  color: string;
}

export default function AnimatedTitle({ text, id, color }: AnimatedTitleProps) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <div id={id} className={`p-4 lg:p-8 flex float-left ${color}`}>
      <h1
        aria-label={text}
        className="bebas-neue-regular z-10 uppercase font-extrabold text-8xl"
      >
        {text.split(" ").map((word: string, index: number) => (
          <motion.span
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
            className="inline-block mr-5 whitespace-nowrap"
          >
            {word.split("").map((character: string, charIndex: number) => (
              <motion.span
                aria-hidden="true"
                key={charIndex}
                variants={characterAnimation}
                className="inline-block -mr-0.5"
              >
                {character}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </h1>
    </div>
  );
}
