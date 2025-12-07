import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/AuthContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { SearchProvider } from './context/SearchContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <SearchProvider>
            <App />
            <ToastContainer />
          </SearchProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
 
)
