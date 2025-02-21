export default function Page() {
  return (
    <div className="container mx-auto px-4 py-4">
      <main className="max-w-6xl mx-auto text-center space-y-14 mb-4 sm:space-y-4 mt-16">
        <h1 className="text-4xl md:text-4xl  font-bold font-sans text-newPrimary tracking-tight">
          Accelerate Growth with Digital Innovation
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Leverage technology for smarter, faster, and sustainable business
          growth. Stay ahead with future-proof strategies that drive results.
        </p>
      </main>

      <div className="relative max-w-4xl mx-auto space-y-14 mb-4 sm:space-y-4">
        <div className="relative rounded-2xl overflow-hidden h-96 md:h-[32rem]">
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>
          {/* <div className="absolute inset-0 bg-[#1a3c61]/60 flex items-center justify-center"></div> */}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a3c61] text-center mt-6">
          Run Ads on Premium Publisher Sites
        </h2>
      </div>
    </div>
  );
}
