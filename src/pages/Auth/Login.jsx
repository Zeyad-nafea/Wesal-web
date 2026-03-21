import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    // مؤقتًا لحد ما تربطه بباك اند
    navigate("/courses");
  };

  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-16">
      <div className="max-w-md mx-auto">
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          <div className="text-center mb-8">
            <h1 className="text-3xl text-[var(--foreground)] mb-3">Welcome Back</h1>
            <p className="text-[var(--muted-foreground)]">
              Log in to continue your learning journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[var(--foreground)] mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-[var(--muted-foreground)] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl pl-12 pr-4 py-3 text-[var(--foreground)] outline-none focus:border-[#C8A85A] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[var(--foreground)] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 text-[var(--muted-foreground)] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl pl-12 pr-12 py-3 text-[var(--foreground)] outline-none focus:border-[#C8A85A] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-[var(--muted-foreground)] cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="accent-[#C8A85A]"
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-[#C8A85A] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-[#C8A85A] text-[#0a0a0a] py-3 rounded-xl font-medium hover:bg-[#C8A85A]/90 transition-all"
            >
              Log In
            </button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-[var(--border)]" />
            <span className="text-sm text-[var(--muted-foreground)]">OR CONTINUE WITH</span>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="border border-[var(--border)] bg-[var(--background)] rounded-xl py-3 text-[var(--foreground)] hover:bg-[var(--secondary)] transition-all">
              Google
            </button>
            <button className="border border-[var(--border)] bg-[var(--background)] rounded-xl py-3 text-[var(--foreground)] hover:bg-[var(--secondary)] transition-all">
              Facebook
            </button>
          </div>

          <p className="text-center text-[var(--muted-foreground)] mt-6">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-[#C8A85A] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;