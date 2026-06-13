import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Shield,
  Users,
  User,
  Video,
  Briefcase,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Your data is protected with enterprise-grade security",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals and educators",
  },
  {
    icon: Video,
    title: "Online Workshops",
    description: "Interactive sessions and live learning experiences",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description: "Internships and job placement assistance",
  },
];

const countries = [
  { code: "+20", flag: "🇪🇬", name: "Egypt" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "+973", flag: "🇧🇭", name: "Bahrain" },
  { code: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "+962", flag: "🇯🇴", name: "Jordan" },
  { code: "+961", flag: "🇱🇧", name: "Lebanon" },
  { code: "+963", flag: "🇸🇾", name: "Syria" },
  { code: "+964", flag: "🇮🇶", name: "Iraq" },
  { code: "+212", flag: "🇲🇦", name: "Morocco" },
  { code: "+216", flag: "🇹🇳", name: "Tunisia" },
  { code: "+213", flag: "🇩🇿", name: "Algeria" },
  { code: "+218", flag: "🇱🇾", name: "Libya" },
  { code: "+249", flag: "🇸🇩", name: "Sudan" },
  { code: "+1", flag: "🇺🇸", name: "USA" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+90", flag: "🇹🇷", name: "Turkey" },
];

function Register() {
  const navigate = useNavigate();
  const [activeTab] = useState("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [formData, setFormData] = useState({
    role: "",
    fullName: "",
    countryCode: "+20",
    phone: "",
    email: "",
    password: "",
    courseName: "",
    confirmPassword: "",
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "password" || name === "confirmPassword") {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    console.log("Register Data:", formData);
    navigate("/courses");
  };
   const nameLabel = formData.role === "company" ? "Company Name" : "Full Name";
  const namePlaceholder =
    formData.role === "company" ? "e.g. Acme Corp" : "John Doe";

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-light-background dark:bg-dark-background">
      {/* ===== Left Panel ===== */}
      <div className="lg:w-1/2 relative bg-gradient-to-br from-light-darkbg via-[#1a4d3d] to-light-darkbg p-8 lg:p-12 xl:p-16 flex flex-col justify-between min-h-[400px] lg:min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10">
          <div className="flex justify-center mb-8">
            <img src="/Logo.png" alt="WESAL" className="h-32 w-auto" />
          </div>
          <div className="max-w-lg">
            <h1 className="text-4xl xl:text-5xl font-bold text-light-cream mb-4 leading-tight">
              Start Your Learning Journey
            </h1>
            <p className="text-lg text-light-cream/80 mb-12">
              Join thousands of learners on WESAL
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-light-ring/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-light-ring/30 transition-colors">
                    <feature.icon className="w-6 h-6 text-light-ring" />
                  </div>
                  <div>
                    <h3 className="text-light-cream font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-light-cream/70 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== Right Panel ===== */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-light-background dark:bg-dark-background">
        <div className="w-full max-w-md">
          {/* ===== Tab Switcher ===== */}
          <div className="flex gap-1 p-1 bg-light-card dark:bg-dark-card rounded-xl mb-8 border border-light-border dark:border-dark-border">
            <button
              type="button"
              onClick={() => navigate("/Login")}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all text-sm ${
                activeTab === "signin"
                  ? "bg-light-ring text-white shadow-sm"
                  : "text-light-muted-foreground dark:text-dark-muted-foreground hover:text-light-foreground dark:hover:text-dark-foreground"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => navigate("/Register")}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all text-sm ${
                activeTab === "signup"
                  ? "bg-light-ring text-white shadow-sm"
                  : "text-light-muted-foreground dark:text-dark-muted-foreground hover:text-light-foreground dark:hover:text-dark-foreground"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* ===== Heading ===== */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-light-foreground dark:text-dark-foreground mb-2">
              Create Account
            </h2>
            <p className="text-light-muted-foreground dark:text-dark-muted-foreground">
              Join thousands of learners on WESAL
            </p>
          </div>

          {/* ===== Form ===== */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-light-foreground dark:text-dark-foreground mb-2"
              >
                Role
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <User className="h-5 w-5 text-light-muted-foreground dark:text-dark-muted-foreground" />
                </div>
                {/* ✅ ضفنا onChange وخلينا القيم lowercase */}
                <select
                  name="role"
                  id="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5
                    bg-light-input dark:bg-dark-input
                    text-light-foreground dark:text-dark-foreground
                    rounded-xl border border-light-border dark:border-dark-border
                    focus:outline-none focus:ring-2 focus:ring-light-ring focus:border-transparent
                    transition-all"
                    required
                >
                  <option value="">Choose your role</option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-light-foreground dark:text-dark-foreground mb-2"
              >
            
                {nameLabel}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <User className="h-5 w-5 text-light-muted-foreground dark:text-dark-muted-foreground" />
                </div>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={namePlaceholder} 
                  required
                  className="w-full pl-12 pr-4 py-3.5
                    bg-light-input dark:bg-dark-input
                    text-light-foreground dark:text-dark-foreground
                    rounded-xl border border-light-border dark:border-dark-border
                    focus:outline-none focus:ring-2 focus:ring-light-ring focus:border-transparent
                    transition-all
                    placeholder:text-light-muted-foreground dark:placeholder:text-dark-muted-foreground"
                />
              </div>
            </div>

            {formData.role === "teacher" && (
              <div>
                <label
                  htmlFor="courseName"
                  className="block text-sm font-medium text-light-foreground dark:text-dark-foreground mb-2"
                >
                  Course Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <Briefcase className="h-5 w-5 text-light-muted-foreground dark:text-dark-muted-foreground" />
                  </div>
                  <input
                    id="courseName"
                    type="text"
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleChange}
                    placeholder="e.g. Web Development Bootcamp"
                    required
                    className="w-full pl-12 pr-4 py-3.5
                      bg-light-input dark:bg-dark-input
                      text-light-foreground dark:text-dark-foreground
                      rounded-xl border border-light-border dark:border-dark-border
                      focus:outline-none focus:ring-2 focus:ring-light-ring focus:border-transparent
                      transition-all
                      placeholder:text-light-muted-foreground dark:placeholder:text-dark-muted-foreground"
                  />
                </div>
              </div>
            )}

           

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-light-foreground dark:text-dark-foreground mb-2"
              >
                Phone Number
              </label>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-24 sm:w-32 pl-2 pr-1 py-3.5
                    bg-light-input dark:bg-dark-input
                    text-light-foreground dark:text-dark-foreground
                    rounded-xl border border-light-border dark:border-dark-border
                    focus:outline-none focus:ring-2 focus:ring-light-ring focus:border-transparent
                    transition-all cursor-pointer text-sm
                    min-w-0 shrink-0"
                >
                  {countries.map((c) => (
                    <option key={c.code + c.name} value={c.code}>
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="1012345678"
                  required
                  className="flex-1 min-w-0 pl-4 pr-4 py-3.5
                    bg-light-input dark:bg-dark-input
                    text-light-foreground dark:text-dark-foreground
                    rounded-xl border border-light-border dark:border-dark-border
                    focus:outline-none focus:ring-2 focus:ring-light-ring focus:border-transparent
                    transition-all
                    placeholder:text-light-muted-foreground dark:placeholder:text-dark-muted-foreground"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="signup-email"
                className="block text-sm font-medium text-light-foreground dark:text-dark-foreground mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <Mail className="h-5 w-5 text-light-muted-foreground dark:text-dark-muted-foreground" />
                </div>
                <input
                  id="signup-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full pl-12 pr-4 py-3.5
                    bg-light-input dark:bg-dark-input
                    text-light-foreground dark:text-dark-foreground
                    rounded-xl border border-light-border dark:border-dark-border
                    focus:outline-none focus:ring-2 focus:ring-light-ring focus:border-transparent
                    transition-all
                    placeholder:text-light-muted-foreground dark:placeholder:text-dark-muted-foreground"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="signup-password"
                className="block text-sm font-medium text-light-foreground dark:text-dark-foreground mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <Lock className="h-5 w-5 text-light-muted-foreground dark:text-dark-muted-foreground" />
                </div>
                <input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full pl-12 pr-12 py-3.5
                    bg-light-input dark:bg-dark-input
                    text-light-foreground dark:text-dark-foreground
                    rounded-xl border border-light-border dark:border-dark-border
                    focus:outline-none focus:ring-2 focus:ring-light-ring focus:border-transparent
                    transition-all
                    placeholder:text-light-muted-foreground dark:placeholder:text-dark-muted-foreground"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-light-muted-foreground dark:text-dark-muted-foreground hover:text-light-foreground dark:hover:text-dark-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-light-foreground dark:text-dark-foreground mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <Lock className="h-5 w-5 text-light-muted-foreground dark:text-dark-muted-foreground" />
                </div>
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className={`w-full pl-12 pr-12 py-3.5
                    bg-light-input dark:bg-dark-input
                    text-light-foreground dark:text-dark-foreground
                    rounded-xl border transition-all
                    focus:outline-none focus:ring-2 focus:ring-light-ring focus:border-transparent
                    placeholder:text-light-muted-foreground dark:placeholder:text-dark-muted-foreground
                    ${
                      passwordError
                        ? "border-red-500 focus:ring-red-500"
                        : "border-light-border dark:border-dark-border"
                    }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-light-muted-foreground dark:text-dark-muted-foreground hover:text-light-foreground dark:hover:text-dark-foreground transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {passwordError && (
                <p className="mt-2 text-sm text-red-500">{passwordError}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-light-ring hover:bg-light-ring/90 text-white font-semibold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-light-ring focus:ring-offset-2"
            >
              Create Account
            </button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--border)]"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-wider">
                <span className="px-4 bg-[var(--background)] text-[var(--muted-foreground)] font-medium">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-light-card dark:bg-dark-card hover:bg-light-secondary dark:hover:bg-dark-secondary border border-light-border dark:border-dark-border rounded-xl transition-all"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-sm font-medium text-light-foreground dark:text-dark-foreground">
                  Google
                </span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-light-card dark:bg-dark-card hover:bg-light-secondary dark:hover:bg-dark-secondary border border-light-border dark:border-dark-border rounded-xl transition-all"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-sm font-medium text-light-foreground dark:text-dark-foreground">
                  Facebook
                </span>
              </button>
            </div>

            <p className="text-center text-sm text-light-muted-foreground dark:text-dark-muted-foreground">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/Login")}
                className="font-medium text-light-ring hover:underline"
              >
                Sign In
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;