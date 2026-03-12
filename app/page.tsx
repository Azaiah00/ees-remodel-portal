import Navbar from "@/components/ui/Navbar";
import ScrollToHash from "@/components/ui/ScrollToHash";
import Hero from "@/components/sections/Hero";
import ProductPlacement from "@/components/sections/ProductPlacement";
import Proposal from "@/components/sections/Proposal";
import Scope from "@/components/sections/Scope";
import Services from "@/components/sections/Services";
import BeforeAfterGallery from "@/components/sections/BeforeAfterGallery";
import ReviewAds from "@/components/sections/ReviewAds";
import TimelapseVideos from "@/components/sections/TimelapseVideos";
import SocialMediaImpact from "@/components/sections/SocialMediaImpact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[var(--color-bng-red)] selection:text-white">
      <Navbar />
      <ScrollToHash />
      <Hero />

      <Proposal />

      <ProductPlacement />

      <BeforeAfterGallery />

      <ReviewAds />

      <TimelapseVideos />

      <SocialMediaImpact />

      <Scope />

      <Services />
    </main>
  );
}
