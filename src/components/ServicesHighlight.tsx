import { Sparkles, Code, Video } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "AI Visualizations",
    description: "Transform concepts into stunning visual realities using cutting-edge AI technology and artistic vision."
  },
  {
    icon: Code,
    title: "Webflow Development",
    description: "Build responsive, interactive websites that showcase your products with cosmic elegance and performance."
  },
  {
    icon: Video,
    title: "Branded Video",
    description: "Create immersive video experiences that tell your brand story through cinematic visual narratives."
  }
];

const ServicesHighlight = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cosmic-serif text-4xl md:text-5xl mb-6 cosmic-gradient-text">
            Our Services
          </h2>
          <p className="text-cosmic-text-secondary text-lg max-w-2xl mx-auto font-inter">
            We blend technology and artistry to deliver experiences that transcend the ordinary
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group text-center p-8 cosmic-border cosmic-glow hover:bg-cosmic-surface/30 transition-all duration-500 rounded-2xl"
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto cosmic-border rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <IconComponent 
                      size={32} 
                      className="text-cosmic-violet group-hover:text-cosmic-blue transition-colors duration-500" 
                    />
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 w-16 h-16 mx-auto rounded-2xl bg-cosmic-violet/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <h3 className="font-cosmic-serif text-2xl mb-4 text-cosmic-text-primary group-hover:cosmic-gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-cosmic-text-secondary font-inter leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;