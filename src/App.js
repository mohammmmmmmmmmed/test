import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Animations.css";
import "./App.css";

import Page from "./components/Page";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Resume from "./components/Resume";
import NavBar from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/404";

class EasterEgg extends React.PureComponent {
  render() {
    for (let i = 0; i <= 10; i++)
      console.info("Your awesomeness meter: 0% [" + " █ ".repeat(i) + "   ".repeat(10 - i) + "] 100%")
    
    return null;
  }
}

function App() {
  let location = useLocation();
  
  return (
    <>
      <ScrollToTop />

      <NavBar />
      <div className="App">
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={500}
          >
            <Routes location={location}>
              <Route path="/" element={<Page component={Home} title="Home" />} />
              <Route path="/about" element={<Page component={About} title="About" />} />
              <Route path="/experience" element={<Page component={Experience} title="Experience" />} />
              <Route path="/projects" element={<Page component={Projects} title="Projects" />} />
              <Route path="/blog" element={<Page component={Blog} title="Blog" />} />
              <Route path="/resume" element={<Page component={Resume} title="Resume" />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>

        <EasterEgg />
      </div>
    </>
  );
}

export default App;