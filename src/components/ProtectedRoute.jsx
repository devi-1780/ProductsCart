import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { auth } from "../helpers/firebase";
function ProtectedRoute({ children }) {
  const reduxUser = useSelector((store) => store.user.user);
  const firebaseUser = auth.currentUser;

  if (reduxUser || firebaseUser) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
