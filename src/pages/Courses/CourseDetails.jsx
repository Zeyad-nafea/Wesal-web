import React, { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Users,
  Star,
  BookOpen,
  Briefcase,
  MonitorPlay,
  CheckCircle,
} from "lucide-react";

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

const workshops = [
  {
    id: "w1",
    title: "React & Modern Frontend Workshop",
    category: "Development",
    duration: "3 Hours",
    date: "May 10, 2025",
  },
  {
    id: "w2",
    title: "Figma UI Workshop",
    category: "Design",
    duration: "2.5 Hours",
    date: "May 15, 2025",
  },
  {
    id: "w3",
    title: "Marketing Analytics Bootcamp",
    category: "Marketing",
    duration: "4 Hours",
    date: "May 20, 2025",
  },
  {
    id: "w4",
    title: "Data Visualization Workshop",
    category: "Data Science",
    duration: "3 Hours",
    date: "May 25, 2025",
  },
];

const internships = [
  {
    id: "i1",
    title: "Frontend Developer Internship",
    category: "Development",
    company: "TechCorp",
    duration: "3 Months",
  },
  {
    id: "i2",
    title: "UI/UX Design Internship",
    category: "Design",
    company: "Creative Studio",
    duration: "2 Months",
  },
  {
    id: "i3",
    title: "Marketing Internship",
    category: "Marketing",
    company: "Brandify",
    duration: "3 Months",
  },
  {
    id: "i4",
    title: "Data Analyst Internship",
    category: "Data Science",
    company: "Insight Labs",
    duration: "3 Months",
  },
];

function CourseDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const courseFromState = location.state?.course;

  const course = useMemo(() => {
    if (courseFromState) return courseFromState;
    return courses.find((item) => item.id === id);
  }, [courseFromState, id]);

  const relatedWorkshops = useMemo(() => {
    if (!course) return [];
    return workshops.filter((item) => item.category === course.category).slice(0, 2);
  }, [course]);

  const relatedInternships = useMemo(() => {
    if (!course) return [];
    return internships.filter((item) => item.category === course.category).slice(0, 2);
  }, [course]);

  if (!course) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-4">
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 max-w-lg w-full text-center">
          <h2 className="text-2xl text-[var(--foreground)] mb-4">
            Course not found
          </h2>
          <button
            onClick={() => navigate("/courses")}
            className="bg-[#C8A85A] text-[#0a0a0a] px-6 py-3 rounded-lg"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate("/courses")}
          className="flex items-center gap-2 text-[var(--foreground)] mb-8 hover:text-[#C8A85A] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Courses
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8">
            <span className="inline-block text-xs px-3 py-1 bg-[#C8A85A]/20 text-[#C8A85A] rounded-full mb-4">
              {course.category}
            </span>

            <h1 className="text-3xl sm:text-5xl text-[var(--foreground)] mb-4">
              {course.title}
            </h1>

            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-[var(--muted-foreground)] mb-6">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C8A85A]" />
                {course.duration}
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#C8A85A]" />
                {course.enrolled.toLocaleString()} students
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#C8A85A]" />
                {course.rating} rating
              </span>
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C8A85A]" />
                {course.lessons} lessons
              </span>
            </div>

            <div className="rounded-xl border border-[#C8A85A]/30 bg-gradient-to-r from-[#C8A85A]/10 to-[#0E3B2E]/10 p-4">
              <p className="text-[#C8A85A] font-medium">
                Instructor: {course.instructor}
              </p>
            </div>
          </div>

          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 h-fit">
            <h3 className="text-2xl text-[var(--foreground)] mb-4">
              Course Overview
            </h3>

            <div className="space-y-4 text-[var(--muted-foreground)] mb-6">
              <div className="flex justify-between">
                <span>Level</span>
                <span className="text-[var(--foreground)]">{course.level}</span>
              </div>
              <div className="flex justify-between">
                <span>Category</span>
                <span className="text-[var(--foreground)]">{course.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Duration</span>
                <span className="text-[var(--foreground)]">{course.duration}</span>
              </div>
              <div className="flex justify-between">
                <span>Lessons</span>
                <span className="text-[var(--foreground)]">{course.lessons}</span>
              </div>
            </div>

            <button
              onClick={() => navigate(`/enroll/${course.id}`, { state: { course } })}
              className="w-full bg-[#C8A85A] text-[#0a0a0a] py-3 rounded-lg hover:bg-[#C8A85A]/90 transition-all font-medium"
            >
              Enroll Now
            </button>
          </div>
        </div>

        {/* What you'll learn */}
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 mb-8">
          <h2 className="text-2xl text-[var(--foreground)] mb-6">
            What you'll learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.learn.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-[var(--muted-foreground)]"
              >
                <CheckCircle className="w-5 h-5 text-[#C8A85A]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Workshops + Internships */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <MonitorPlay className="w-5 h-5 text-[#C8A85A]" />
              <h2 className="text-2xl text-[var(--foreground)]">
                Related Workshops
              </h2>
            </div>

            <div className="space-y-4">
              {relatedWorkshops.map((workshop) => (
                <div
                  key={workshop.id}
                  className="rounded-xl border border-[var(--border)] bg-[var(--secondary)] p-4"
                >
                  <h3 className="text-[var(--foreground)] mb-2">
                    {workshop.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {workshop.date} • {workshop.duration}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-5 h-5 text-[#C8A85A]" />
              <h2 className="text-2xl text-[var(--foreground)]">
                Related Internships
              </h2>
            </div>

            <div className="space-y-4">
              {relatedInternships.map((internship) => (
                <div
                  key={internship.id}
                  className="rounded-xl border border-[var(--border)] bg-[var(--secondary)] p-4"
                >
                  <h3 className="text-[var(--foreground)] mb-2">
                    {internship.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {internship.company} • {internship.duration}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;