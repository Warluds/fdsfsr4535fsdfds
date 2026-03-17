import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import PhilosophySection from "@/components/PhilosophySection";
import VerticalSection from "@/components/VerticalSection";
import HeritageSection from "@/components/HeritageSection";
import AssetsSection from "@/components/AssetsSection";
import DeltaHubSection from "@/components/DeltaHubSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <MetricsSection />
    <PhilosophySection />
    <VerticalSection />
    <HeritageSection />
    <AssetsSection />
    <DeltaHubSection />
    <FooterSection />
  </div>
);

export default Index;
