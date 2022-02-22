import { Route, Routes } from "react-router-dom";

import "./App.scss";
import { Footer, Header } from "./components";
import { Homepage, Projects } from "./pages";
import { Project1, Project2, Project3, Project4, Project5, Project6 } from "./pages/projectPages";
import {Events} from "./pages"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects/project1" element={<Project1 />} />
        <Route path="/projects/project2" element={<Project2 />} />
        <Route path="/projects/project3" element={<Project3 />} />
        <Route path="/projects/project4" element={<Project4 />} />
        <Route path="/projects/project5" element={<Project5 />} />
        <Route path="/projects/project6" element={<Project6 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
