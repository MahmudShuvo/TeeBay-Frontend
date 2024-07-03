// src/components/signup/SignupComponent.tsx
"use client";

import React from "react";

const SignupComponent = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="w-full max-w-lg p-8 space-y-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <div>
          <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your last name"
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your address"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
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
        <div>
          <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirm your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Register
        </button>
        <div className="text-center">
          <a href="/login" className="text-blue-600 hover:underline">
            Already have an account? Sign in
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignupComponent;
