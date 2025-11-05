"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addUser } from "@/store/slices/login";
import OTPForm from "./OTPForm";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

// 🔹 Reusable Input Component
const InputField = ({ type = "text", placeholder, value, onChange, error }) => (
  <div className="flex flex-col gap-1">
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full text-sm text-slate-600 bg-white border ${
        error ? "border-red-500" : "border-slate-300"
      } rounded ps-3.5 pe-10 py-2.5 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100`}
    />
    {error && <span className="text-xs text-red-500">{error}</span>}
  </div>
);

// 🔹 Reusable Password Input
const PasswordField = ({ placeholder, value, onChange, visible, toggle, error }) => (
  <div className="flex flex-col gap-1 relative">
    <input
      type={visible ? "text" : "password"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full text-sm text-slate-600 bg-white border ${
        error ? "border-red-500" : "border-slate-300"
      } rounded ps-3.5 pe-10 py-2.5 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100`}
    />
    <button
      type="button"
      className="absolute inset-y-0 end-0 flex items-center px-2.5 text-gray-400 hover:text-indigo-500"
      onClick={toggle}
    >
      {visible ? <FaRegEye size={18} /> : <FaRegEyeSlash size={18} />}
    </button>
    {error && <span className="text-xs text-red-500">{error}</span>}
  </div>
);

const RegisterandLogin = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({}); // 👈 Track fields user has interacted with

  const [visiblePwd, setVisiblePwd] = useState({
    login: false,
    register: false,
    confirm: false,
  });
  const [mode, setMode] = useState("login");
  const [otpEmail, setOtpEmail] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();
  const userData = useSelector((state) => state?.login || []);

  // 🔹 Validation Rules
  const validators = {
    name: (val) => (!val ? "Name is required" : ""),
    email: (val) =>
      !val
        ? "Email is required"
        : !/\S+@\S+\.\S+/.test(val)
        ? "Enter a valid email"
        : "",
    password: (val) =>
      !val ? "Password is required" : val.length < 6 ? "At least 6 characters" : "",
    confirmPassword: (val, data) =>
      !val
        ? "Confirm password is required"
        : val !== data.password
        ? "Passwords do not match"
        : "",
  };

  // 🔹 Validate only touched fields
  // 🔹 Live validation — keep this as-is
useEffect(() => {
  const newErrors = {};
  Object.keys(touched).forEach((key) => {
    if (validators[key]) {
      const err = validators[key](user[key], user);
      if (err) newErrors[key] = err;
    }
  });
  setErrors(newErrors);
}, [user, touched]);

// 🔹 Reset form completely when switching modes
useEffect(() => {
  const timer = setTimeout(() => {
    setUser({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
    setTouched({});
  }, 0);

  return () => clearTimeout(timer);
}, [mode]);


  // 🔹 Handle user input + mark as touched
  const handleChange = (field, value) => {
    setUser((prev) => ({ ...prev, [field]: value }));
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const resetUser = () =>
    setUser({ name: "", email: "", password: "", confirmPassword: "" });

  const isValid = (fields) => fields.every((f) => !validators[f](user[f], user));

  const togglePassword = (key) =>
    setVisiblePwd((prev) => ({ ...prev, [key]: !prev[key] }));

  // 🔹 Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (!isValid(["email", "password"])) return;
    const found = userData.find(
      (item) => item.email === user.email && item.password === user.password
    );
    if (!found) return alert("Invalid email or password");
    alert("Login successful!");
    dispatch({ type: "LOGIN", payload: found });
    resetUser();
    router.push("/");
  };

  // 🔹 Register
  const handleRegister = (e) => {
    e.preventDefault();
    if (!isValid(["name", "email", "password", "confirmPassword"])) return;
    dispatch(addUser(user));
    alert("Registration successful!");
    resetUser();
    router.push("/");
  };

  // 🔹 Forgot Password
  const handleForget = (e) => {
    e.preventDefault();
    if (!isValid(["email"])) return;
    alert("OTP sent to your email!");
    setOtpEmail(user.email);
    resetUser();
    setMode("otp");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-300 to-yellow-600 z-50">
      <div className="p-8 rounded-lg shadow-lg w-80 bg-slate-50 backdrop-blur-2xl text-black">
        {/* LOGIN */}
        {mode === "login" && (
          <form className="space-y-3" onSubmit={handleLogin}>
            <InputField
              type="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) => handleChange("email", e.target.value)}
              error={touched.email && errors.email}
            />
            <PasswordField
              placeholder="Enter your password"
              value={user.password}
              visible={visiblePwd.login}
              toggle={() => togglePassword("login")}
              onChange={(e) => handleChange("password", e.target.value)}
              error={touched.password && errors.password}
            />
            <button
              type="submit"
              disabled={!isValid(["email", "password"])}
              className={`w-full py-2 rounded-lg text-white ${
                isValid(["email", "password"])
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Login
            </button>
            <p className="text-center text-xs">
              Don’t have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setMode("register")}
              >
                Register
              </span>
            </p>
            <p className="text-center text-xs">
              Forgot password?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setMode("forgot")}
              >
                Reset Password
              </span>
            </p>
          </form>
        )}

        {/* REGISTER */}
        {mode === "register" && (
          <form className="space-y-3" onSubmit={handleRegister}>
            <InputField
              placeholder="Enter your name"
              value={user.name}
              onChange={(e) => handleChange("name", e.target.value)}
              error={touched.name && errors.name}
            />
            <InputField
              type="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) => handleChange("email", e.target.value)}
              error={touched.email && errors.email}
            />
            <PasswordField
              placeholder="Enter password"
              value={user.password}
              visible={visiblePwd.register}
              toggle={() => togglePassword("register")}
              onChange={(e) => handleChange("password", e.target.value)}
              error={touched.password && errors.password}
            />
            <PasswordField
              placeholder="Confirm password"
              value={user.confirmPassword}
              visible={visiblePwd.confirm}
              toggle={() => togglePassword("confirm")}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              error={touched.confirmPassword && errors.confirmPassword}
            />
            <button
              type="submit"
              disabled={!isValid(["name", "email", "password", "confirmPassword"])}
              className={`w-full py-2 rounded-lg text-white ${
                isValid(["name", "email", "password", "confirmPassword"])
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Register
            </button>
            <p className="text-center text-xs">
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setMode("login")}
              >
                Login
              </span>
            </p>
          </form>
        )}

        {/* FORGOT PASSWORD */}
        {mode === "forgot" && (
          <form className="space-y-3" onSubmit={handleForget}>
            <InputField
              type="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) => handleChange("email", e.target.value)}
              error={touched.email && errors.email}
            />
            <button
              type="submit"
              disabled={!isValid(["email"])}
              className={`w-full py-2 rounded-lg text-white ${
                isValid(["email"])
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Get OTP
            </button>
            <p className="text-center text-xs">
              Remember your password?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setMode("login")}
              >
                Login
              </span>
            </p>
          </form>
        )}

        {/* OTP FORM */}
        {mode === "otp" && <OTPForm email={otpEmail} />}
      </div>
    </div>
  );
};

export default RegisterandLogin;
