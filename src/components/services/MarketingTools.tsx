import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function MarketingTools() {
  const tools = [
    {
      name: "Semrush",
      description:
        "An all-in-one digital marketing tool to perform a comprehensive technical SEO audit and improve SEO strategy for better business outcomes and growth.",
      image: "/semrush.png",
    },
    {
      name: "Ahrefs",
      description:
        "Exclusively designed for digital marketers, this software contains tools for site audits, competitor analysis, keyword research, link building, and rank tracking.",
      image: "/Ahrefs.avif",
    },
    {
      name: "Google Analytics",
      description:
        "The premier choice of digital marketing experts as it provides a ton of actionable insights into how your audience is engaging with your website and applications.",
      image: "/google-analytics.avif",
    },
    {
      name: "Screaming Frog SEO",
      description:
        "A user-friendly SEO crawling tool that provides useful SEO-related information about your site that you can use to tweak your SEO strategy.",
      image: "/screaming-frog.avif",
    },
    {
      name: "Google Trends",
      description:
        "A tool that helps us provide the best digital marketing service to identify trends and popular search queries in Google Search across various locations and languages.",
      image: "/google-trends.avif",
    },
    {
      name: "Canva",
      description:
        "A great tool for designing professional-looking graphics. It offers a vast collection of templates that can be used to create social posts, infographics, CTA buttons, etc.",
      image: "/canva-1.avif",
    },
  ];

  return (
    <div className="px-4 py-12 md:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Popular Tools that Power Our Digital Marketing Services
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Our digital marketing agency makes best use of latest tools &
          technologies to get your business goals. For developing digital
          marketing websites we incorporate trending technologies that help your
          platform to perform better resulting in an increase in traffic on your
          website.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.name} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-4 flex justify-center">
                <div className="relative w-12 h-12">
                  <Image
                    src={tool.image}
                    width={48}
                    height={48}
                    alt={`${tool.name} logo`}
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                {tool.name}
              </h3>
              <p className="text-muted-foreground text-center">
                {tool.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
