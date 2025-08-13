import { Github, Linkedin, Mail } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Footer = () => {
  const [footerRef, footerVisible] = useScrollAnimation();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className={`py-12 px-6 border-t border-border/50 relative overflow-hidden scroll-fade-up ${footerVisible ? 'visible' : ''}`}>
      {/* Floating Particles */}
      <div className="glow-orb w-32 h-32 top-10 left-10 floating opacity-10" />
      <div className="glow-orb w-24 h-24 top-20 right-20 floating opacity-10" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Navigation Links */}
          <div className="flex space-x-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:text-glow"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/Nived2002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 icon-glow"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/nivedshanker-krishnakumar-ab083ab2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 icon-glow"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:nivedshanker.22@cse.mrt.ac.lk"
              className="text-muted-foreground hover:text-primary transition-all duration-300 icon-glow"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground">
            © 2024 K.Nivedshanker. Crafted with passion and modern technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;