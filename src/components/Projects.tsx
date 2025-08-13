import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

const Projects = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useStaggeredAnimation(6, 200);

  const projects = [
    {
      id: 1,
      title: 'Real-Time Collaborative Code Editor',
      description: 'Full-stack collaborative coding platform with real-time synchronization, version control, and secure code execution.',
      image: project1,
      tech: ['ReactJS', 'Node.js', 'MongoDB', 'WebSocket', 'Docker', 'JWT'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Single Vendor E-Commerce Platform',
      description: 'Complete e-commerce solution with product browsing, shopping cart, order placement, and normalized database design.',
      image: project2,
      tech: ['ReactJS', 'MySQL', 'Express.js', 'Payment Gateway'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'SnapNote Real-Time To-Do App',
      description: 'Real-time synchronized task management application with caching, CRUD operations, and responsive design.',
      image: project3,
      tech: ['React.js', 'Node.js', 'TailwindCSS', 'Redis', 'MongoDB'],
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'RPAL Language Interpreter',
      description: 'Custom programming language interpreter with lexer, parser, and optimized execution logic implementation.',
      image: project4,
      tech: ['Python', 'Compiler Design', 'Algorithm Optimization'],
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Real-Time Chat Application',
      description: 'Multi-room chat application with instant message delivery, WebSocket connections, and responsive UI design.',
      image: project5,
      tech: ['React.js', 'Node.js', 'Express.js', 'WebSocket', 'MongoDB'],
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Portfolio Showcase',
      description: 'Modern developer portfolio with futuristic design, smooth animations, and responsive architecture.',
      image: project6,
      tech: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div ref={titleRef} className={`text-center mb-16 scroll-fade-up ${titleVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-glow">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work showcasing modern development practices and innovative solutions
          </p>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-card group hover:scale-105 transition-all duration-500 overflow-hidden scroll-scale-up ${
                projectsVisible[index] ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full border border-primary/30 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;