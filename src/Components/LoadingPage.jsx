import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/bot.png"; // 👈 replace with your image path

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // redirect after 2 seconds
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-background">
      {/* Blurred overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-background/70"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Loading..."
          className="w-50 h-32 animate-bounce"
        />

        {/* Loading text */}
        <p className="mt-4 text-brandblue text-lg font-semibold animate-pulse">
          Loading...
        </p>

        {/* Spinner */}
        <div className="mt-4 w-10 h-10 border-4 border-brandblue border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
