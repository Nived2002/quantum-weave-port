import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
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
        {/* Text Background for better visibility */}
        <div className="absolute inset-0 bg-background/20 backdrop-blur-sm rounded-3xl -z-10" />
        
        <h1 className="text-5xl md:text-7xl font-light mb-6 fade-in text-foreground drop-shadow-2xl">
          Hi, I'm <span className="text-glow font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Nivedshanker</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-foreground/90 mb-8 fade-in-delay-1 drop-shadow-lg">
          Fullstack Developer
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 mb-12 fade-in-delay-2 max-w-2xl mx-auto drop-shadow-lg">
          Crafting digital experiences with modern technologies and innovative solutions
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-delay-3">
          <button
            onClick={scrollToContact}
            className="btn-glow group flex items-center justify-center"
          >
            <span>Hire Me</span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={scrollToProjects}
            className="glass-card px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 border border-white/20 text-foreground hover:border-primary/50 flex items-center justify-center group"
          >
            <span>View My Work</span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;