import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { Eye, EyeOff } from "lucide-react"; // Eye toggle icons

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
  console.log("Password:", password);
    setMessage(`Login Successful! Welcome, ${email}`);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    setMessage("Redirecting to Google login...");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm space-y-6">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-lg font-semibold text-gray-900">
            Welcome to CareerConnect
          </h1>
          <p className="text-sm text-gray-500">
            Don’t have an account?{" "}
            <a href="/register" className="underline hover:text-gray-800">
              Register
            </a>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field with Eye Toggle */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button type="submit" className=" w-60 mx-auto block ">
            Login
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-gray-300"></div>
          <span className="text-xs text-gray-500">Or</span>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        {/* Google Button */}
        <Button
          type="button"
          onClick={handleGoogleLogin}
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
        >
          <FcGoogle size={20} />
          Continue with Google
        </Button>

        {/* Footer */}
        <p className="text-xs text-center text-gray-500 mt-4">
          By clicking continue, you agree to our{" "}
          <a href="/terms" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>

      {/* ✅ Popup Message */}
      {message && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white px-6 py-4 rounded-lg shadow-lg text-center">
            <p className="text-gray-800">{message}</p>
            <Button
              onClick={() => setMessage("")}
              className="mt-3 w-full"
              variant="outline"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </main>
  );
};

export default LoginPage;
