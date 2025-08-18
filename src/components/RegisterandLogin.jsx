"use client"
import React, { useState } from 'react'
import Toastfy from './uis/Toastfy';

const RegisterandLogin = () => {
  const [isActive, setIsActive] = useState(false);
  const [isForgets, setIsForgets] = useState(false);
  const [toast, setToast] = useState({ success: false, error: false, msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isActive) {
      // ✅ Registration logic here
      setToast({ success: true, error: false, msg: "Registered successfully!" });
    } else {
      // ✅ Login logic here
      setToast({ success: true, error: false, msg: "Logged in successfully!" });
    }
  };

  const handleForgotPassword = () => {
    // ✅ Forgot password logic
    setToast({ success: true, error: false, msg: "Password reset link sent!" });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-300 to-red-600 z-50">
      <div className="p-8 rounded-lg shadow-lg w-96 bg-transparent backdrop-blur-2xl">
        {isForgets ? (
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
            <p className="mb-4 text-gray-600">Enter your email to reset your password</p>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter your email"
              required
            />
            {
                /* ✅ Show toast for success/error messages */
                toast.success && <Toastfy call={{ success: true }} msg={toast.msg} />
                }
                {
                toast.error && <Toastfy call={{ error: true }} msg={toast.msg} />
            }
            <button
              onClick={handleForgotPassword}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Reset Password
            </button>
            <button
              onClick={() => setIsForgets(false)}
              className="mt-4 w-full bg-gray-300 p-2 rounded hover:bg-gray-400"
            >
              Back to Login/Register
            </button>
          </div>
        ) : (
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold mb-4">{isActive ? "Register" : "Login"}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Enter your email"
                required
              />
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Enter your password"
                required
              />
              {isActive && (
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded mb-4"
                  placeholder="Confirm Password"
                  required
                />
              )}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                {isActive ? "Register" : "Login"}
              </button>
            </form>
            <button
              onClick={() => setIsActive(!isActive)}
              className="mt-4 w-full bg-gray-300 p-2 rounded hover:bg-gray-400"
            >
              {isActive ? "Already have an account? Login" : "Don't have an account? Register"}
            </button>
            <button
              onClick={() => setIsForgets(true)}
              className="mt-2 w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Forgot Password?
            </button>
          </div>
        )}
      </div>

      {/* ✅ Show Toast only if active */}
      {(toast.success || toast.error) && (
        <Toastfy call={{ success: toast.success, error: toast.error }} msg={toast.msg} />
      )}
    </div>
  );
};

export default RegisterandLogin;
