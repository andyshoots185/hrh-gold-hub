import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  { value: 8, suffix: "+", label: "Years in Business", description: "Trusted gold trading since 2016" },
  { value: 500, suffix: "+", label: "Happy Clients", description: "Investors and businesses served" },
  { value: 2500, suffix: "kg+", label: "Gold Traded", description: "Verified gold transactions completed" },
  { value: 15, suffix: "+", label: "Countries Reached", description: "International network of partners" },
];

const AnimatedNumber = ({ target, suffix, duration = 2 }: { target: number; suffix: string; duration?: number }) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="font-serif text-4xl md:text-5xl font-bold gold-text-gradient">
      {current.toLocaleString()}{suffix}
    </span>
  );
};

const StatsCounter = () => (
  <section className="py-20 bg-foreground">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Our Track Record</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-background">
          Numbers That Speak for <span className="gold-text-gradient">Themselves</span>
        </h2>
      </motion.div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mb-2">
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
            </div>
            <p className="font-serif text-lg font-semibold text-background mb-1">{stat.label}</p>
            <p className="text-xs text-background/50">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsCounter;
