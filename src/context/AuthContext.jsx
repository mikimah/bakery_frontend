import {createContext, useContext,useState,useEffect} from "react";
import api from "../api/api";

const AuthContext = createContext();

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        const token = localStorage.getItem('auth_token');

        if (!token) {
            setLoading(false);
            return;
        }

        try {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await api.get('/user');
            setUser(response.data);
        } catch (e) {
            localStorage.removeItem('auth_token');
            delete api.defaults.headers.common['Authorization'];
        }

        setLoading(false);
    };


    const updateAuthState = (token,userData)=>{
        localStorage.setItem('auth_token', token);
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setUser(userData);
    };

    const clearAuthState = ()=>{
        localStorage.removeItem('auth_token');
        delete api.defaults.headers.common['Authorization'];
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user,loading,updateAuthState,checkAuth,clearAuthState }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}