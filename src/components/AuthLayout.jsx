import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children, authentication = true }) {
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => {
    return state.auth.status;
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [navigate, authStatus, authentication]);

  return (
    <>
      {loader && <div>Loding...</div>}
      <div>{children}</div>
    </>
  );
}

export default AuthLayout;
