import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { AiOutlineLoading } from "react-icons/ai";
import Footer from "./components/Footer/Footer";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-[url('https://images.unsplash.com/photo-1555181937-efe4e074a301?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JlYW0lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')]">
      <div className="w-full block">
        <Header />
        <main>
         
          {!loading ? (
            <Outlet />
          ) : (
            <div>
              <AiOutlineLoading className="animate-spin text-black text-3xl m-auto h-[50vh]" />
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div>
      <AiOutlineLoading className="animate-spin text-black text-3xl m-auto h-[50vh]" />
    </div>
  );
}

export default App;
