import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div
      className="min-h-[600px] relative overflow-hidden mb-10"
      style={{
        backgroundImage: `url('/244.png')`,
      }}
    >
      {/* Curved shape overlay */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M0,96L80,106.7C160,117,320,139,480,154.7C640,171,800,181,960,165.3C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg> */}
      </div>

      <div className="container mx-auto px-4 pt-16 pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6">
            <p className="text-sm uppercase tracking-wider">
              DIGITAL MARKETING
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Manage digital marketing solution
            </h1>
            <p className="text-gray-200 max-w-lg">
              Elevate your online presence with data-driven strategies, SEO, and
              targeted ads to maximize your growth and engagement.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              Get Started
            </Button>
          </div>

          {/* Illustration */}
          <div className="relative">
            <Image
              src="/11.png"
              alt="Digital Marketing Team Illustration"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full" />
              <div className="absolute top-12 right-12 text-white/20">×</div>
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-white/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
