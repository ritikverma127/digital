export default function ForwardThinking() {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${"/bgimage.jpg"})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-2xl">
          We believe in forward thinking design_
        </h2>
        <p className="text-xl mb-8 max-w-2xl">
          Innovative solutions for any challenges you face
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-full w-fit hover:bg-gray-100 transition">
          Get help →
        </button>
      </div>
    </section>
  );
}
