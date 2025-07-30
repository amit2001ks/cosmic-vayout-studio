import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = () => {
    window.open("https://www.instagram.com/vayout.in", "_blank");
  };

  const handleGetStartedClick = () => {
    window.open("https://www.instagram.com/vayout.in", "_blank");
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "cosmic-border backdrop-blur-xl" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/7dc9231f-c99c-4119-9ab4-12ceaa0bfe09.png" 
              alt="Vayout Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="cosmic-text-secondary hover:text-cosmic-violet transition-colors duration-300"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="cosmic-text-secondary hover:text-cosmic-violet transition-colors duration-300"
            >
              About
            </a>
            <button 
              onClick={handleContactClick}
              className="cosmic-text-secondary hover:text-cosmic-violet transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={handleGetStartedClick}
            variant="outline"
            className="cosmic-border cosmic-glow hover:bg-cosmic-violet/10 text-cosmic-violet border-cosmic-violet/50 hover:border-cosmic-violet transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;