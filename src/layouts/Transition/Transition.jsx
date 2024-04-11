import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',  // Starts from the left
  },
  in: {
    opacity: 1,
    x: 0,         // Moves to center
  },
  out: {
    opacity: 0,
    x: '100vw',   // Exits to the right
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

export const Transition = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);
