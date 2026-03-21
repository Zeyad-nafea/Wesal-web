import React, { useMemo, useRef, useState } from "react";
import { Search, Clock, Users, Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Courses() {
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const coursesSectionRef = useRef(null);
  const navigate = useNavigate();

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
      rating: 4.8,
      lessons: 24,
      instructor: "Sarah Ahmed",
      learn: [
        "SEO fundamentals",
        "Social media marketing",
        "Content strategy",
        "Campaign analytics",
      ],
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
      rating: 4.9,
      lessons: 32,
      instructor: "Mohamed Ali",
      learn: [
        "Build React interfaces",
        "Create REST APIs",
        "Connect databases",
        "Deploy full stack apps",
      ],
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
      rating: 4.7,
      lessons: 28,
      instructor: "Nour Hassan",
      learn: [
        "Python for analysis",
        "Data visualization",
        "Statistics basics",
        "Intro to machine learning",
      ],
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
      rating: 4.8,
      lessons: 20,
      instructor: "Mariam Adel",
      learn: [
        "Design thinking",
        "Wireframing",
        "Prototyping in Figma",
        "User research basics",
      ],
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
      rating: 4.6,
      lessons: 22,
      instructor: "Omar Tarek",
      learn: [
        "Advanced JavaScript",
        "Async patterns",
        "Modern syntax",
        "Code architecture",
      ],
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
      rating: 4.5,
      lessons: 18,
      instructor: "Laila Mostafa",
      learn: [
        "Business KPIs",
        "Data-driven decisions",
        "Strategy basics",
        "Reporting insights",
      ],
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
      rating: 4.7,
      lessons: 26,
      instructor: "Ahmed Samir",
      learn: [
        "React Native basics",
        "Navigation",
        "Mobile UI",
        "Publishing workflow",
      ],
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
      rating: 4.6,
      lessons: 21,
      instructor: "Youssef Khaled",
      learn: [
        "Cloud fundamentals",
        "Deployment basics",
        "Architecture concepts",
        "AWS and Azure overview",
      ],
    },
  ];

  const levels = ["all", "Beginner", "Intermediate", "Advanced"];
  const categories = [
    "all",
    "Development",
    "Design",
    "Marketing",
    "Data Science",
    "Business",
    "Technology",
  ];

  const popularCourses = useMemo(() => {
    return [...courses].sort((a, b) => b.enrolled - a.enrolled).slice(0, 3);
  }, []);

  const scrollToCourses = () => {
    coursesSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleOpenCourse = (course) => {
    navigate(`/courses/${course.id}`, {
      state: { course },
    });
  };

  const filteredCourses = courses.filter((course) => {
    const levelMatch =
      selectedLevel === "all" || course.level === selectedLevel;

    const categoryMatch =
      selectedCategory === "all" || course.category === selectedCategory;

    const searchMatch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.level.toLowerCase().includes(searchTerm.toLowerCase());

    return levelMatch && categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#0E3B2E]/10 via-transparent to-[#C8A85A]/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[var(--foreground)] mb-6">
              Upgrade Your Skills with Expert-Led Courses
            </h1>

            <p className="text-lg sm:text-xl text-[var(--muted-foreground)] max-w-4xl mx-auto leading-relaxed mb-8">
              Explore a wide range of professional courses designed to help you
              learn new skills, advance your career, and achieve your goals.
              From development and design to marketing and data science, start
              learning today with industry-relevant content.
            </p>

            <div className="inline-block bg-gradient-to-r from-[#C8A85A]/20 to-[#0E3B2E]/20 border border-[#C8A85A]/30 rounded-full px-6 py-3 mb-8">
              <p className="text-[#C8A85A]">
                🔥 Special Learning Offer – Save up to 30% on selected courses
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={scrollToCourses}
                className="bg-[#C8A85A] text-[#0a0a0a] px-8 py-3 rounded-lg hover:bg-[#C8A85A]/90 transition-all duration-300"
              >
                Browse Courses
              </button>

              <button
                onClick={scrollToCourses}
                className="bg-[var(--card)] text-[var(--foreground)] px-8 py-3 rounded-lg border border-[var(--border)] hover:bg-[var(--secondary)] transition-all duration-300"
              >
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Most Popular */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10">
        <div className="flex items-center gap-3 mb-6">
          <Flame className="w-6 h-6 text-[#C8A85A]" />
          <h2 className="text-2xl sm:text-3xl text-[var(--foreground)]">
            Most Popular Courses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => handleOpenCourse(course)}
              className="group bg-[var(--card)] rounded-xl border border-[var(--border)] p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A85A]/40 hover:shadow-[0_20px_50px_rgba(200,168,90,0.12)]"
            >
              <span className="inline-block text-xs px-3 py-1 bg-[#C8A85A]/20 text-[#C8A85A] rounded-full mb-4">
                {course.category}
              </span>
              <h3 className="text-xl text-[var(--foreground)] mb-3 group-hover:text-[#C8A85A] transition-colors">
                {course.title}
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-4 line-clamp-2">
                {course.description}
              </p>
              <div className="flex items-center justify-between text-sm text-[var(--muted-foreground)]">
                <span>{course.rating} ★</span>
                <span>{course.enrolled.toLocaleString()} enrolled</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div
        ref={coursesSectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12"
      >
        <div className="mb-8">
          <div className="flex items-center gap-4 bg-[var(--card)] rounded-xl px-6 py-4 border border-[var(--border)]">
            <Search className="w-6 h-6 text-[var(--muted-foreground)]" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent outline-none text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] text-lg"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-[var(--muted-foreground)]">
              Level:
            </span>
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                  selectedLevel === level
                    ? "bg-[#C8A85A] text-[#0a0a0a]"
                    : "bg-[var(--card)] text-[var(--muted-foreground)] hover:bg-[var(--secondary)] border border-[var(--border)]"
                }`}
              >
                {level === "all" ? "All Levels" : level}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-[var(--muted-foreground)]">
              Category:
            </span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#C8A85A] text-[#0a0a0a]"
                    : "bg-[var(--card)] text-[var(--muted-foreground)] hover:bg-[var(--secondary)] border border-[var(--border)]"
                }`}
              >
                {category === "all" ? "All Categories" : category}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-[var(--muted-foreground)]">
            {filteredCourses.length}{" "}
            {filteredCourses.length === 1 ? "course" : "courses"} found
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => handleOpenCourse(course)}
              className="group bg-[var(--card)] rounded-xl overflow-hidden cursor-pointer border border-[var(--border)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-[#C8A85A]/40 hover:shadow-[0_20px_50px_rgba(200,168,90,0.12)] hover:bg-[var(--secondary)] h-full"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-[#C8A85A]/20 text-[#C8A85A] rounded-full transition-all duration-300 group-hover:bg-[#C8A85A]/25">
                    {course.category}
                  </span>

                  <span className="text-xs px-3 py-1 bg-[var(--secondary)] text-[var(--muted-foreground)] rounded-full border border-[var(--border)] transition-all duration-300 group-hover:border-[#C8A85A]/30">
                    {course.level}
                  </span>
                </div>

                <h3 className="text-xl text-[var(--foreground)] mb-3 leading-snug transition-colors duration-300 group-hover:text-[#C8A85A] min-h-[64px]">
                  {course.title}
                </h3>

                <p className="text-sm text-[var(--muted-foreground)] mb-6 leading-relaxed line-clamp-3 min-h-[78px] transition-colors duration-300 group-hover:text-[var(--foreground)]/85">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-sm text-[var(--muted-foreground)] mb-6">
                  <span className="flex items-center gap-1 transition-colors duration-300 group-hover:text-[var(--foreground)]">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </span>

                  <span className="flex items-center gap-1 transition-colors duration-300 group-hover:text-[var(--foreground)]">
                    <Users className="w-4 h-4" />
                    {course.enrolled.toLocaleString()} enrolled
                  </span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenCourse(course);
                  }}
                  className="mt-auto w-full bg-[#0E3B2E] text-[#E8E2D6] py-3 rounded-lg transition-all duration-300 group-hover:bg-[#146147] group-hover:shadow-[0_10px_30px_rgba(14,59,46,0.35)]"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;