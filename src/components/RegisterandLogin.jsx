"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addUser } from "@/store/slices/login";

const RegisterandLogin = () => {
  const [user, setUser] = useState({
    user: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLogin, setLogin] = useState(true);
  const [isRegister, setRegister] = useState(false);
  const [isForgotPassword, setForgotPassword] = useState(false);
  const navigate = useRouter();


  const userData = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("userData", userData);
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.email === "" || user.password === "") {
      alert("Please fill in all fields", "error");
      return;
    }
    console.log("userData login", user);

    userData.forEach((item) => {
      if (item.email === user.email && item.password === user.password) {
        alert("Login successful", "success");
        dispatch({ type: "LOGIN", payload: user });
        setLogin(false);
        setRegister(false);
        setForgotPassword(false);
        navigate.push("/")
        setUser({
          user: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        alert("Invalid email or password", "error");
        setUser({
          user: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        return;
      }
    });
  };

  const handleRegsiter = (e) => {
    e.preventDefault();
    if (
      user.user === "" ||
      user.email === "" ||
      user.password === "" ||
      user.confirmPassword === ""
    ) {
      alert("Please fill in all fields", "error");
      return;
    }
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match", "error");
      return;
    }
    console.log("userData register", user);
    dispatch(addUser(user));
    alert("Registration successful", "success");
    setLogin(false);
    setRegister(false);
    setForgotPassword(false);
    navigate.push("/");
    setUser({
      user: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  const handleForget = (e) => {
    e.preventDefault();
    if (user.email === "") {
      alert("Please enter your email", "error");
      return;
    }
    console.log("userData forget", user);
    // Here you would typically send a request to your backend to handle password reset
    alert("Password reset link sent to your email", "success");
    setLogin(true);
    setForgotPassword(false);
    setRegister(false);
    setUser({
      user: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-300 to-red-600 z-50`}>
      <div className="p-8 rounded-lg shadow-lg w-96 bg-transparent backdrop-blur-2xl">
        {isLogin && (
          <form className="space-y-2 text-white" onSubmit={handleLogin}>
            <div>
              <input
                type="email"
                className="w-full p-2 mb-4 border rounded"
                placeholder="Enter your email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full p-2 mb-4 border rounded"
                placeholder="Enter your password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Login
            </button>
            <p className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => {
                  setLogin(false);
                  setRegister(true);
                }}
              >
                Register
              </span>
            </p>
            <p className="text-center text-sm">
              Forgot your password?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => {
                  setLogin(false);
                  setForgotPassword(true);
                }}
              >
                Reset Password
              </span>
            </p>
          </form>
        )}
        {/* Register + Forgot password stay same */}
        {isRegister && (
          <form className="space-y-2 text-white" onSubmit={handleRegsiter}>
            <div>
              <input
                type="text"
                className="w-full p-2 mb-4 border rounded"
                placeholder="Enter your name"
                value={user.user}
                onChange={(e) => setUser({ ...user, user: e.target.value })}
              />
            </div>
            <div>
              <input
                type="email"
                className="w-full p-2 mb-4 border rounded"
                placeholder="Enter your email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full p-2 mb-4 border rounded"
                placeholder="Enter your password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full p-2 mb-4 border rounded"
                placeholder="Enter your password"
                value={user.confirmPassword}
                onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Register
            </button>
            <p className="mt-4 text-center text-sm">
              You already account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => {
                  setLogin(true);
                  setRegister(false);
                }}
              >
                Login
              </span>
            </p>
            <p className="text-center text-sm">
              Forgot your password?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => {
                  setRegister(false);
                  setForgotPassword(true);
                }}
              >
                Reset Password
              </span>
            </p>
          </form>
        )}
        {/* forget */}
        {isForgotPassword && (
          <form className="space-y-2 text-white" onSubmit={handleForget}>
            <div>
              <input
                type="email"
                className="w-full p-2 mb-4 border rounded"
                placeholder="Enter your email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Reset Password
            </button>
            <p className="mt-4 text-center text-sm">
              Remember your password?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => {
                  setLogin(true);
                  setForgotPassword(false);
                }}
              >
                Login
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterandLogin;
