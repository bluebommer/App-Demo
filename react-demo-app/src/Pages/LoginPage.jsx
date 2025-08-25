import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    if (!phone.startsWith("+254")) {
      setError("Phone must start with country code +254");
      return;
    }
    if (login(phone)) {
      navigate("/main");
    } else {
      setError("Invalid phone number");
    }
  };

  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 animate-fadeIn">
  <div className="bg-white shadow-2xl p-8 rounded-2xl w-96 transform transition-all duration-500 hover:scale-105">
    <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700">
      Welcome Back
    </h1>
    <input
      type="text"
      placeholder="Enter phone number"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      className="w-full border p-3 rounded mb-3 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
    />
    {error && (
      <p className="text-red-500 mb-2 animate-pulse">{error}</p>
    )}
    <button
      onClick={handleLogin}
      className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-xl"
    >
      Login
    </button>
  </div>
</div>

  );
};

export default LoginPage;

