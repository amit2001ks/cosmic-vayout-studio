import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedWork from "@/components/FeaturedWork";
import ServicesHighlight from "@/components/ServicesHighlight";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WebhookSetup from "@/components/WebhookSetup";

const Index = () => {
  return (
    <div className="min-h-screen bg-cosmic-black overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Work */}
      <FeaturedWork />
      
      {/* Services */}
      <ServicesHighlight />
      
      {/* About */}
      <AboutSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Webhook Setup */}
      <WebhookSetup />
    </div>
  );
};

export default Index;
