import { ShoppingCart, Search, Menu, X} from 'lucide-react';
import {  useState } from 'react';
import {Link,useNavigate} from 'react-router';
import { useAuth } from '../context/AuthContext';
import { useCart } from "../context/CartContext.jsx";
import {useSearch} from '../context/SearchContext.jsx';
import api from '../api/api';
import { showError, showSuccess } from '../utils/notify';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const  [isSearchOpen, setIsSearchOpen] = useState(false);
  const {user,clearAuthState} = useAuth();
  const {setIsLoading, isLoading} = useSearch();
  const {getQtyAll} = useCart();
  const navigate = useNavigate();


  function handleSearchClick() {
    setIsLoading(!isLoading);
    
  }

  async function handleLogout() {
    try{
      const response = await api.post('logout');
      if(response.data.status==200){
        showSuccess(response.data.message);
        clearAuthState();
        navigate('/');
      }
    }catch(e){
      showError(e.response.data.message); 
    }
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 overflow-hidden">
    
      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4  relative">

          {
            isLoading &&<div className='z-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-full bg-black/50'></div>
          }
          

          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-amber-300 to-orange-400 p-2 rounded-full">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C9.243 2 7 4.243 7 7v1H6c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3v1H9V7c0-1.654 1.346-3 3-3zm6 6v10H6V10h12z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-amber-800">Amai Delight</h1>
                <p className="text-xs text-amber-500 -mt-1">Premium Bakery</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-amber-500 font-medium transition">Trang chủ</a>
            <a href="/product" className="text-gray-700 hover:text-amber-500 font-medium transition">Sản phẩm</a>
            <a href="/about" className="text-gray-700 hover:text-amber-500 font-medium transition">Về chúng tôi</a>
            <a href="/contact" className="text-gray-700 hover:text-amber-500 font-medium transition">Liên hệ</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 ">
            <button 
            onClick={handleSearchClick}
              className="p-2 z-50 hover:bg-gray-100 bg-white rounded-full transition hidden md:block hover:cursor-pointer">
              {
              isLoading ? 
              <X className="text-gray-700" size={20} /> : 
              <Search className="text-gray-700" size={20} />
              }
            </button>
            <a href='/cart' className="relative p-2 hover:bg-gray-100 rounded-full transition">
              <ShoppingCart className="text-gray-700" size={20} />
              <span className="absolute -top-1 -right-1 bg-orange-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {getQtyAll()}
              </span>
            </a>
            {user ? (
              <>
                <span className="hidden md:block text-gray-700 font-medium">Xin chào, {user.HoTen}</span>
                <a  onClick={()=>handleLogout()} className="hidden md:block px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-medium rounded-lg transition">
                Đăng xuất
                </a>
              </> 
            ) : (
              <>
              <a href="/login" className="hidden md:block px-4 py-2 text-gray-700 hover:text-amber-600 font-medium transition">
              Đăng nhập
              </a>
              <a href="/register" className="hidden md:block px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-medium rounded-lg transition">
                Đăng ký
              </a>
              </>
            )} 
          
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="text-gray-700" size={24} />
            </button>
          </div>
        </div>

        <div className={` flex items-center  pb-px-0.5 justify-between`}>
           { user ?<span className="min-md:hidden  whitespace-nowrap text-gray-700 font-medium">Xin chào, {user.HoTen}</span>: <span></span> }
            <button className="p-2 hover:bg-gray-100 rounded-full transition hidden max-md:block">
              <Search className="text-gray-700" size={20} />
            </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-200 mt-2 pt-4">
            <div className="flex flex-col gap-1">
              <a  className="text-center text-gray-700 hover:text-amber-500 font-medium transition py-2">Trang chủ</a>
              <a  className="text-center text-gray-700 hover:text-amber-500 font-medium transition py-2">Sản phẩm</a>
              <a  className="text-center text-gray-700 hover:text-amber-500 font-medium transition py-2">Về chúng tôi</a>
              <a  className="text-center text-gray-700 hover:text-amber-500 font-medium transition py-2">Liên hệ</a>
              <div className="border-t border-gray-200 pt-3 mt-3 flex gap-2">
                { user ?
                      <a  onClick={()=>handleLogout()} className="w-[100%] text-center px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-medium rounded-lg transition">
                      Đăng xuất
                      </a>
                  :
                  (
                    <>
                      <Link to="/login"  className="w-[50%] text-gray-700 hover:text-amber-600 font-medium transition py-2 text-center">Đăng nhập</Link>
                      <a href="/register" className="w-[50%] px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-medium rounded-lg transition text-center">Đăng ký</a>
                    </>
                  )}
                
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
