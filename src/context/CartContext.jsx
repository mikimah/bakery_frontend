import { createContext, useContext, useState, useEffect } from "react";
import { showSuccess } from "../utils/notify";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart từ sessionStorage khi component mount
  useEffect(() => {
    const savedCart = sessionStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Lưu cart vào sessionStorage mỗi khi thay đổi
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Thêm sản phẩm (mặc định tăng số lượng)
  function addToCart(id, productData, qty = 1) {
    setCart(prev => {
      const existing = prev.find(item => item.id === id);

      if (existing) {
        return prev.map(item =>
          item.id === id ? { ...item, qty: item.qty + qty } : item
        );
      }

      return [...prev, { id, ...productData, qty}];
    });
    showSuccess("Đã thêm sản phẩm vào giỏ hàng");
  }

  //  Xóa sản phẩm khỏi giỏ
  function removeFromCart(id) {
    setCart(prev => prev.filter(item => item.id !== id));
    showSuccess("Đã xóa sản phẩm khỏi giỏ hàng");
  }

  function clearCart() {
    setCart([]);
  }

  //  Tăng số lượng 
  function increaseQty(id) {
    setCart(prev =>
      prev.map(item =>
        item.id === id && item.qty < 5 ? { ...item, qty: item.qty + 1 } : item
      )
    );
  }

  //  Giảm số lượng 
  function decreaseQty(id) {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
        )
    );
  }

  function getQtyAll(){
    let total =0;
    cart.forEach(item=>{
      total += item.qty;
    });
    return total;
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        getQtyAll,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

