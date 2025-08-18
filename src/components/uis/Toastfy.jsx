"use client"
import React, { useEffect, useState } from 'react'

const Toastfy = ({ call, msg }) => {
  const { success, error } = call || {}; // safe destructuring
  const [isVisible, setIsVisible] = useState(success || error);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (success) {
      setStatus("success");
      setIsVisible(true);
    } else if (error) {
      setStatus("error");
      setIsVisible(true);
    }

    if (success || error) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setStatus(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  if (!isVisible) return null; // hide toast when not active

  const bgClass =
    status === "success"
      ? "from-lime-500 to-green-700"
      : "from-red-500 to-orange-700";

  return (
    <div
      className={`fixed top-20 z-50 w-96 p-2 shadow-2xl bg-gradient-to-tr ${bgClass} text-white font-semibold text-2xl rounded-bl-sm rounded-br-2xl rounded-tr-sm rounded-tl-2xl text-center`}
      data-aos="fade-right"
      data-aos-duration="600"
    >
      {msg}
    </div>
  );
};

export default Toastfy;
