import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <iframe 
          src='https://my.spline.design/particlenebula-Pk44R6n9pZ741tNAWTPEGc8B/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="absolute inset-0"
          style={{ border: 'none' }}
        />
      </div>
      
      {/* Floating Orbs */}
      <div className="glow-orb w-64 h-64 top-20 left-20 floating" />
      <div className="glow-orb w-32 h-32 top-40 right-32 floating" style={{ animationDelay: '2s' }} />
      <div className="glow-orb w-48 h-48 bottom-32 left-40 floating" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-light mb-6 fade-in">
          Hi, I'm <span className="text-glow font-medium">Nivedshanker</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 fade-in-delay-1">
          Web Developer
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 fade-in-delay-2 max-w-2xl mx-auto">
          Crafting digital experiences with modern technologies and innovative solutions
        </p>
        
        <button
          onClick={scrollToContact}
          className="btn-glow fade-in-delay-3 group"
        >
          Hire Me
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default Hero;