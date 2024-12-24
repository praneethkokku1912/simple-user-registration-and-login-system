import logo from './logo.svg';
import './App.css';
import Register from './component/Register';
import Login from './component/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;