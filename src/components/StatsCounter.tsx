import { useEffect, useRef, useState } from "react";

export default function StatsCounters({
  value,
  duration = 1600,
  once = true,
}) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);
  const animatedRef = useRef(false);

  // Parse "5000+", "98%", "4.9/5"
  const parseValue = (valStr) => {
    const match = valStr.match(/^ *([0-9]+(?:\.[0-9]+)?)/);
    const num = match ? parseFloat(match[1]) : 0;
    const suffix = valStr.slice(match ? match[0].length : 0);
    const decimals =
      match && match[1].includes(".")
        ? match[1].split(".")[1].length
        : 0;
    return { target: num, suffix, decimals };
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!animatedRef.current || !once)) {
          animate();
          animatedRef.current = true;
          if (once) observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animate = () => {
    const { target, suffix, decimals } = parseValue(value);
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      const current = target * eased;
      const formatted =
        decimals > 0
          ? current.toFixed(decimals)
          : Math.round(current).toLocaleString();

      setDisplay(`${formatted}${suffix}`);

      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(value);
    };

    requestAnimationFrame(step);
  };

  return (
    <p
      ref={ref}
      className="text-3xl md:text-4xl font-bold gradient-text"
      aria-live="polite"
    >
      {display}
    </p>
  );
}
