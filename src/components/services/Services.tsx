import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Search,
  Share2,
  DollarSign,
  FileText,
  Monitor,
  Settings,
  AppWindow,
  ScrollText,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function Service() {
  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description:
        "Attain the required website traffic and ranking on the Search Engine Page Results (SERP). Our SEO services are not just relevant for adding most searched keywords but further increase leads and conversion rates extensively.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Reach your target audience socially and spread your brand awareness across numerous daily users. Our creative young minds from the Social Media Marketing team create engaging and viral campaigns to bring more followers.",
    },
    {
      icon: DollarSign,
      title: "Paid Marketing Campaigns",
      description:
        "Increase your business revenue with Paid Marketing Campaigns through platforms like Google, Facebook, LinkedIn, Instagram, etc. Rely on the expertise with our digital marketing agency to deliver campaigns with maximum engagement.",
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description:
        "Let the experts create the perfect content marketing strategy for your website, mobile app, ad campaigns, and social media persona. A flawless content is key to improved brand visibility, lead generation, repeat orders, and ultimately, brand perception.",
    },
    {
      icon: Monitor,
      title: "Online Reputation Management",
      description:
        "Improve and enhance your brand's online reputation visible to a wide spectrum of customers. As part of our ORM service, we create intuitive and persuasive reviews of your company, products/services, and posts.",
    },
    {
      icon: Settings,
      title: "Conversion Rate Optimization",
      description:
        "Extend your brand reach and awareness with the credibility of asocial media influencer. We help your brand market byindustry-specific influencers to bring more followers, likes,comments, and further increase sales patterns.",
    },
    {
      icon: ScrollText,
      title: "Influencer Marketing",
      description:
        "Extend your brand reach and awareness with the credibility of asocial media influencer. We help your brand market byindustry-specific influencers to bring more followers, likes,comments, and further increase sales patterns.",
    },
    {
      icon: AppWindow,
      title: "App Store Optimization",
      description:
        "Just like SEO is for websites, so as App Store Optimization helps in ranking of apps in App Stores leading to increased downloads.",
    },
    {
      icon: Mail,
      title: "Email Marketing  Optimization",
      description:
        "Email Marketing  Optimization is a perfect way to do successful online marketing campaign for any business. By sending emails to existing and potential customers, you can promote products, discount offers and new launches bringing countless opportunities.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-4 mb-16 flex items-center flex-col">
        <h1 className="text-4xl font-bold">
          Degree Digital Marketing Services for Companies of All Kinds
        </h1>
        <p className="text-gray-600 text-center text-xl">
          As your value-driven digital marketing agency in India, we are here to
          meet all your brand&rsquo;s advertising needs with our expert-level
          services.
          <br /> Our extensive services for your digital marketing website will
          allow you to grow your business immensely.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card
            key={index}
            className="relative overflow-hidden transition-shadow hover:shadow-lg"
          >
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-blue-800 p-3 text-white">
                <service.icon className="h-6 w-6" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
              <Link
                href="/pages/contact"
                className="inline-block text-[#FF6B35] hover:underline"
              >
                Read More
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
