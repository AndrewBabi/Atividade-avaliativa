import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/pageLogin';
import Pageshop from './pages/pageShop';
import Carrinho from './pages/pageCarrinho';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Page" element={<Pageshop />} />
        <Route path="/Page2" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
