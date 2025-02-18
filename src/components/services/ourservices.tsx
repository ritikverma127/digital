"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  isReversed?: boolean;
}

const services: Service[] = [
  {
    title: "Website Design & Maintenance",
    description:
      "Your website is your digital storefront and first impression for potential customers. We create websites that are visually appealing, highly functional, and user-friendly. Our designs are mobile-responsive, ensuring a seamless experience across all devices. We tailor your website to reflect your brand's unique identity and enhance customer engagement, ultimately driving more conversions.",
    imageUrl: "/websitedesign1.webp?height=400&width=400",
    imageAlt: "Website design and maintenance illustration",
  },
  {
    title: "Social Media Marketing",
    description:
      "Social media is a vital platform for connecting with your audience and building your brand. We create and execute social media strategies that engage your target audience across platforms like Facebook, Instagram, WhatsApp, LinkedIn and Youtube. From creating compelling content to managing your social media campaigns, we ensure your brand stays top-of-mind and fosters a community around your business.",
    imageUrl: "/socialmediamarketing.webp?height=400&width=400",
    imageAlt: "Social media marketing illustration",
    isReversed: true,
  },
  {
    title: "Search Engine Optimization",
    description:
      "Once your website is up, it's essential that people can find it. SEO is key to this. We optimize your website to improve its ranking on search engines, making it easier for potential customers to discover you when they search for relevant services or products. Our approach increases organic traffic, improves search visibility, and ensures your site attracts qualified leads who are already interested in what you offer.",
    imageUrl: "/search-engine-optimization1.webp?height=400&width=400",
    imageAlt: "SEO illustration",
    isReversed: false,
  },
  {
    title: "Google Ads",
    description:
      "Unlock your business's full potential with a top Google Ads agency that knows how to optimize every campaign for maximum impact. At our Google advertising agency, we specialize in creating customized ad strategies that drive leads, conversions, and long-term growth. With our expertise, you can connect with your target audience, reduce ad spend waste, and see measurable results.",
    imageUrl: "/google-ads1.webp?height=400&width=400",
    imageAlt: "Google Ads illustration",
    isReversed: true,
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  console.log(hoveredIndex);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl font-serif mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl text-xl mx-auto">
            Discover our comprehensive range of digital solutions designed to
            help your business thrive in the digital age
          </p>
        </motion.div>

        <motion.div
          className="space-y-20 sm:px-36"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col gap-6 items-center ${
                service.isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="flex-1 space-y-6 max-w-xl"
                initial={{ opacity: 0, x: service.isReversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-serif">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
                <Button
                  variant="ghost"
                  className="group text-blue-800 hover:text-blue-700 hover:bg-pink-50 pl-0 text-lg"
                >
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>

              <motion.div
                className="flex-1 flex justify-center w-full"
                initial={{ opacity: 0, x: service.isReversed ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 z-10" />
                  <Image
                    src={service.imageUrl || "/placeholder.svg"}
                    alt={service.imageAlt}
                    fill
                    className="object-contain p-6"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
