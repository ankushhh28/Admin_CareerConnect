import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { LoginFormData } from "../types";
import { apiCall } from "@/common/api";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const loginData = { email: formData.email, password: formData.password };
    e.preventDefault();
    const data = await apiCall({
      path: "/login",
      method: "POST",
      data: loginData,
    });
    if (data.success) {
      router.push("/overview");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <Input
          type="email"
          placeholder="m@example.com"
          value={formData.email}
          onChange={handleChange("email")}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="********"
            value={formData.password}
            onChange={handleChange("password")}
            required
          />
          <Button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            variant="ghost"
            size="icon"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </Button>
        </div>
      </div>

      <Button type="submit" className="w-full mx-auto block">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
