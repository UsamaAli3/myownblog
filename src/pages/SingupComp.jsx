import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Signup from "../components/Signup";

function SingupComp() {
  return (
    <div className="py-8">
      <Signup />
    </div>
  );
}

export default SingupComp;
