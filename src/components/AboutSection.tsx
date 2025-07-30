import cosmicBg from "@/assets/cosmic-nebula-bg.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cosmicBg})` }}
      >
        <div className="absolute inset-0 bg-cosmic-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="font-cosmic-serif text-4xl md:text-5xl cosmic-gradient-text leading-tight">
              At Vayout, we blend art & AI
            </h2>
            
            <div className="space-y-4 text-cosmic-text-secondary font-inter leading-relaxed text-lg">
              <p>
                We're pioneers at the intersection of artificial intelligence and visual storytelling, 
                crafting experiences that don't just showcase products—they create emotional connections 
                that resonate across the digital cosmos.
              </p>
              
              <p>
                Our team of visionary creators harnesses the power of AI to transform ordinary concepts 
                into extraordinary visual narratives. From ethereal product photography to immersive 
                web experiences, we push the boundaries of what's possible in the digital realm.
              </p>
              
              <p>
                Every project is a journey through uncharted creative territories, where technology 
                serves as our compass and imagination as our destination. Join us as we redefine 
                the future of visual communication.
              </p>
            </div>
          </div>

          {/* Logo Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cosmic-violet via-cosmic-blue to-cosmic-cyan opacity-30 blur-xl animate-pulse scale-110"></div>
              
              {/* Logo Container */}
              <div className="relative cosmic-border rounded-full p-8 bg-cosmic-surface/50 backdrop-blur-xl">
                <img 
                  src="/lovable-uploads/7dc9231f-c99c-4119-9ab4-12ceaa0bfe09.png" 
                  alt="Vayout Logo" 
                  className="h-32 w-auto mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;