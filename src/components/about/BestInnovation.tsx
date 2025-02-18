import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function MarketingServices() {
  return (
    <div className="container px-4 md:px-8 lg:px-28 py-8 md:py-12 mx-auto mt-10 md:mt-20">
      <div className="space-y-8 md:space-y-12">
        <div className="grid gap-8 md:gap-6 md:grid-cols-2">
          {/* Header Section */}
          <div className="space-y-6 md:space-y-10 ml-4">
            <div className="space-y-8">
              <p className="text-indigo-600 font-medium tracking-wide">
                WHAT WE DO
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Best Solutions
                <br />
                SEO & Marketing for
                <br />
                Business
              </h1>
            </div>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto"
            >
              More Services
            </Button>
          </div>

          {/* Service Cards */}
          <Card className="border-0 shadow-lg group hover:text-white hover:bg-gradient-to-t from-[#2a2d5c] to-[#0062ff] transition-all duration-100">
            <CardHeader>
              <div className="w-16 h-16 md:w-20 md:h-20 mb-4">
                <Image
                  src="/s2.png"
                  width={400}
                  height={400}
                  alt="PPC Service"
                  className="w-full h-full object-contain"
                />
              </div>
              <CardTitle className="text-xl md:text-2xl">
                PPC Advertising
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 group-hover:text-gray-100">
                Regular leo vel fringilla estimar ullamcorper. Posuere nectar
                tincidunt praesent semper feugiat nibh sed. Non pulvinar neque.
                Sang know now minute exact dear.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-indigo-600 group-hover:text-white" />
                  <span>Content marketing</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-indigo-600 group-hover:text-white" />
                  <span>Advertising</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-indigo-600 group-hover:text-white" />
                  <span>Influencer marketing</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg group hover:text-white hover:bg-gradient-to-t from-[#2a2d5c] to-[#0062ff] transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 md:w-20 md:h-20 mb-4">
                <Image
                  src="/s3.png"
                  width={400}
                  height={400}
                  alt="Performance Service"
                  className="w-full h-full object-contain"
                />
              </div>
              <CardTitle className="text-xl md:text-2xl">
                Performance Boost
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 group-hover:text-gray-100">
                Condition leo vel fringilla estimar ullamcorper. Posuere nectar
                tincidunt praesent semper feugiat nibh sed. Non pulvinar neque.
                Sang know now minute exact dear.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-indigo-600 group-hover:text-white" />
                  <span>Content marketing</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-indigo-600 group-hover:text-white" />
                  <span>Advertising</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-indigo-600 group-hover:text-white" />
                  <span>Influencer marketing</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg group hover:text-white hover:bg-gradient-to-t from-[#2a2d5c] to-[#0062ff] transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 md:w-20 md:h-20 mb-4">
                <Image
                  src="/s4.png"
                  width={400}
                  height={400}
                  alt="Ranking Service"
                  className="w-full h-full object-contain"
                />
              </div>
              <CardTitle className="text-xl md:text-2xl">Top Ranking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 group-hover:text-gray-100">
                Improving leo vel fringilla estimar ullamcorper. Posuere nectar
                tincidunt praesent semper feugiat nibh sed. Non pulvinar neque.
                Sang know now minute exact dear.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-indigo-600 group-hover:text-white" />
                  <span>Content marketing</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-indigo-600 group-hover:text-white" />
                  <span>Advertising</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-indigo-600 group-hover:text-white" />
                  <span>Influencer marketing</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
