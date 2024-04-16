import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { login as authLogin } from "../store/authSlice";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import Logo from "./Logo";

function Login() {
  const [error, setError] = useState("");
  const navigat = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigat("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex flex-col">
      <span className="text-center my-5">
        <Logo />
      </span>

      {/* <div className="text-center">
        <h1 className="text-xl">Login Now</h1>
      </div> */}
      {error && <div>{error}</div>}
      <div>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit(login)}>
          <Input
            lable="Enter Email"
            className=""
            placeholder="write your email"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPatren: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
          />
          <Input
            lable="Enter Pssword"
            placeholder="enter password"
            type="password"
            {...register("password", {
              required: true,
            })}
          />

          <Button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            Sign In
          </Button>
        </form>
        <div className="flex justify-center text-teal-950 m-2">
          <p>Don&apos;t have any account?&nbsp;</p>
          <Link className="text-blue-700" to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
