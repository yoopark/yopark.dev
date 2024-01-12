'use client';

import { motion } from 'framer-motion';

export const FadeInFromTop = ({ children }: React.PropsWithChildren) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ease: 'easeInOut', duration: 1, y: { duration: 0.5 } }}
    >
      {children}
    </motion.div>
  );
};
