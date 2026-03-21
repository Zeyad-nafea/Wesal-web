import React, { useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Users, Clock, ArrowLeft, CheckCircle } from "lucide-react";

const courses = [
  {
    id: "1",
    title: "Digital Marketing Mastery 2024",
    description:
      "Master digital marketing strategies, SEO, social media, and analytics to grow your online presence.",
    duration: "8 Weeks",
    level: "Beginner",
    category: "Marketing",
    enrolled: 2340,
  },
  {
    id: "2",
    title: "Full Stack Web Development",
    description:
      "Learn to build modern web applications from front-end to back-end with React, Node.js, and databases.",
    duration: "12 Weeks",
    level: "Intermediate",
    category: "Development",
    enrolled: 1890,
  },
  {
    id: "3",
    title: "Data Science Fundamentals",
    description:
      "Dive into data analysis, visualization, and machine learning with Python and popular libraries.",
    duration: "10 Weeks",
    level: "Intermediate",
    category: "Data Science",
    enrolled: 1560,
  },
  {
    id: "4",
    title: "UI/UX Design Principles",
    description:
      "Create beautiful and user-friendly interfaces. Learn design thinking, prototyping, and user research.",
    duration: "6 Weeks",
    level: "Beginner",
    category: "Design",
    enrolled: 2100,
  },
  {
    id: "5",
    title: "Advanced JavaScript Programming",
    description:
      "Deep dive into JavaScript ES6+, async programming, design patterns, and modern frameworks.",
    duration: "8 Weeks",
    level: "Advanced",
    category: "Development",
    enrolled: 980,
  },
  {
    id: "6",
    title: "Business Analytics & Strategy",
    description:
      "Learn to analyze business data, create strategies, and make data-driven decisions.",
    duration: "7 Weeks",
    level: "Intermediate",
    category: "Business",
    enrolled: 1200,
  },
  {
    id: "7",
    title: "Mobile App Development with React Native",
    description:
      "Build cross-platform mobile apps for iOS and Android using React Native.",
    duration: "10 Weeks",
    level: "Intermediate",
    category: "Development",
    enrolled: 1450,
  },
  {
    id: "8",
    title: "Cloud Computing Essentials",
    description:
      "Master AWS, Azure, and cloud architecture principles for modern applications.",
    duration: "9 Weeks",
    level: "Advanced",
    category: "Technology",
    enrolled: 890,
  },
];

function Enroll() {
  const navigate = useNavigate();
  const location = useLocation();
  const { courseId } = useParams();

  const courseFromState = location.state?.course;

  const course = useMemo(() => {
    if (courseFromState) return courseFromState;
    return courses.find((item) => item.id === courseId);
  }, [courseFromState, courseId]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Enrollment Data:", {
      courseId,
      course,
      ...formData,
    });

    setSubmitted(true);
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-4">
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 max-w-lg w-full text-center">
          <h2 className="text-2xl text-[var(--foreground)] mb-4">
            Course data not found
          </h2>
          <p className="text-[var(--muted-foreground)] mb-6">
            Please go back to the courses page and choose a course again.
          </p>
          <button
            onClick={() => navigate("/courses")}
            className="bg-[#C8A85A] text-[#0a0a0a] px-6 py-3 rounded-lg hover:bg-[#C8A85A]/90 transition-all"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-4">
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 max-w-xl w-full text-center">
          <CheckCircle className="w-16 h-16 text-[#C8A85A] mx-auto mb-4" />
          <h1 className="text-3xl text-[var(--foreground)] mb-4">
            Enrollment Submitted Successfully
          </h1>
          <p className="text-[var(--muted-foreground)] mb-2">
            Thank you,{" "}
            <span className="text-[var(--foreground)]">{formData.fullName}</span>
          </p>
          <p className="text-[var(--muted-foreground)] mb-6">
            Your request to enroll in{" "}
            <span className="text-[var(--foreground)]">{course.title}</span> has
            been received.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/courses")}
              className="bg-[#C8A85A] text-[#0a0a0a] px-6 py-3 rounded-lg hover:bg-[#C8A85A]/90 transition-all"
            >
              Back to Courses
            </button>

            <button
              onClick={() => setSubmitted(false)}
              className="bg-[var(--card)] text-[var(--foreground)] px-6 py-3 rounded-lg border border-[var(--border)] hover:bg-[var(--secondary)] transition-all"
            >
              Edit Data
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate("/courses")}
          className="flex items-center gap-2 text-[var(--foreground)] mb-8 hover:text-[#C8A85A] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Courses
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 h-fit">
            <span className="inline-block text-xs px-3 py-1 bg-[#C8A85A]/20 text-[#C8A85A] rounded-full mb-4">
              {course.category}
            </span>

            <h1 className="text-3xl sm:text-4xl text-[var(--foreground)] mb-4">
              {course.title}
            </h1>

            <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
              {course.description}
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                <Clock className="w-5 h-5 text-[#C8A85A]" />
                <span>{course.duration}</span>
              </div>

              <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                <Users className="w-5 h-5 text-[#C8A85A]" />
                <span>{course.enrolled.toLocaleString()} students enrolled</span>
              </div>

              <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                <CheckCircle className="w-5 h-5 text-[#C8A85A]" />
                <span>{course.level} level</span>
              </div>
            </div>

            <div className="rounded-xl border border-[#C8A85A]/30 bg-gradient-to-r from-[#C8A85A]/10 to-[#0E3B2E]/10 p-4">
              <p className="text-[#C8A85A] font-medium">
                🔥 Limited seats available. Complete your enrollment now.
              </p>
            </div>
          </div>

          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8">
            <h2 className="text-2xl text-[var(--foreground)] mb-2">
              Enroll in this course
            </h2>
            <p className="text-[var(--muted-foreground)] mb-6">
              Fill in your details and we’ll contact you with the next steps.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[var(--foreground)] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--foreground)] outline-none focus:border-[#C8A85A]"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-[var(--foreground)] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--foreground)] outline-none focus:border-[#C8A85A]"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-[var(--foreground)] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--foreground)] outline-none focus:border-[#C8A85A]"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-[var(--foreground)] mb-2">
                  Education Level
                </label>
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--foreground)] outline-none focus:border-[#C8A85A]"
                >
                  <option value="">Select your education level</option>
                  <option value="High School">High School</option>
                  <option value="University Student">University Student</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Self-Learner">Self-Learner</option>
                </select>
              </div>

              <div>
                <label className="block text-[var(--foreground)] mb-2">
                  Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--foreground)] outline-none focus:border-[#C8A85A] resize-none"
                  placeholder="Write any notes or questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C8A85A] text-[#0a0a0a] py-3 rounded-lg hover:bg-[#C8A85A]/90 transition-all font-medium"
              >
                Confirm Enrollment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enroll;