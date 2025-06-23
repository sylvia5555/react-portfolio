import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Skills from "./Components/skills/Skills";
import Projects from "./Components/projects/Projects";
import Contact from "./Components/contact/Contact";
import "./App.css";
import Background from "./background/Background";
import PlayStats from "./playstats/PlayStats";

function App() {
  return (
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PlayStats />
    </Router>
  );
}

export default App;
