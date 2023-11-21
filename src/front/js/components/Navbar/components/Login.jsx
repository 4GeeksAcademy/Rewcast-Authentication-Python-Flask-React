import React from "react";
import { Link } from "react-router-dom";

import useAppContext from "../../../contexts/AppContext.jsx";

const Login = () => {
  const {
    store: { token },
    actions: { logout },
  } = useAppContext();
  
  return (
    <div className="ms-auto">
      {token ? ( 
        <button
          className="btn btn-dark fw-bold me-3 my-3 text-warning"
          onClick={logout}
        >
          <i class="fa-brands fa-sith"></i>LOGOUT
        </button>
      ) : (
        <Link to="/login" className="btn btn-warning fw-bold me-3 my-3">
          <i class="fa-solid fa-jedi"></i> LOGIN
        </Link>
      )}
    </div>
  );
};

export default Login;