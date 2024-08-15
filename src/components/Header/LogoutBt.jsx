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
      className="hover:bg-[#f9d08a] hover:text-black"
      bgColor="bg-[#d1b37f]"
      onClick={logoutHandler}
    >
      Logout
    </Button>
  );
}

export default LogoutBtn;
