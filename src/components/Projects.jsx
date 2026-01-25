import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import './Skills.css';
import 'animate.css';

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.project');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const projects = [
    {
      title: "Quick Stay",
      description: "Complete Online Hotel Booking Platform. A modern hotel booking platform for discovering, booking, and managing stays with ease.",
      technologies: ["React.js", "Redux", "Node.js", "PostgreSQL", "Stripe API"],
      category: "fullstack",
      demoUrl: "https://quickk-stayy.vercel.app/",
      githubUrl: "https://github.com/Mazidkh12/Hotel-booking"
    },
    {
      title: "First-Sketch Concepts",
      description: "A client-based website for First Sketch Concepts, an architecture & design studio.",
      technologies: ["React.js", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
      category: "fullstack",
      demoUrl: "https://first-sketch-concepts.vercel.app/",
      githubUrl: "https://github.com/Mazidkh12/firstsketch-Concepts"
    },
    {
      title: "Modern React Portfolio",
      description: "Personal Portfolio Website with Advanced Animations",
      technologies: ["React.js", "Tailwind CSS", "Vite", "JavaScript", "CSS Animations"],
      category: "frontend",
      demoUrl: "#",
      githubUrl: "https://github.com/Mazidkh12/"
    },
    
  ];

  const filterProjects = (category) => {
    if (category === 'all') return projects;
    return projects.filter(project => project.category === category);
  };

  return (
    <section className={`project ${isVisible ? 'animate-in' : ''}`} id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className={`animate__animated ${isVisible ? 'animate__fadeIn' : ''}`}>
              <div className={`skills-header ${isVisible ? 'animate-in' : ''}`}>
                <h2 className="skills-title">Projects</h2>
                <p className="skills-description">
                  Here are some of my recent projects showcasing my skills in full-stack development, modern web technologies, and problem-solving abilities. Each project demonstrates different aspects of my technical expertise and passion for creating innovative solutions.
                </p>
              </div>
              <div className={`projects-grid ${isVisible ? 'animate-in' : ''}`}>
                <div className="projects-container">
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
