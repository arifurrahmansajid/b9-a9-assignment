import PropTypes from "prop-types";

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivetRoutes;
PrivetRoutes.propTypes = {
  children: PropTypes.node,
};
