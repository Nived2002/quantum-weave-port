import { Code2, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [skillsRef, skillsVisible] = useStaggeredAnimation(6, 150);

  const skills = [
    { icon: Code2, name: 'Frontend', color: 'text-primary' },
    { icon: Server, name: 'Backend', color: 'text-secondary' },
    { icon: Database, name: 'Database', color: 'text-accent' },
    { icon: Globe, name: 'Web Tech', color: 'text-primary' },
    { icon: Smartphone, name: 'Responsive', color: 'text-secondary' },
    { icon: Zap, name: 'Performance', color: 'text-accent' },
  ];

  return (
    <section ref={aboutRef} id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className={`scroll-fade-left ${aboutVisible ? 'visible' : ''}`}>
            <div className="relative group">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden glass-card p-2">
                <img
                  src="/lovable-uploads/c17b5a70-5d87-4f3e-ad1d-9aa6612661b8.png"
                  alt="Nivedshanker"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
            </div>
          </div>

          {/* About Content */}
          <div className={`scroll-fade-right ${aboutVisible ? 'visible' : ''} space-y-8`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-glow">
                About Me
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  I'm a passionate web developer with expertise in building modern, 
                  scalable applications using cutting-edge technologies.
                </p>
                <p>
                  With a strong foundation in both frontend and backend development, 
                  I create seamless digital experiences that combine beautiful design 
                  with robust functionality.
                </p>
                <p>
                  Currently pursuing my degree in Computer Science and Engineering 
                  at the University of Moratuwa, I'm always eager to learn and 
                  implement the latest technologies.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div ref={skillsRef}>
              <h3 className="text-2xl font-medium mb-6 text-foreground">
                Core Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`glass-card p-4 text-center group hover:scale-105 transition-all duration-300 scroll-stagger ${
                      skillsVisible[index] ? 'visible' : ''
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <skill.icon className={`w-8 h-8 mx-auto mb-2 icon-glow ${skill.color}`} />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;