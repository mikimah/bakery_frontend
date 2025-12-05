import { useState } from 'react'
import { Routes, Route } from 'react-router'
import { AuthProvider } from './context/AuthContext.jsx'
import {CartProvider} from './context/CartContext.jsx'
import ScrollToTop from './utils/ScrollToTop.jsx'
import ProtectedRoute from './utils/ProtectedRoute.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import DashBroad from './pages/DashBroad.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Product from './pages/Product.jsx'
import Product2 from './pages/Product2.jsx'
import Product3 from './pages/Product3.jsx'
import Cart from './pages/Cart.jsx'
import Contact from './pages/Contact.jsx'
import CheckOut from './pages/Checkout.jsx'
import SearchBar from './components/SearchBar.jsx' 

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  function toggleSearch() {
    setIsSearchOpen(!isSearchOpen);
  }
  return (
    <>
      <AuthProvider>
      <CartProvider>
        <ScrollToTop />

        {/* Search Bar */}
          <div className={`fixed bg-black/50 w-screen h-screen z-20  left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 ${isSearchOpen ? 'block' : 'hidden'}`}>
            <SearchBar />
          </div>

        <Routes>
          <Route path="/" element={<Home toggleSearch={toggleSearch} />} />
          <Route path="/about" element={<AboutUs toggleSearch={toggleSearch} />} />
          <Route path="/contact" element={<Contact toggleSearch={toggleSearch} />} />
          <Route path="/product" element={<Product toggleSearch={toggleSearch} />} />
          <Route path="/product/:id" element={<Product2 toggleSearch={toggleSearch} />} />
          <Route path="/category/:id" element={<Product3 toggleSearch={toggleSearch} />} />
          <Route path="/cart" element={<Cart toggleSearch={toggleSearch} />} />
          <Route path="/checkout" element={<CheckOut toggleSearch={toggleSearch} />} />
          <Route path="/login" target="_blank" element={<Login />} />
          <Route path="/register" target="_blank" element={<Register />} />
          <Route path="/admin" element={<ProtectedRoute><DashBroad /></ProtectedRoute>} />
        </Routes>
        
      </CartProvider>
      </AuthProvider>

      
    </>
  )
}

export default App
