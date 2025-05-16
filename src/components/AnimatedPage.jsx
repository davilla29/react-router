import { motion } from "framer-motion";

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      // initial={{ opacity: 0 }} // start fully transparent
      // animate={{ opacity: 1 }} // fade in to fully visible
      // exit={{ opacity: 0 }} // fade out to transparent
      // transition={{
      //   duration: 1,
      //   ease: "easeInOut", // smooth ease-in-out
      // }}
      // initial={{ opacity: 0, scale: 0.95 }}
      // animate={{ opacity: 1, scale: 1 }}
      // exit={{ opacity: 0, scale: 0.95 }}
      // transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}

      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ willChange: "opacity" }} // performance optimization
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
