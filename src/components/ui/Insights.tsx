// "use client";
// import { useState, useEffect, useRef } from "react";

// type Stat = {
//   key: string;
//   value: number;
//   label: string;
//   suffix: string;
// };

// export default function Insights() {
//   const [isVisible, setIsVisible] = useState<boolean>(false);
//   const [counts, setCounts] = useState<{ [key: string]: number }>({
//     satisfaction: 0,
//     clients: 0,
//     revenue: 0,
//     retention: 0,
//   });
//   const sectionRef = useRef<HTMLElement | null>(null);

//   const stats: Stat[] = [
//     { key: "satisfaction", value: 99, label: "Satisfaction Rate", suffix: "%" },
//     { key: "clients", value: 153, label: "Happy Clients", suffix: "+" },
//     { key: "revenue", value: 120, label: "Annual Revenue", suffix: "M" },
//     { key: "retention", value: 67, label: "Retention Rate", suffix: "%" },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (!isVisible) return;

//     const duration = 2000; // 2 seconds
//     const steps = 60;
//     const interval = duration / steps;

//     stats.forEach((stat) => {
//       let current = 0;
//       const target = stat.value;
//       const increment = target / steps;

//       const timer = setInterval(() => {
//         current += increment;
//         if (current >= target) {
//           current = target;
//           clearInterval(timer);
//         }

//         setCounts((prev) => ({
//           ...prev,
//           [stat.key]: Math.floor(current),
//         }));
//       }, interval);

//       return () => clearInterval(timer);
//     });
//   }, [isVisible]);

//   return (
//     <section ref={sectionRef} className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-12">Insights_</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {stats.map((stat) => (
//             <div
//               key={stat.key}
//               className="text-center transform transition-transform duration-500 hover:scale-105"
//             >
//               <p className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 {counts[stat.key]}
//                 {stat.suffix}
//               </p>
//               <p className="text-sm text-gray-600">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
