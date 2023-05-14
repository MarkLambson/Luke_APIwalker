import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import People from './components/People';
import Planet from './components/Planet';

function App() {
  return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<img src="https://www.giantfreakinrobot.com/wp-content/uploads/2022/06/hellotherethumb.jpg" alt="hello" height="400px" />} />
          <Route path="/people/:id" element={<People />} />
          <Route path='/planet/:id'element={<Planet />} />
        </Routes>
      </div>
  );
}

export default App;