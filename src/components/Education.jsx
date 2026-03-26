import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";
import './Education.css';

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    years: "2023 – Present",
  },
  {
    institution: "Abdul Usman Inter School",
    degree: "Higher Secondary School",
    field: "Mathematics",
    years: "2021 – 2023",
  },
  {
    institution: "Abdul Usman Inter School",
    degree: "Higher School",
    years: "2019 – 2021",
  },
];

export const Education = () => {
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

    const section = document.querySelector('.education-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className={`education-section ${isVisible ? 'animate-in' : ''}`} id="education">
      <Container>
        <div className="education-header">
          <h2 className="education-title">Education</h2>
          <p className="education-description">
            My academic journey and the foundations that shaped my technical skills
          </p>
        </div>

        <div className="education-cards">
          {educationData.map((entry, index) => (
            <div className="education-card" key={index}>
              <div className="education-card-icon">
                <FaGraduationCap />
              </div>
              <div className="education-card-body">
                <div className="education-card-top">
                  <h3 className="education-degree">{entry.degree}</h3>
                  <span className="education-field">{entry.field}</span>
                </div>
                <div className="education-card-bottom">
                  <span className="education-institution">
                    <FaUniversity className="education-meta-icon" />
                    {entry.institution}
                  </span>
                  <span className="education-years">
                    <FaCalendarAlt className="education-meta-icon" />
                    {entry.years}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
