import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/api"; // Vẫn giữ lại Axios/API instance

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Tải dữ liệu người dùng từ bộ nhớ khi Component khởi tạo
        loadUserFromStorage(); 
    }, []);

    // **CHỨC NĂNG MỚI: TẢI USER TỪ LOCALSTORAGE**
    const loadUserFromStorage = () => {
        const storedUser = localStorage.getItem('user_data');

        if (storedUser) {
            try {
                // Phân tích chuỗi JSON thành đối tượng và đặt lại trạng thái
                setUser(JSON.parse(storedUser));
                
                // LƯU Ý: Nếu bạn có token, bạn vẫn nên tải và đặt nó vào header ở đây
                // Ví dụ: const token = localStorage.getItem('auth_token');
                // api.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
            
            } catch (e) {
                console.error("Lỗi khi phân tích user data từ localStorage:", e);
                localStorage.removeItem('user_data');
            }
        }
        
        setLoading(false);
    };





   
    const updateAuthState = (token, userData) => {
        
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        localStorage.setItem('auth_token', token); 

        
        localStorage.setItem('user_data', JSON.stringify(userData)); 
        setUser(userData);
    };

    
    const clearAuthState = () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_data'); 
        delete api.defaults.headers.common['Authorization'];
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, loading, updateAuthState, clearAuthState }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}