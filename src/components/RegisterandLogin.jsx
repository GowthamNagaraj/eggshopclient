"use client";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addUser } from "@/store/slices/login";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function AuthPage() {
  const [mode, setMode] = useState("login"); // login | register | forgot | otp | reset
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [otpMsg, setOtpMsg] = useState("");
  const inputsRef = useRef([]);
  const router = useRouter();
  const dispatch = useDispatch();
  const users = useSelector((s) => s?.login || []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [visible, setVisible] = useState(false);
  const [otpEmail, setOtpEmail] = useState("");

  // 🔹 Reset form when switching modes
  useEffect(() => {
    setForm({ name: "", email: "", password: "", confirmPassword: "" });
    setErrors({});
    setTouched({});
    setOtp(Array(6).fill(""));
    setOtpMsg("");
  }, [mode]);

  // 🔹 Validation
  const validators = {
    name: (v) => (!v ? "Name required" : ""),
    email: (v) =>
      !v ? "Email required" : !/\S+@\S+\.\S+/.test(v) ? "Invalid email" : "",
    password: (v) =>
      !v ? "Password required" : v.length < 6 ? "Min 6 chars" : "",
    confirmPassword: (v, f) =>
      v !== f.password ? "Passwords do not match" : "",
  };

  useEffect(() => {
    const newErrors = {};
    Object.keys(touched).forEach((k) => {
      if (validators[k]) {
        const err = validators[k](form[k], form);
        if (err) newErrors[k] = err;
      }
    });
    setErrors(newErrors);
  }, [form, touched]);

  const handleChange = (field, value) => {
    setForm((p) => ({ ...p, [field]: value }));
    setTouched((p) => ({ ...p, [field]: true }));
  };

  const isValid = (fields) => fields.every((f) => !validators[f](form[f], form));
  const toggleVisible = () => setVisible((p) => !p);

  // 🔹 Auth Actions
  const handleLogin = (e) => {
    e.preventDefault();
    if (!isValid(["email", "password"])) return;
    const found = users.find(
      (u) => u.email === form.email && u.password === form.password
    );
    if (!found) return alert("Invalid credentials");
    alert("Login success!");
    router.push("/");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!isValid(["name", "email", "password", "confirmPassword"])) return;
    dispatch(addUser(form));
    alert("Registered successfully!");
    router.push("/");
  };

  const handleForgot = (e) => {
    e.preventDefault();
    if (!isValid(["email"])) return;
    setOtpEmail(form.email);
    alert("OTP sent to your email");
    setMode("otp");
  };

  // 🔹 OTP handling
  const handleOtpChange = (e, i) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 1);
    const newOtp = [...otp];
    newOtp[i] = value;
    setOtp(newOtp);
    if (value && i < 5) inputsRef.current[i + 1]?.focus();
  };

  const handleOtpBack = (e, i) => {
    if (e.key === "Backspace" && !otp[i] && i > 0)
      inputsRef.current[i - 1]?.focus();
  };

  const verifyOtp = () => {
    if (otp.join("").length === 6) {
      setOtpMsg("✅ OTP verified successfully");
      setMode("reset");
    } else {
      setOtpMsg("❌ Enter all 6 digits");
    }
  };

  const handleResetPwd = (e) => {
    e.preventDefault();
    if (!isValid(["password", "confirmPassword"])) return;
    alert("Password updated successfully ✅");
    router.push("/");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-300 to-yellow-600">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80 text-black text-sm">
        {/* LOGIN */}
        {mode === "login" && (
          <form onSubmit={handleLogin} className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            <div className="relative">
              <input
                type={visible ? "text" : "password"}
                placeholder="Password"
                value={form.password}
                onChange={(e) => handleChange("password", e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <button
                type="button"
                onClick={toggleVisible}
                className="absolute inset-y-0 end-0 px-3 text-gray-400"
              >
                {visible ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password}</p>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg"
            >
              Login
            </button>
            <p className="text-center text-xs">
              Don’t have an account?{" "}
              <span
                onClick={() => setMode("register")}
                className="text-blue-500 cursor-pointer"
              >
                Register
              </span>
            </p>
            <p className="text-center text-xs">
              Forgot password?{" "}
              <span
                onClick={() => setMode("forgot")}
                className="text-blue-500 cursor-pointer"
              >
                Reset
              </span>
            </p>
          </form>
        )}

        {/* REGISTER */}
        {mode === "register" && (
          <form onSubmit={handleRegister} className="space-y-3">
            <input
              placeholder="Name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}

            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password}</p>
            )}

            <input
              type="password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.confirmPassword && (
              <p className="text-xs text-red-500">{errors.confirmPassword}</p>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg"
            >
              Register
            </button>
            <p className="text-center text-xs">
              Already have an account?{" "}
              <span
                onClick={() => setMode("login")}
                className="text-blue-500 cursor-pointer"
              >
                Login
              </span>
            </p>
          </form>
        )}

        {/* FORGOT PASSWORD */}
        {mode === "forgot" && (
          <form onSubmit={handleForgot} className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg"
            >
              Get OTP
            </button>
            <p className="text-center text-xs">
              Remember password?{" "}
              <span
                onClick={() => setMode("login")}
                className="text-blue-500 cursor-pointer"
              >
                Login
              </span>
            </p>
          </form>
        )}

        {/* OTP */}
        {mode === "otp" && (
          <div className="text-center">
            <h1 className="text-lg font-semibold mb-3">Enter 6-digit OTP</h1>
            <div className="flex justify-center gap-2 mb-3">
              {otp.map((v, i) => (
                <input
                  key={i}
                  ref={(el) => (inputsRef.current[i] = el)}
                  type="text"
                  value={v}
                  onChange={(e) => handleOtpChange(e, i)}
                  onKeyDown={(e) => handleOtpBack(e, i)}
                  maxLength="1"
                  className="w-9 h-9 text-center border border-gray-300 rounded"
                />
              ))}
            </div>
            {otpMsg && (
              <p
                className={`text-xs ${
                  otpMsg.includes("❌") ? "text-red-500" : "text-green-600"
                }`}
              >
                {otpMsg}
              </p>
            )}
            <button
              onClick={verifyOtp}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-3"
            >
              Verify OTP
            </button>
          </div>
        )}

        {/* RESET PASSWORD */}
        {mode === "reset" && (
          <form onSubmit={handleResetPwd} className="space-y-3 text-sm">
            <input
              type={visible ? "text" : "password"}
              placeholder="New Password"
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password}</p>
            )}
            <input
              type={visible ? "text" : "password"}
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.confirmPassword && (
              <p className="text-xs text-red-500">{errors.confirmPassword}</p>
            )}
            <button
              type="button"
              onClick={toggleVisible}
              className="text-xs text-gray-500 float-right"
            >
              {visible ? "🙈 Hide" : "👁 Show"} passwords
            </button>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg"
            >
              Change Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
