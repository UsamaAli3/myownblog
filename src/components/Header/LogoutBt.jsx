import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import Button from "../Button";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => dispatch(logout()));
  };

  return (
    <Button
      className="inline-bock px-6 py-2 duration-200  bg-[#d1b37f] rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </Button>
  );
}

export default LogoutBtn;
