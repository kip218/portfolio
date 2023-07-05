export const listVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      delayChildren: 0, // this will set a delay before the children start animating
      staggerChildren: 0.1, // this will set the time inbetween children animation
    },
  },
};

export const itemVariants = {
  hidden: {
    x: "110vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
      type: "spring",
    },
  },
};
