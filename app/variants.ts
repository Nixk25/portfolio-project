export const menuVariants = {
  initial: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
export const listVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};
export const socialsVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

export const navLinkVariants = {
  initial: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

export const socialLinkVariants = {
  initial: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};
export const bottomMenuVariants = {
  initial: {
    opacity: 0,

    transition: {
      duration: 1.5,
      ease: [0, 0.55, 0.45, 1],
    },
  },
  visible: {
    opacity: 1,

    transition: {
      delay: 1,
      duration: 0.8,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

export const lineVariants = {
  initial: {
    scaleY: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  animate: {
    scaleY: 1,
    transition: {
      delay: 5,
      duration: 3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
