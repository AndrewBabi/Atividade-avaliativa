import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/pageLogin';
import Pageshop from './pages/pageShop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Page" element={<Pageshop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
