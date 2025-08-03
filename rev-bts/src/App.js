
import './App.css';
import Home from './components/home';
import Signup from './components/signup';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

    </div>
  );
}

export default App;
