import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Logo from "./Logo";
import { login } from "../store/authSlice";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
function Signup() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <div>
        <div className="flex flex-col">
          <span className="text-center ">
            <Logo />
          </span>
          {/* <h1 className="font-bold text-center text-xl  mb-5">
            Create Account
          </h1> */}
          {error && <div>{error}</div>}
        </div>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit(create)}>
          <div>
            <Input
              label="Name: "
              placeholder="User Name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email: "
              placeholder="User Email"
              type="email"
              {...register("email", {
                required: true,
                validatea: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              placeholder="User Password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            <div className="flex text-teal-950 my-4">
              <p>Don&apos;t have any account?&nbsp;</p>
              <Link className="text-blue-700" to="/login">
                Login
              </Link>
            </div>
            <Button
              className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
              type="submit"
            >
              Register new account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
