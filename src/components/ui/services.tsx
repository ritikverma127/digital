import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart3, Globe2, Newspaper, Target } from "lucide-react";
import Link from "next/link";

// Define proper TypeScript interfaces
interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="group p-6 space-y-4 rounded-xl transition-all duration-300">
      <div className="grid text-center sm:text-left">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white transform transition-transform duration-300 group-hover:scale-110 mx-auto sm:mx-0">
          <Icon className="h-6 w-6" />
        </div>

        <h3 className="text-xl font-semibold text-[#1a2b49] transition-colors duration-300 group-hover:text-blue-600 mt-4">
          {title}
        </h3>

        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

const TaboolaLanding: React.FC = () => {
  const features: Feature[] = [
    {
      icon: BarChart3,
      title: "Performance at Scale",
      description:
        "Beat your CPA goals with Taboola's advanced performance algorithm.",
    },
    {
      icon: Globe2,
      title: "Premium Websites",
      description:
        "Access 22,000+ exclusive and trusted websites worldwide with Taboola Ads.",
    },
    {
      icon: Newspaper,
      title: "Largest Native Ads Network",
      description:
        "Get your ad in front of 600M daily active users. Complement your search and social campaigns with new converting audiences.",
    },
    {
      icon: Target,
      title: "Native Advertising Advantage",
      description:
        "Reach audiences based on their interests without relying on third-party cookies.",
    },
  ];

  return (
    <section className="px-4 py-12 md:py-24 bg-[#F1F5FA] min-h-[90vh] flex items-center">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col justify-center space-y-8 lg:max-w-2xl">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-[#1a2b49] md:text-5xl lg:text-6xl">
                Maximize Reach &
                <span className="text-blue-600"> Performance with</span>Taboola
                Ads
              </h1>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="/pages/contact">
                <Button
                  size="lg"
                  className="bg-[#00ffcc] text-black hover:bg-[#00ffcc]/90 transform transition-transform duration-300 hover:scale-105"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:mt-0">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaboolaLanding;
