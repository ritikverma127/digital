import Image from "next/image";

const projects = [
  {
    title: "Annual Catalog Branding",
    image: "/1.jpg?height=400&width=400",
    tags: ["Branding", "Editorial", "Print"],
    description:
      "Annual catalog specializes in crafting effective magazines that drive sales and engagement.",
  },
  {
    title: "Morgan Hospital Branding",
    image: "/2.jpg?height=400&width=400",
    tags: ["Branding", "Editorial"],
    description:
      "Brand is a full-size hospital where white meets luxury and wellness.",
  },
  {
    title: "WallArt Pitch Deck",
    image: "/3.jpg?height=400&width=400",
    tags: ["Web Design", "Editorial", "Design"],
    description:
      "WallArt aims to bring company financials to provide high-end wall decorations to consumers.",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">_Featured Projects</h2>
          <button className="text-sm hover:underline">View More →</button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-100 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
