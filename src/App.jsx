import { Route, Routes } from "react-router-dom";
import { useState , useEffect} from "react";
import Loader from './components/Loader/Loader'
import { Homepage} from "./pages";
import { Project1, Project2, Project3, Project4, Project5, Project6} from "./pages/projectPages";
import Project from "./components/OurProjects/Project";
import Teampage from "./pages/Teampage/Teampage";
import Eventpage from "./pages/Eventpage/Eventpage";


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  }, [])
  
  return (
    <div className="App">
      {loading 
      ?
      (<Loader />)
      
      :
      (<div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team" element={<Teampage/>} />
        <Route path="/projects" element={<Project />} />
        <Route path="/events" element={<Eventpage />} />
        <Route path="/projects/project1" element={<Project1 />} />
        <Route path="/projects/project2" element={<Project2 />} />
        <Route path="/projects/project3" element={<Project3 />} />
        <Route path="/projects/project4" element={<Project4 />} />
        <Route path="/projects/project5" element={<Project5 />} />
        <Route path="/projects/project6" element={<Project6 />} />
      </Routes>
      </div>)
     }
    </div>
  );
}

export default App;
