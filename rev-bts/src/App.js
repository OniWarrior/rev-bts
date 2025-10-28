
import './App.css';
import Home from './components/home';
import Signup from './components/signup';
import Login from './components/login';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/utils/protected-route';
import ClientDashBoard from './components/client/client-dashboard';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoute />} >
          <Route path='/client-dashboard' element={<ClientDashBoard />} />
        </Route>

      </Routes>

    </div>
  );
}

export default App;
