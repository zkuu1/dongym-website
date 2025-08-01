// app/login/page.tsx
'use client'


import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import HeroImage from "../../images/Hero.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LoginPage() {

  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="min-h-screen relative bg-black flex flex-col">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroImage}
          alt="Gym Background"
          fill
          className="object-cover opacity-50"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
      </div>

      {/* Main Content - Centered at Top */}
      <main className="relative z-10 flex flex-col items-center pt-20 px-4 pb-12 mt-28">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="relative h-48 bg-base_purple">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h1 className="text-4xl font-bold text-white">Welcome</h1>
              <div className="w-16 h-1 bg-white my-3"></div>
              <h2 className="text-2xl font-semibold text-white">Body Builder</h2>
            </div>
          </div>
          
          {/* Form Section */}
          <div className="p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-base_purple mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 border-2 border-base_purple"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-base_purple mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-3 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 border-2 border-base_purple pr-10"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-base_purple"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="h-5 w-5" />
                    ) : (
                      <FaEye className="h-5 w-5" />
                    )}
                  </button>
                </div>
            </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-600 rounded bg-gray-700"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-base_purple">
                    Remember me
                  </label>
                </div>
                <Link href="#" className="text-sm text-base_purple hover:text-base_semi_purple">
                  Forgot password?
                </Link>
              </div>
              
              <button
                type="submit"
                className="w-full bg-base_purple text-white py-3 px-4 rounded-lg font-bold hover:bg-yellow-600 transition-all shadow-lg"
              >
                Login
              </button>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-base_purple"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-base_purple text-white">
                    Or continue with
                  </span>
                </div>
              </div>
              
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 bg-gray-100 text-base_purple py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors border-2 border-base_purple"
              >
                <FaGoogle className="text-base_purple text-xl" />
                <span>Login With Google</span>
              </button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link href="/register" className="text-base_purple font-semibold hover:text-base_semi_purple">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 px-4 text-center text-gray-300 text-sm">
        <p>Copyright © DON GYM FITNESS 2025. All rights reserved.</p>
      </footer>
    </div>
  );
}