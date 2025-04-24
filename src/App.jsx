import { useState } from 'react';
import './App.css';
import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <div>
        <h1>Recipes API</h1>
        <p>Retrieve recipes</p>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
