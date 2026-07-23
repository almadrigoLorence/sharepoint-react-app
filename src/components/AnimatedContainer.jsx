import React, { useEffect, useRef, useState } from 'react';

/**
 * AnimatedContainer triggers scroll-driven animations using Intersection Observer.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The elements to animate
 * @param {string} [props.className] - Extra Tailwind/CSS class names
 * @param {string} [props.animationType] - 'fade-up', 'fade-in', 'zoom-in', 'slide-left', 'slide-right', or 'stagger'
 * @param {number} [props.threshold] - Percentage of component visible before triggering (0.0 to 1.0)
 * @param {number} [props.delay] - Initial transition delay in ms
 * @param {boolean} [props.triggerOnce] - Whether the animation should only fire once
 */
export default function AnimatedContainer({
  children,
  className = '',
  animationType = 'fade-up',
  threshold = 0.1,
  delay = 0,
  triggerOnce = true,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(currentRef);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Triggers slightly before element enters to feel smoother
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef && !triggerOnce) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  const baseClass = animationType === 'stagger' ? 'stagger-container' : `animate-on-scroll ${animationType}`;
  const animationStateClass = isVisible ? 'is-visible' : '';

  return (
    <div
      ref={domRef}
      className={`${baseClass} ${animationStateClass} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : {}}
    >
      {children}
    </div>
  );
}
