import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar }from './components/Navbar.js'
import { Shop } from './pages/shop/shop.js'
import { Cart } from './pages/cart/cart.js'
import { ShopContextProvider } from './context/ShopContext';

function App() {
  return (
    <div className="App">
      <ShopContextProvider/>
     <Router>
      <Navbar/>
      <Routes>
        <Route path ='/' element= {<Shop />}/>
        <Route path ='/cart' element={<Cart />}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
