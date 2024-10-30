import React, { useEffect, useRef, useState } from 'react';
import ExperienceCard from './components/ExperienceCard';
import SkillCard from './components/SkillCard';
import Typed from 'typed.js'
import './App.css';

const App: React.FC = () => {
  const typedString = useRef<HTMLSpanElement | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('section');
      let currentSection = activeSection;
      let isChangingSection = false;
  
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = sectionTop + section.clientHeight;
  
        if (sectionTop <= window.innerHeight / 2 && sectionBottom >= window.innerHeight / 2) {
          currentSection = section.id;
          isChangingSection = true;
        }
      });
  
      if (isChangingSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  useEffect(() => {
    if (typedString.current) {
      const options = {
        strings: ["Software Engineer", "Problem Solver"], 
        typeSpeed: 100,
        backSpeed: 100, 
        backDelay: 1000,
        loop: true
      };

      const typed = new Typed(typedString.current, options);
      return () => typed.destroy();
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <a href="#home" className="logo">Pooja.</a>
        <nav className="navbar">
          <a href="#home" style={{"--i":1} as React.CSSProperties} className={activeSection === 'home' ? 'current' : ''}>Home</a>
          <a href="#about" style={{"--i":2} as React.CSSProperties} className={activeSection === 'about' ? 'current' : ''}>About</a>
          <a href="#experience" style={{"--i":3} as React.CSSProperties} className={activeSection === 'experience' ? 'current' : ''}>Experience</a>
          <a href="#skills" style={{"--i":4} as React.CSSProperties} className={activeSection === 'skills' ? 'current' : ''}>Skills</a>
          <a href="#contact" style={{"--i":5} as React.CSSProperties} className={activeSection === 'contact' ? 'current' : ''}>Contact</a>
        </nav>
      </header>
      <section id="home">
        <div className="home-content">
          <h3>Hello World, It's Me</h3>
          <h1>Pooja Raghuram</h1>
          <h3> And I'm a <span ref={typedString}></span></h3>
          <p>Studying Computer Science and Computational Finance at University of Maryland - College Park</p>
          <div className="socials">
            <a href="https://www.linkedin.com/in/pooja-raghuram/" style={{"--i":7} as React.CSSProperties}><i className='bx bxl-linkedin'></i></a>
            <a href="https://github.com/poojaiyengar123" style={{"--i":8} as React.CSSProperties}><i className='bx bxl-github' ></i></a>
            <a href={`mailto:praghura@terpmail.umd.edu`} style={{"--i":9} as React.CSSProperties}><i className='bx bx-envelope' ></i></a>
            <a href="https://www.instagram.com/pooja_r20/" style={{"--i":10} as React.CSSProperties}><i className='bx bxl-instagram'></i></a>
          </div> 
        </div>
        <div className="home-image">
          <img src="pic.png" alt="Me" width="500px" height="500px"/>
        </div>
      </section>
      <section id="about">
        <div className="about-image">
          <img src="umd.png" alt="UMD" width="350px" height="350px"/>
        </div>
        <div className="about-content">
          <h1>About Me</h1>
          <p>
          Hi! I’m an undergraduate student at the University of Maryland-College Park with a passion for 
          software development. I’m currently majoring in Computer Science and double minoring in 
          Computational Finance and Information Risk Management, Ethics, and Policy. I’m interested in 
          utilizing technology to help my community and make an impact.
          </p>
        </div>
      </section>
      <section id="experience">
        <h1>Experience</h1>
        <div className="experience-cards">
            <ExperienceCard title={"Software Engineering Intern"} company={"Bloomberg LP"} timeframe={"June 2024 - August 2024"} logo={"bloomberg.png"}></ExperienceCard>
            <ExperienceCard title={"Software Engineering Intern"} company={"Bloomberg LP"} timeframe={"June 2023 - August 2023"} logo={"bloomberg.png"}></ExperienceCard>
            <ExperienceCard title={"Marketing and Data Analytics Intern"} company={"iMaxCRM"} timeframe={"June 2022 - August 2022"} logo={"imaxcrm.png"}></ExperienceCard>
            <ExperienceCard title={"Bootcamp Engineer"} company={"Hack4Impact-UMD"} timeframe={"August 2024 - Present"} logo={"h4i-umd.jpeg"}></ExperienceCard>
            <ExperienceCard title={"Junior Quantitative Analyst"} company={"Smith Investment Fund - UMD"} timeframe={"October 2024 - Present"} logo={"sif-umd.jpeg"}></ExperienceCard>
        </div>
      </section>
      <section id="skills">
        <h1>Skills</h1>
        <div className="skills-cards">
        <h2>Languages</h2>
          <div className="skills-row">
            <SkillCard name={"Java"} logo={"java.png"}></SkillCard>
            <SkillCard name={"Python"} logo={"python.png"}></SkillCard>
            <SkillCard name={"C"} logo={"c.png"}></SkillCard>
            <SkillCard name={"HTML"} logo={"html.png"}></SkillCard>
            <SkillCard name={"CSS"} logo={"css.png"}></SkillCard>
            <SkillCard name={"JavaScript"} logo={"js.png"}></SkillCard>
            <SkillCard name={"TypeScript"} logo={"ts.png"}></SkillCard>
            <SkillCard name={"SQL"} logo={"sql.png"}></SkillCard>
          </div>
          <h2>Developer Tools</h2>
          <div className="skills-row">
            <SkillCard name={"GitHub"} logo={"github.png"}></SkillCard>
            <SkillCard name={"Visual Studio Code"} logo={"vscode.png"}></SkillCard>
            <SkillCard name={"Android Studio"} logo={"android-studio.png"}></SkillCard>
            <SkillCard name={"Jupyter"} logo={"jupyter.png"}></SkillCard>
          </div>
          <h2>Libraries/Frameworks</h2>
          <div className="skills-row">
            <SkillCard name={"React.js"} logo={"reactjs.png"}></SkillCard>
            <SkillCard name={"Node.js"} logo={"nodejs.png"}></SkillCard>
            <SkillCard name={"Apache Kafka"} logo={"kafka.png"}></SkillCard>
            <SkillCard name={"Docker"} logo={"docker.png"}></SkillCard>
          </div>
          <h2>Product</h2>
          <div className="skills-row">
            <SkillCard name={"Agile Methodology"} logo={"agile.png"}></SkillCard>
            <SkillCard name={"Problem-Solving"} logo={"problem-solving.png"}></SkillCard>
            <SkillCard name={"Leadership"} logo={"leadership.png"}></SkillCard>
            <SkillCard name={"Collaboration"} logo={"collaboration.jpg"}></SkillCard>
          </div>
        </div>
      </section>
      <section id="contact">
        <h1>Contact Me</h1>
        <div className="socials">
          <a href="https://www.linkedin.com/in/pooja-raghuram/" style={{"--i":7} as React.CSSProperties}><i className='bx bxl-linkedin'></i></a>
          <a href="https://github.com/poojaiyengar123" style={{"--i":8} as React.CSSProperties}><i className='bx bxl-github' ></i></a>
          <a href={`mailto:praghura@terpmail.umd.edu`} style={{"--i":9} as React.CSSProperties}><i className='bx bx-envelope' ></i></a>
          <a href="https://www.instagram.com/pooja_r20/" style={{"--i":10} as React.CSSProperties}><i className='bx bxl-instagram' ></i></a>
        </div> 
      </section>
      <footer className="App-footer">
        <p>© 2024 Pooja Raghuram</p>
      </footer>
    </div>
  );
};

export default App;
