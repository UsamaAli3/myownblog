import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="font-bold text-2xl text-teal-950" to="/">
      My Blog
    </Link>
  );
}

export default Logo;
