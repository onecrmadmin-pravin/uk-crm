import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

/**
 * @desc Protect routes based on authentication
 */
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // While checking auth
  if (loading) {
    return (
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-700 border-t-blue-500">
        Loading...
      </div>
    );
  }

  // If not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If logged in
  return children;
};

export default ProtectedRoute;//this is the protected route for the system or any app 