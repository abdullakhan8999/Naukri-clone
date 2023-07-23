import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

const Admin = () => {
  const navigate = useNavigate();

  // date from state
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);
  return <>{loading ? <Loader /> : <div>admin</div>}</>;
};

export default Admin;
