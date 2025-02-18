import { lazy } from "react";
const HeroSection = lazy(() => import("@/components/Home/Hero"));
const MediaLogos = lazy(() => import("@/components/ui/Compititor"));
const Services = lazy(() => import("@/components/ui/services"));
const HowItWorks = lazy(() => import("@/components/Home/How.itworks"));
const Expertise = lazy(() => import("@/components/ui/Expertise"));
const Testimonials = lazy(() => import("@/components/about/Testonimals"));
const OurWork = lazy(() => import("@/components/ui/Our-work"));
const NativeAdvertising = lazy(
  () => import("@/components/ui/Nativeadvertising")
);

export default function page() {
  return (
    <main className="min-h-screen bg-white overflow-hidden ">
      <HeroSection />
      <MediaLogos />
      <Services />
      <HowItWorks />
      <Expertise />
      <Testimonials />
      <OurWork />
      <NativeAdvertising />
    </main>
  );
}
