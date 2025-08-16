'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  // When true, render the section as visible immediately (skip intersection observer)
  alwaysVisible?: boolean;
}

export default function AnimatedSection({ children, className = '', delay = 0, alwaysVisible = false }: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const shouldShow = alwaysVisible || inView;

  return (
    <motion.div
      ref={ref}
      initial={shouldShow ? 'visible' : 'hidden'}
      animate={shouldShow ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
} 