import sunscreenImg from "@/assets/product-sunscreen.jpg";
import earbudsImg from "@/assets/product-earbuds.jpg";
import tshirtImg from "@/assets/product-tshirt.jpg";
import watchImg from "@/assets/product-watch.jpg";

const projects = [
  {
    id: 1,
    image: sunscreenImg,
    title: "Cosmic Sunscreen",
    category: "AI Photography",
    description: "AI-rendered product visualization with ethereal lighting"
  },
  {
    id: 2,
    image: earbudsImg,
    title: "Tech Pods",
    category: "Web Design",
    description: "3D product showcase with interactive elements"
  },
  {
    id: 3,
    image: tshirtImg,
    title: "Stellar Apparel",
    category: "Video",
    description: "Fashion photography with cosmic theme integration"
  },
  {
    id: 4,
    image: watchImg,
    title: "Time Capsule",
    category: "AI Photography",
    description: "Luxury product visualization in space environment"
  }
];

const FeaturedWork = () => {
  return (
    <section id="featured-work" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cosmic-serif text-4xl md:text-5xl mb-6 cosmic-gradient-text">
            Featured Work
          </h2>
          <p className="text-cosmic-text-secondary text-lg max-w-2xl mx-auto font-inter">
            Explore our collection of AI-driven visual experiences that push the boundaries of imagination
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl cosmic-border cosmic-glow transition-all duration-700 hover:scale-105 ${
                index % 2 === 0 ? 'md:rotate-1' : 'md:-rotate-1'
              } hover:rotate-0`}
            >
              {/* Background */}
              <div className="absolute inset-0 bg-cosmic-deep"></div>
              
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-black via-cosmic-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-inter font-medium cosmic-border rounded-full text-cosmic-violet bg-cosmic-violet/10">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-cosmic-serif text-2xl mb-2 text-cosmic-text-primary">
                    {project.title}
                  </h3>
                  <p className="text-cosmic-text-secondary text-sm font-inter">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;