import React from "react";
import Container from "../container/Container";
import LogoutBt from "../Header/LogoutBt";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Logo from "../Logo";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItem = [
    { name: "Home", slug: "/", active: true },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Post",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="p-2 border-4 bg-[#eece98]">
      <Container>
        <nav className="flex justify-between">
          <div className="text-2xl font-bold">
            <Logo />
          </div>
          <ul className="flex justify-end text-sm sm:text-base">
            {navItem.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <Button
                    className="hover:bg-[#f9d08a] focus:bg-[#f9d08a] hover:text-black"
                    bgColor="bg-[#d1b37f]"
                    onClick={() => navigate(item.slug)}
                  >
                    {item.name}
                  </Button>
                </li>
              ) : null
            )}
            {authStatus && <LogoutBt />}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
