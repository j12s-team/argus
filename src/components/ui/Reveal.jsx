import { motion } from 'framer-motion';

export default function Reveal({
  children,
  delay = 0,
  y = 18,
  duration = 0.55,
  className = '',
  once = true,
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once, margin: '-60px' }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
