import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="flex flex-col md:flex-row min-h-[400px] mt-20">
      {/* Left Section */}
      <div className="bg-gray-900 text-white p-8 md:w-[40%] flex justify-center items-center">
        <div>
          <p className="text-sm uppercase tracking-wider mb-4">
            SEO INTEGRATION
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
            Why your Website <br />
            Need SEO?
          </h2>
          <hr className="opacity-40" />
        </div>
      </div>

      {/* Right Section */}
      <div className="p-8 md:w-[60%] relative overflow-hidden grid place-content-center ">
        {/* Gradient Background */}
        <div className="absolute  inset-0 bg-gradient-to-t from-[#3F1399] to-[#0c5adb] transition-all duration-100" />

        {/* Image Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/9.png')",
            backgroundPosition: "right bottom",
            backgroundSize: "cover",
            opacity: "0.15",
          }}
        />

        {/* Content */}
        <div className="relative z-10 grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-3 gap-8 ">
          {/* High Traffic Card */}
          <div className="text-white flex flex-wrap justify-center items-center flex-col">
            <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-4">
              <Image
                src="/t3.png"
                alt="High Traffic"
                width={100}
                height={100}
                className=""
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">High Traffic</h3>
            <p className="text-white/80 text-sm text-center">
              Position fat who window. Removing welcomed civility for technical
              hastened get.
            </p>
          </div>

          {/* Best Strategy Card */}
          <div className="text-white flex flex-wrap justify-center items-center flex-col">
            <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-4">
              <Image
                src="/t4.png"
                alt="High Traffic"
                width={100}
                height={100}
                className=""
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Best Strategy</h3>
            <p className="text-white/80 text-sm text-center">
              Another fat who window. Removing welcomed civility for technical
              hastened me.
            </p>
          </div>

          {/* Search Position Card */}
          <div className="text-white flex flex-wrap justify-center items-center flex-col">
            <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-4">
              <Image
                src="/t1.png"
                alt="High Traffic"
                width={100}
                height={100}
                className=""
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Search Position</h3>
            <p className="text-white/80 text-sm text-center">
              Another fat who window. Removing welcomed civility for technical
              hastened.
            </p>
          </div>
        </div>

        {/* Decorative Circle */}
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-blue-600/20 rounded-full blur-xl" />
      </div>
    </div>
  );
}
