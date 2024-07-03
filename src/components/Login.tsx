// src/components/login/LoginComponent.tsx
"use client";

import React from "react";

const LoginComponent = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <div>
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
        <div className="text-center">
          <a href="/src/components/SignUp.tsx" className="text-blue-600 hover:underline">
            Don't have an account? Sign up
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
