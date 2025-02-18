import Image from "next/image";

export default function MediaLogos() {
  const logos = [
    {
      name: "Yahoo!",
      image: "/yahoo.svg",
      width: 120,
    },
    {
      name: "The Times of India",
      image: "/timeofindia.svg",
      width: 160,
    },
    {
      name: "NDTV",
      image: "/ndtv.svg",
      width: 100,
    },
    {
      name: "Business Insider",
      image: "/business-insider.svg",
      width: 140,
    },
    {
      name: "The Indian Express",
      image: "/indianexpress.svg",
      width: 150,
    },
    {
      name: "USA Today",
      image: "/usa.svg",
      width: 130,
    },
    {
      name: "The Weather Channel",
      image: "/weather.svg",
      width: 130,
    },
    {
      name: "News18",
      image: "/News18.svg",
      width: 110,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 sm:py-16">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
        {logos.map((logo, id) => (
          <div
            className="relative h-12 w-full flex items-center justify-center"
            key={id}
          >
            <Image
              src={logo.image || "/placeholder.svg"}
              alt={`${logo.name} logo`}
              width={logo.width}
              height={20}
              className="object-contain max-w-full h-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
