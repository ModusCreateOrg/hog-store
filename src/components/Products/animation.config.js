export const delay = 1.6;

export const spring = {
  type: 'spring',
  damping: 25,
  stiffness: 100,
};

export const logoAnimation = {
  scale: [1.5, 1.5, 1.5, 1, 1.5],
  opacity: [0, 0, 0.1, 1, 0.1],
  x: [-300, -300, -300, 300, 300],
};

export const logoTransition = {
  duration: delay + 0.1,
  times: [0, 0.09, 0.5, 0.95, 1],
  loop: Infinity,
  repeatDelay: delay * 2.8,
};
