export default function Page() {
  return (
    <div className="container mx-auto px-4 py-4">
      <main className="max-w-6xl mx-auto text-center space-y-14 mb-4 sm:space-y-4 mt-16">
        <h1 className="text-4xl md:text-6xl font-bold font-sans text-newPrimary tracking-tight">
          Get Traffic That Converts.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your Ad Campaigns Seen by Millions Daily on Premium Publisher Sites
        </p>
      </main>

      <div className="relative max-w-4xl mx-auto space-y-14 mb-4 sm:space-y-4">
        <div className="relative rounded-2xl overflow-hidden">
          <video src="/Desktop.webm" autoPlay loop muted></video>
          <div className="absolute inset-0 bg-[#1a3c61]/60 flex items-center justify-center"></div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a3c61] text-center mt-6">
          Run Ads on Premium Publisher Sites
        </h2>
      </div>
    </div>
  );
}
