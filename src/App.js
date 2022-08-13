import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import AboutMe from "./components/AboutMe/AboutMe";
function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path = "/Skills" exact element = {<Skills/>}/>
          <Route path = "/Projects" exact element = {<Projects/>}/>
          <Route path = "/Contact" exact element = {<Contact/>}/>
          <Route path = "/AboutMe" exact element = {<AboutMe/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
