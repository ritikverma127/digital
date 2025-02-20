import React from "react";
import { Phone, Menu } from "lucide-react";
interface Data {
  value: string;
  description: string;
}

const StatCard = ({ value, description }: Data) => (
  <div className="group transition-all duration-300 hover:-translate-y-1">
    <div className="text-emerald-400 text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 transition-colors duration-300 group-hover:text-emerald-300">
      {value}
    </div>
    <p className="text-gray-300 text-sm lg:text-base transition-colors duration-300 group-hover:text-white">
      {description}
    </p>
  </div>
);

const PhoneMockup = () => (
  <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[400px] md:max-w-[440px] transition-transform duration-500 ">
    <div className="bg-white rounded-[2.5rem] p-3 shadow-2xl">
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
        {/* Phone Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gray-50">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-gray-700" />
            <span className="text-gray-900 font-bold text-base">NEWS FEED</span>
          </div>
          <Menu className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900 transition-colors" />
        </div>

        {/* Article Preview */}
        <div className="flex flex-col">
          <div className="relative">
            <video
              src="/native.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-72 object-cover" // Changed from aspect-video to h-64
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
          </div>
          <div className="p-6 text-black">
            <h3 className="font-bold mb-3 text-base sm:text-lg line-clamp-2">
              Factory developing humanoid robots to mimic human expressions,
              work jobs in future
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>July 14, 2024</span>
              <span>•</span>
              <span>5:33 PM GMT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function NativeAdvertising() {
  const stats = [
    {
      value: "+50%",
      description: "50% more views than traditional display ads",
    },
    {
      value: "+10X",
      description:
        "10X higher engagement rate compared to traditional display ads",
    },
    {
      value: "+18%",
      description: "18% higher purchase intent than traditional display ads",
    },
    {
      value: "+80%",
      description: "80% of people trust ads on news sites more than social",
    },
  ];

  return (
    <section className="min-h-screen bg-blue-900 text-white px-4 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-20">
          Native Advertising
          <span className="block text-emerald-400 mt-2">
            That Delivers Results.
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 items-center">
          {/* Left Stats */}
          <div className="space-y-24 text-center lg:text-right order-2 lg:order-1">
            {stats.slice(0, 2).map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Center Phone Mockup */}
          <div className="order-1 lg:order-2">
            <PhoneMockup />
          </div>

          {/* Right Stats */}
          <div className="space-y-24 text-center lg:text-left order-3">
            {stats.slice(2, 4).map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
