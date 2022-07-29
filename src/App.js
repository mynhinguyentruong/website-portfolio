import Navbar from "./components/NavBar";

import Contact from "./routes/Contact";
import Project from "./routes/Project";
import Home from "./routes/Home";

import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/project' element={<Project/>} />
        <Route exact path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
