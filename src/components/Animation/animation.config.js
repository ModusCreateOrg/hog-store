export const delay = 1.6;

export const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
};

export const logoAnimation = {
  scale: [0.5, 1, 1, 1, 0.5],
  rotate: [0, 0, 10, 270, 0],
  rotateX: [90, 0, 0, 0, 90],
  opacity: [0.5, 1, 1, 1, 0.5],
};

export const logoTransition = {
  duration: delay + 0.1,
  times: [0, 0.09, 0.4, 0.95, 1],
  loop: Infinity,
  repeatDelay: delay,
};
