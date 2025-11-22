import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const CountUpNumber = ({ value, suffix = "", className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, {
                duration: 2,
                ease: "easeOut"
            });
            return controls.stop;
        }
    }, [isInView, count, value]);

    return (
        <motion.span ref={ref} className={className}>
            <motion.span>{rounded}</motion.span>
            {suffix}
        </motion.span>
    );
};

export default CountUpNumber;
