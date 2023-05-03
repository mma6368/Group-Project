import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { MyNavbar } from './components/Navbar';
import {Shop} from './pages/shop/shop';
import {Cart} from './pages/cart/cart';
import {Home} from './pages/Home';
import {Checkout} from './pages/cart/Checkout';
import Footer from './pages/Footer';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
 <div className='App'>
  <ShopContextProvider>
 <Router>
  <MyNavbar />
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product" element={<Shop/>}/>
    <Route path="/cart" element={<Cart/>} />
    <Route path="/checkout" element={<Checkout/>} />
 </Routes>
 <Footer/>
 </Router>
 </ShopContextProvider>
 </div>
    
  );
}

export default App;