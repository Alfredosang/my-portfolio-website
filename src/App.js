import Nav from './Nav';
import './App.css';
import Hero from './Hero';
import About from './About';
import Tools from './Tools';
import Project from './Project';
import Contact from './Contact';

function App() {
  return (
    <div className="App bg-gradient-to-b from-gray-900 to-black ">
      <Nav />
      <Hero />
      <About />
      <Tools />
      <Project />
      <Contact />

      

    </div>
  );
}

export default App;
