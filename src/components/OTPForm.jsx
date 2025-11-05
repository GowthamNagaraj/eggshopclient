import { useState, useRef } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export default function OTPForm({ email }) {
    const [otp, setOtp] = useState(Array(6).fill(""));
    const inputsRef = useRef([]);
    const [message, setMessage] = useState("");

    const [isPwdChangeForm, setIsPwdChangeForm] = useState(true);

    const [updatePwd, setUpdatePwd] = useState({
        email: email,
        newpassword: "",
        confirmPassword: "",
    });

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(prevState => !prevState);

    const handleChange = (e, index) => {
        const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 1);
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handleGetValue = () => {
        const otpValue = otp.join("");
        console.log("otpValue: ", otpValue);

        if (otpValue.length === 6) {
            setMessage(`Your OTP is ${otpValue}`);
        } else {
            setMessage("Please enter all 6 digits");
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const paste = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
        if (!paste) return;

        const newOtp = paste.split("");
        setOtp([...newOtp, ...Array(6 - newOtp.length).fill("")]);
    };

    const handlePwdChange = (e) => {
        e.preventDefault();

        if (updatePwd.newpassword !== updatePwd.confirmPassword) {
            alert("Password and Confirm Password do not match");
            return;
        }

        console.log("Updating password with data: ", updatePwd);
        // Here you would typically send a request to your backend to update the password
        alert("Password updated successfully");
        window.location.reload();
    }

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="bg-white w-full max-w-sm text-center px-3">
                {!isPwdChangeForm && (
                    <>
                        <h1 className="text-2xl font-semibold mb-4">Enter 6-digit OTP</h1>
                        <div className="flex justify-center gap-2" onPaste={handlePaste}>
                            {otp.map((digit, i) => (
                                <input
                                    key={i}
                                    ref={(el) => (inputsRef.current[i] = el)}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleChange(e, i)}
                                    onKeyDown={(e) => handleKeyDown(e, i)}
                                    className="w-9 h-9 text-center border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleGetValue}
                            className="mt-5 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                        >
                            Get OTP Value
                        </button>
                    </>
                )}
                {/* Pwd Change form */}
                {isPwdChangeForm && (
                    <>
                        <form className="space-y-2 text-black" onSubmit={handlePwdChange}>
                            <div className="relative ">
                                <input
                                    type={isVisible ? "text" : "password"}
                                    className="w-full text-sm text-slate-600 bg-white border border-slate-300 appearance-none rounded ps-3.5 pe-10 py-2.5 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                    placeholder="Enter your new Password"
                                    value={updatePwd.newpassword}
                                    onChange={(e) => setUpdatePwd({ ...updatePwd, newpassword: e.target.value })}
                                />
                                <button
                                    className="absolute inset-y-0 end-0 flex items-center z-20 px-2.5 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus-visible:text-indigo-500 hover:text-indigo-500 transition-colors"
                                    type="button"
                                    onClick={toggleVisibility}
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                    aria-pressed={isVisible}
                                    aria-controls="password"
                                >
                                    {isVisible ? (
                                        <FaRegEye size={20} aria-hidden="true" />
                                    ) : (
                                        <FaRegEyeSlash size={20} aria-hidden="true" />
                                    )}
                                </button>
                            </div>
                            <div className="relative ">
                                <input
                                    type={isVisible ? "text" : "password"}
                                    className="w-full text-sm text-slate-600 bg-white border border-slate-300 appearance-none rounded ps-3.5 pe-10 py-2.5 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                    placeholder="Enter Confirm Password"
                                    value={updatePwd.confirmPassword}
                                    onChange={(e) => setUpdatePwd({ ...updatePwd, confirmPassword: e.target.value })}
                                />
                                <button
                                    className="absolute inset-y-0 end-0 flex items-center z-20 px-2.5 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus-visible:text-indigo-500 hover:text-indigo-500 transition-colors"
                                    type="button"
                                    onClick={toggleVisibility}
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                    aria-pressed={isVisible}
                                    aria-controls="password"
                                >
                                    {isVisible ? (
                                        <FaRegEye size={20} aria-hidden="true" />
                                    ) : (
                                        <FaRegEyeSlash size={20} aria-hidden="true" />
                                    )}
                                </button>
                            </div>
                            <button
                                type="submit"
                                className="w-full p-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                            >
                                Change Password
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
