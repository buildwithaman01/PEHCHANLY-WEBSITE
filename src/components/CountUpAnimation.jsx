import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const CountUpAnimation = ({ value, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Parse the value to separate number and suffix
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
    const suffix = value.replace(/[0-9]/g, '');

    const springValue = useSpring(0, {
        damping: 30,
        stiffness: 100,
        duration: 2
    });

    const displayValue = useTransform(springValue, (current) => Math.round(current));

    useEffect(() => {
        if (isInView) {
            springValue.set(numericValue);
        }
    }, [isInView, numericValue, springValue]);

    return (
        <span ref={ref} className={className}>
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
};

export default CountUpAnimation;
