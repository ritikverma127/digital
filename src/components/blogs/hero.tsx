export default function BlogHero() {
  return (
    <div className="relative min-h-[600px] w-full flex items-center justify-start overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/blog.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-2xl">
          <div className="flex flex-col gap-4">
            <span className="text-amber-400 font-medium">— Blog Grid</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-white tracking-tight">
              Get Know Our Latest Articles!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
