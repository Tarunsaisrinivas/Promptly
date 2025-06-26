// components/LoadingScreen.jsx
import React from "react";
import Image from "next/image";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="animate-bounce">
        <Image
          src="/assets/logo.png"
          alt="Loading..."
          width={100}
          height={100}
        />
        <span className="text-lg font-bold bg-gradient-to-r from-pink-600 via-orange-400 to-yellow-500 text-transparent bg-clip-text whitespace-nowrap">
          Promptly AI
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
