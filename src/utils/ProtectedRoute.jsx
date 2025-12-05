import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, role }) {
    const { user, loading } = useAuth();

    if (loading) {
        return null; // hoặc skeleton
    }

    // Nếu chưa đăng nhập
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Nếu có yêu cầu role (quyền)
    if (user.VaiTro == 'user') {
        return <Navigate to="/" replace />;
    }

    return children;
}
