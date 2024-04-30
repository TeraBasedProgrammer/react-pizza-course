import './App.css';
import './scss/app.scss';
import Header from './components/Header';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Cart from './routes/Cart';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
