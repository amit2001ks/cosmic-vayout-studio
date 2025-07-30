import { Button } from "@/components/ui/button";
import cosmicBg from "@/assets/cosmic-nebula-bg.jpg";

const HeroSection = () => {
  const handleExploreClick = () => {
    const featuredSection = document.getElementById("featured-work");
    featuredSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-container">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cosmicBg})` }}
      >
        <div className="absolute inset-0 bg-cosmic-black/40"></div>
      </div>

      {/* Star Field Animation */}
      <div className="star-field"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-nebula"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-8 float-animation">
          <img 
            src="/lovable-uploads/550f69de-4d03-4bad-a302-e32c33142f3d.png" 
            alt="Vayout Logo" 
            className="h-24 md:h-32 w-auto mx-auto mb-4"
          />
          <p className="text-cosmic-text-secondary text-sm md:text-base uppercase tracking-[0.3em] font-inter font-light">
            Visual Experience Studios
          </p>
        </div>

        {/* Headline */}
        <h1 className="font-cosmic-serif text-4xl md:text-6xl lg:text-7xl mb-6 cosmic-gradient-text leading-tight">
          Crafting AI‑driven product experiences
        </h1>

        {/* Subtext */}
        <p className="text-cosmic-text-secondary text-lg md:text-xl mb-12 max-w-2xl mx-auto font-inter font-light leading-relaxed">
          Where art meets artificial intelligence to create stunning visual narratives that captivate and convert
        </p>

        {/* CTA Button */}
        <Button 
          onClick={handleExploreClick}
          variant="outline"
          size="lg"
          className="cosmic-border cosmic-glow hover:bg-cosmic-violet/10 text-cosmic-violet border-cosmic-violet/50 hover:border-cosmic-violet transition-all duration-500 px-8 py-6 text-lg font-inter"
        >
          Explore Our World
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cosmic-violet/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cosmic-violet rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;