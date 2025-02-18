import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function HowItWorks() {
  return (
    <section
      className="py-16 px-4 md:px-6 lg:px-8 "
      style={{ backgroundImage: `url(${"/bgimage.jpg"})` }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          How it Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <Card className="p-6 relative bg-[#0066FF] text-white rounded-2xl">
            <div className="aspect-square relative mb-6">
              <Image
                src="/1food.jpg"
                alt="Campaign setup interface showing healthy foods advertisement"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-[#0066FF] flex items-center justify-center text-xl font-bold border-4 border-white">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">Set Up Your Campaign</h3>
            <p className="text-sm text-white/90">
              Create an account. Define your marketing goals, target audiences
              and budget. Set up your first campaign in minutes.
            </p>
          </Card>

          {/* Step 2 */}
          <Card className="p-6 relative bg-[#0066FF] text-white rounded-2xl">
            <div className="aspect-square relative mb-6">
              <Image
                src="/2food.png"
                alt="Yahoo website interface showing advertisement placement"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-[#0066FF] flex items-center justify-center text-xl font-bold border-4 border-white">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">
              Run Your Ad on Premium Websites
            </h3>
            <p className="text-sm text-white/90">
              Reach new audiences and get high quality traffic through our
              global premium publisher network.
            </p>
          </Card>

          {/* Step 3 */}
          <Card className="p-6 relative bg-[#0066FF] text-white rounded-2xl">
            <div className="aspect-square relative mb-6">
              <Image
                src="/3food.jpg"
                alt="Analytics dashboard showing conversion metrics"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-[#0066FF] flex items-center justify-center text-xl font-bold border-4 border-white">
              3
            </div>
            <h3 className="text-xl font-bold mb-3">
              Maximize Your Conversions
            </h3>
            <p className="text-sm text-white/90">
              Get detailed campaign performance analytics. Use our smart bidding
              to auto-optimize, scale and improve ROI.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
