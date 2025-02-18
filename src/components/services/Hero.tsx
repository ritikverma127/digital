import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SeoPortfolioSection() {
  return (
    <section className="min-h-[500px] flex items-center justify-center px-4 py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
          Our SEO{" "}
          <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Work Portfolio
          </span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
          Guaranteed Google 1st page ranking assured.Our SEO work portfolio
          includes local, international, ecommerce, and Amazon SEO for clients
          in over 30 countries with almost for all industries.
        </p>
        <Button
          variant="outline"
          className="group text-lg px-6 py-6 h-auto border-blue-400 text-blue-500 hover:text-blue-600 hover:border-blue-500"
        >
          Inquire Now
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
