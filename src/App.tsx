import './App.css';
import './scss/app.scss';
import Header from './components/Header';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Cart from './routes/Cart';
import { Routes, Route } from 'react-router-dom';
import { useState, PropsWithChildren } from 'react';
import { SearchTextContext } from './contexts/SearchTextContext';

function App() {
  
  function SearchTextProvider(props: PropsWithChildren) {
    const [searchText, setSearchText] = useState('');

    return (
      <SearchTextContext.Provider value={{ searchText, setSearchText }}>
        {props.children}
      </SearchTextContext.Provider>
    );
  }

  return (
    <div className="wrapper">
      <SearchTextProvider>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchTextProvider>
    </div>
  );
}

export default App;
