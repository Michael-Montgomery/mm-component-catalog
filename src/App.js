// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Headers from './pages/headers/headers';
import Home from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/headers' element={<Headers></Headers>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
