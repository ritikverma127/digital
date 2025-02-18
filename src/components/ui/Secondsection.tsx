"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  label: string;
  percentage: number;
}

function ProgressBar({ label, percentage }: ProgressBarProps) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 500);
    return () => clearTimeout(timer);
  }, [percentage]);
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{label}</span>
        <span className="text-sm text-muted-foreground">{progress}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default function WhyUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is in view
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 md:px-6 max-w-7xl mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-orange-500 font-medium mb-4">WHY US</h2>
            <div className="relative">
              <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                We Give You
                <br />
                Digital Solutions
              </h3>
            </div>
            <p className="text-muted-foreground">
              Sed lectus vestibulum mattis ullamcorper velit sed ullamcorperbi.
              Fusce id velit ut tortor pretium viverra suspendisse fuis
              ultricies lacus sed turpis tincidunt id aliquet. Sed viverra
              tellus sed lectus vestibulum mattis
            </p>
          </div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <ProgressBar label="Website Development" percentage={85} />
            <ProgressBar label="Digital Products" percentage={75} />
            <ProgressBar label="Website Development" percentage={90} />
          </motion.div>
        </div>

        <div className="relative lg:h-[600px] p-6">
          <Image
            src="/v.png"
            alt="Professional working on laptop"
            fill
            className="object-cover rounded-3xl p-12 ml-16 mt-20"
            priority
          />
        </div>
      </div>
    </motion.section>
  );
}
