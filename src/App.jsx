
import Navbar from './components/Navbar'; 
import Hero from './sections/Hero'; 
import About from './sections/About'; 
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact'; 
import Footer from './components/Footer'; 
import CosmicCursor from './components/CosmicCursor'; 
import ProgressBar from './components/ProgressBar'; 

function App() {
  return (


     
      <div className="min-h-screen text-gray-500 dark:bg-dark-bg light:bg-light-bg scroll-smooth relative"> 
          
          <ProgressBar />
          <CosmicCursor /> 

          <Navbar /> 

          <main>
           
            <Hero id="home" /> 
            <About id="about" /> 
            <Skills id="skills" />
            <Projects id="projects" />
            <Contact id="contact" /> 
          </main>

          <Footer /> 
      </div>    
  );
}

export default App;