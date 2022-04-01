import { Route, Routes } from "react-router-dom";
import { useState , useEffect} from "react";
import Loader from './components/Loader/Loader'

import "./App.scss";
import { OurTeam} from "./components";
import { Homepage, Projects } from "./pages";
import { Project1, Project2, Project3, Project4, Project5, Project6} from "./pages/projectPages";
import { Event1, Event2, Event3, Event4 } from "./pages/projectPages";
import {Events} from "./pages";
import Project from "./pages/OurProjects/Project";
import Teampage from "./pages/Teampage/Teampage";
import Eventss from "./pages/OurEvents/Eventss";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000)
  }, [])
  
  return (
    <div className="App">
      {loading 
      ?
      (<Loader />)
      
      :
      (<div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/events" element={<Eventss />} />
        <Route path="/projects/project1" element={<Project1 />} />
        <Route path="/projects/project2" element={<Project2 />} />
        <Route path="/projects/project3" element={<Project3 />} />
        <Route path="/projects/project4" element={<Project4 />} />
        <Route path="/projects/project5" element={<Project5 />} />
        <Route path="/projects/project6" element={<Project6 />} />
        <Route path="/events/event1" element={<Event1 />} />
        <Route path="/events/event2" element={<Event2 />} />
        <Route path="/events/event3" element={<Event3 />} />
        <Route path="/events/event4" element={<Event4 />} />
      </Routes>
      {/* <Footer /> */}
      </div>)
     }
    </div>
  );
}

export default App;
