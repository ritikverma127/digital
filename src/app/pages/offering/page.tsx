import { lazy } from "react";
const DigitalMarketingBenefits = lazy(
  () => import("@/components/services/Digitalmarketingbenefits")
);
const MarketingTools = lazy(
  () => import("@/components/services/MarketingTools")
);
const Services = lazy(() => import("@/components/services/Services"));
const MarketingServices = lazy(
  () => import("@/components/about/BestInnovation")
);
const WorkProgress = lazy(() => import("@/components/services/Workprogress"));
const Hero = lazy(() => import("@/components/about/Hero"));
function page() {
  return (
    <div>
      <Hero />
      <Services />
      <WorkProgress />
      <MarketingTools />
      <DigitalMarketingBenefits />
      <MarketingServices />
    </div>
  );
}

export default page;
