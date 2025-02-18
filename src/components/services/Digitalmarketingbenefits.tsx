import {
  Award,
  Users,
  BarChart3,
  Medal,
  TrendingUp,
  Filter,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function DigitalMarketingBenefits() {
  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Support brand value",
      description:
        "Digital marketing firms assist your company in expanding its reach and making your offerings stand out in a competitive market.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Boost user relationships",
      description:
        "Our analytics helps to dig out the crucial and concise user needs and help you target the potential audience on the receiving end.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Drive more traffic",
      description:
        "Digital marketing agency helps to propel multiple cross-channel business opportunities to enable exceptional user experience.",
    },
    {
      icon: <Medal className="w-8 h-8" />,
      title: "Stay on top",
      description:
        "These marketing services allow you to use multiple channels with a consistent funnel to check for seamless connectivity.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Increase in competition",
      description:
        "Digital marketing experts help small to mid-sized enterprises to compete head-to-head with multinational firms.",
    },
    {
      icon: <Filter className="w-8 h-8" />,
      title: "Improve conversion rates",
      description:
        "Attract numerous leads, businesses, conversions, opportunities, and users to your brand products and services.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why Your Business Needs Digital Marketing Services?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="border-none shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-lg bg-blue-800 text-white">
                  {benefit.icon}
                </div>
                <h2 className="text-xl font-semibold">{benefit.title}</h2>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
