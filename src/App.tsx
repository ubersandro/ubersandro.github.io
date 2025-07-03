import './App.css';

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Award, Code, BookOpen, Trophy, ChevronDown, Menu, X } from 'lucide-react';
// import WasmFrame from "./components/WasmFrame"

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'education', 'experience', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const NavigationMenu = ({ mobile = false }) => (
    <nav className={`${mobile ? 'flex flex-col space-y-4' : 'hidden md:flex space-x-8'}`}>
      {['home', 'about', 'projects', 'education', 'experience', 'contact'].map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className={`capitalize font-medium transition-colors text-lg relative group
            ${activeSection === section
              ? 'text-cyan-400'
              : mobile
                ? 'text-gray-300 hover:text-cyan-400'
                : 'text-gray-300 hover:text-white'
            }`}
        >
          {section}
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${activeSection === section ? 'scale-x-100' : ''}`}></span>
        </button>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div
            className="text-3xl font-extrabold cursor-pointer hover:text-cyan-400 transition-colors tracking-wide"
            onClick={() => scrollToSection('home')}
          >
            AM
          </div>

          <NavigationMenu />

          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 animate-slide-down">
            <div className="px-6 py-6">
              <NavigationMenu mobile />
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-950 to-gray-800">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
        <div className="text-center z-10 px-6 animate-fade-in">
          <div className="mb-10">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent leading-tight">
              Alessandro Mileto
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
              Computer Scientist & PhD student to be @ VUsec
            </p>
            <div className="flex justify-center items-center space-x-3 text-gray-400">
              <MapPin size={20} className="text-cyan-400" />
              <span>Amsterdam, NL</span>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce mt-16 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors shadow-lg"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={36} className="text-cyan-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto animate-fade-in-up">
          <h2 className="text-5xl font-extrabold mb-16 text-center text-gray-100">About Me</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                I'm a passionate computer science researcher with expertise in cybersecurity, binary analysis, and low-level systems engineering. I was an AIxCC competitor with Shellphish Support Syndicate, an inter-university team from UCSB, ASU, and Purdue University.
              </p>
              {/* <p className="text-xl text-gray-300 leading-relaxed">
                My work focuses on developing innovative solutions for complex cyber challenges, contributing to a safer digital future. I believe in continuous learning and applying cutting-edge research to real-world problems.
              </p> */}
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 animate-slide-up">
                <Trophy className="text-cyan-400 mb-4" size={40} />
                <h3 className="font-bold text-xl text-gray-100 mb-2">CTF Competitor</h3>
                <p className="text-sm text-gray-400">DEF CON Finalist 2024 & 2025</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 animate-slide-up delay-100">
                <Code className="text-purple-400 mb-4" size={40} />
                <h3 className="font-bold text-xl text-gray-100 mb-2">Researcher</h3>
                <p className="text-sm text-gray-400">Systems engineering & Security</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 animate-slide-up delay-200">
                <BookOpen className="text-green-400 mb-4" size={40} />
                <h3 className="font-bold text-xl text-gray-100 mb-2">Educator</h3>
                <p className="text-sm text-gray-400">Tutor & Lecturer</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 animate-slide-up delay-300">
                <Award className="text-yellow-400 mb-4" size={40} />
                <h3 className="font-bold text-xl text-gray-100 mb-2">Honors Graduate</h3>
                <p className="text-sm text-gray-400">MSc & BSc with Honors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Achievements Section */}
      <section id="projects" className="py-24 px-6 bg-gray-950 border-t border-gray-800">
        <div className="max-w-6xl mx-auto animate-fade-in-up">
          <h2 className="text-5xl font-extrabold mb-16 text-center text-gray-100">Projects & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* AIxCC */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-red-500 transition-all duration-300 animate-slide-up">
              <div className="flex items-center mb-6">
                <Trophy className="text-red-400 mr-4" size={56} />
                <div>
                  <h4 className="text-3xl font-bold text-gray-100 mb-2">AIxCC by DARPA</h4>
                  <p className="text-gray-300 text-lg">Results out in August '25</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                We submitted Artiphishell, a cyber reasoning system designed to find and fix bugs in OSS Fuzz Projects. This program is proudly funded by DARPA, pushing the boundaries of autonomous cyber defense.
              </p>
            </div>
            {/* CTF Achievements */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-red-500 transition-all duration-300 animate-slide-up delay-100">
              <div className="flex items-center mb-6">
                <Trophy className="text-red-400 mr-4" size={56} />
                <div>
                  <h4 className="text-3xl font-bold text-gray-100 mb-2">DEF CON CTF</h4>
                  <p className="text-gray-300 text-lg">Qualified with Shellphish in 2025 (5th place)</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Successfully qualified for the DEF CON CTF finals, one of the most prestigious cybersecurity competitions globally. The finals will be held in Las Vegas, NV.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          <h2 className="text-5xl font-extrabold mb-16 text-center text-gray-100">Education</h2>
          <div className="space-y-10">
            <div className="bg-gray-800 p-10 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 animate-slide-up">
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400 mb-2">MSc Computer Science and Engineering</h3>
                  <p className="text-xl text-gray-300">Politecnico di Milano</p>
                </div>
                <span className="text-md text-gray-400 font-medium">Sept 2021 - April 2024</span>
              </div>
              <div className="mb-4 flex items-center">
                <span className="inline-block bg-green-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold mr-3">
                  With Honors
                </span>
                <span className="text-gray-300 text-lg">GPA: 28.95/30</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Thesis: <strong>On the Performance of Hypervisor-based Memory Monitoring for Code Unpacking Detection</strong>. My research explored the performance tolls stemming from several approaches to hypervisor-based protection against malware.
              </p>
            </div>

            <div className="bg-gray-800 p-10 rounded-xl shadow-lg border border-gray-700 hover:border-purple-400 transition-all duration-300 animate-slide-up delay-100">
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h3 className="text-3xl font-bold text-purple-400 mb-2">Max Planck Pre-doctoral Summer School</h3>
                  <p className="text-xl text-gray-300">Max Planck Society - Cornell, Maryland</p>
                </div>
                <span className="text-md text-gray-400 font-medium">August 2023</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Selected as one of 100 candidates from over 500 applicants worldwide, participating in an intensive research program.
              </p>
            </div>

            <div className="bg-gray-800 p-10 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 animate-slide-up delay-200">
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400 mb-2">BSc Computer Science and Engineering</h3>
                  <p className="text-xl text-gray-300">Università della Calabria</p>
                </div>
                <span className="text-md text-gray-400 font-medium">Sept 2018 - Sept 2021</span>
              </div>
              <div className="mb-4 flex items-center">
                <span className="inline-block bg-green-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold mr-3">
                  With Honors & Academic Mention
                </span>
                <span className="text-gray-300 text-lg">GPA: 29.02/30</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Thesis: <strong>On the Security of 5G Networks</strong>. Explored the architecture and the vulnerabilities and defense mechanisms in next-generation mobile networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-gray-950 border-t border-gray-800">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          <h2 className="text-5xl font-extrabold mb-16 text-center text-gray-100">Experience</h2>
          <div className="space-y-10">
            <div className="bg-gray-900 p-10 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 animate-slide-up">
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h3 className="text-3xl font-bold text-cyan-400 mb-2">Research Intern</h3>
                  <p className="text-xl text-gray-300">University of California Santa Barbara</p>
                </div>
                <span className="text-md text-gray-400 font-medium">Nov 2024 - April 2025</span>
              </div>
              <ul className="text-gray-400 text-lg space-y-2 list-disc list-inside">
                <li>Engaged in cutting-edge research on automated root cause analysis for complex software systems.</li>
                <li>Involved in the AIxCC project, contributing to the development of Artiphishell, an advanced cyber reasoning system.</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-10 rounded-xl shadow-lg border border-gray-700 hover:border-purple-400 transition-all duration-300 animate-slide-up delay-100">
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h3 className="text-3xl font-bold text-purple-400 mb-2">Tutor</h3>
                  <p className="text-xl text-gray-300">Classgap and Tutor Project</p>
                </div>
                <span className="text-md text-gray-400 font-medium">June 2024 - Oct 2024</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Provided comprehensive tutoring in Computer Architectures, Operating Systems, and Algorithms, helping students grasp complex concepts and improve their problem-solving skills.
              </p>
            </div>

            <div className="bg-gray-900 p-10 rounded-xl shadow-lg border border-gray-700 hover:border-green-400 transition-all duration-300 animate-slide-up delay-200">
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h3 className="text-3xl font-bold text-green-400 mb-2">Lecturer</h3>
                  <p className="text-xl text-gray-300">Fiscal Focus - Industry 4.0 Project (EU)</p>
                </div>
                <span className="text-md text-gray-400 font-medium">Feb 2021 - May 2021</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Delivered engaging lectures on Cloud and Edge Computing and Modern Networks Security as part of an EU-funded Industry 4.0 project, educating professionals on emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-5xl font-extrabold mb-16 text-gray-100">Get In Touch</h2>

          <div className="bg-gray-800 p-10 rounded-xl shadow-lg border border-gray-700 mb-12 hover:border-cyan-400 transition-all duration-300">
            <Mail className="text-cyan-400 mx-auto mb-6" size={50} />
            <h3 className="font-bold text-2xl text-gray-100 mb-3">Email</h3>
            <p className="text-xl text-gray-300 break-words">alessandromileto22<span className="text-gray-500"> AT </span>gmail.com</p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/alessandro-mileto"
              className="flex items-center bg-blue-700 hover:bg-blue-600 px-8 py-4 rounded-lg transition-transform transform hover:scale-105 shadow-md text-lg font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-3" size={24} />
              LinkedIn
            </a>
            <a
              href="https://github.com/ubersandro"
              className="flex items-center bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-lg transition-transform transform hover:scale-105 shadow-md text-lg font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-3" size={24} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* <section id="wasm-app" className="py-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">WASM Integration Demo</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          The frame below is a React component that has loaded a WebAssembly module.
          Click it to trigger a function.
        </p>
        <WasmFrame />
      </section> */}

      {/* Footer */}
      <footer className="py-10 px-6 bg-gray-950 text-center border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-500 text-md">
            © 2025 Alessandro Mileto. Built with <span className="text-cyan-400">React</span> and <span className="text-cyan-400">Tailwind CSS</span>.
          </p>
        </div>
      </footer>
    </div>
  );
};

// export default Portfolio;

export default Portfolio;
