import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";
import PageLoading from "../components/PageLoading";

interface IRouteProps {
  children: React.ReactNode;
}

const NotAuthenticatedRoute: React.FC<IRouteProps> = ({ children }) => {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return <PageLoading />;
  }

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default NotAuthenticatedRoute;
