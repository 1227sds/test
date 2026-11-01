import { Container } from "@/components/common/container";
import { FeatureGrid } from "@/components/home/feature-grid";
import { HeroSection } from "@/components/home/hero-section";

export default function HomePage() {
  return (
    <Container className="space-y-20 pb-20">
      <HeroSection />
      <FeatureGrid />
    </Container>
  );
}
