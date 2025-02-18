import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [animateIn, setAnimateIn] = useState(false);

  // Animation effect on mount
  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission - would integrate with your backend/API
    alert(`Thank you! We'll send updates to ${email}`);
    setEmail("");
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-white to-[#f3fce7] min-h-[60vh] border-2 flex flex-col justify-between">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header - Maxwell Logo Centered */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div
              className={`h-6 w-6 rounded-full bg-[#3849e5] ${
                animateIn ? "animate-pulse" : ""
              }`}
            />
            <span className="text-xl font-semibold">Taboola </span>
          </div>
        </div>

        {/* Hero Content */}
        <div
          className={`mx-auto mt-8 md:mt-16 max-w-2xl text-center transition-all duration-1000 ease-out transform ${
            animateIn ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Get started to up your
            <br className="hidden sm:block" />
            business with Taboola
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Elevate your productivity and streamline your workflow with Taboola,
            your intelligent AI assistant.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 px-4"
          >
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="max-w-xs w-full bg-white"
              required
            />
            <Button
              type="submit"
              className="w-full sm:w-auto bg-[#282bd8] text-white hover:bg-[#274ed0] transition-all duration-300 hover:shadow-md"
            >
              Try Now
            </Button>
          </form>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-sm text-gray-600">
              <svg
                className="w-5 h-5 mr-1 text-blue-800"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Digital Marketing Solutions
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <svg
                className="w-5 h-5 mr-1 text-blue-800"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              SEO Services
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="w-full mt-8 md:mt-16 px-4 py-4 border-t border-gray-100">
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-gray-600 max-w-7xl mx-auto">
          <span className="text-gray-400">© 2025 Poballo</span>
        </nav>
      </div>
    </div>
  );
}
