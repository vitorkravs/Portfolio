export const menuAnimation = {
  opened: {
    translateX: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 30,
    },
  },
  closed: {
    translateX: "-100%",
    opacity: 0,
    transition: {},
  },
};
