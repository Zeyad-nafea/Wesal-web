import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  BookOpen,
  Wrench,
  Briefcase,
  Clock,
  Signal,
  ArrowRight,
} from "lucide-react";
const categories = [
  {
    id: "courses",
    title: "Courses",
    label: "ACADEMIC",
    icon: <BookOpen className="w-10 h-10" />,
    description:
      "Explore a wide range of academic and professional courses designed to enhance your skills and knowledge base.",
    count: "120+ Available",
    link: "/courses",
    linkText: "Browse Courses",
  },
  {
    id: "workshops",
    title: "Workshops",
    label: "PRACTICAL",
    icon: <Wrench className="w-10 h-10" />,
    description:
      "Join hands-on workshops led by industry experts. Learn by doing and gain practical experience in real-time.",
    count: "45 Upcoming",
    link: "/workshop",
    linkText: "View Schedule",
  },
  {
    id: "internships",
    title: "Internships",
    label: "CAREER",
    icon: <Briefcase className="w-10 h-10" />,
    description:
      "Kickstart your career with internships at top companies. Gain valuable work experience and build your network.",
    count: "80+ Openings",
    link: "/internship",
    linkText: "Find Internships",
  },
];

const trendingOpportunities = [
  {
    id: "1",
    title: "Digital Marketing Mastery 2024",
    duration: "8 Weeks",
    level: "Beginner",
    category: "Course",
  },
  {
    id: "2",
    title: "UX/UI Design Thinking Sprint",
    duration: "Oct 25",
    level: "Urban",
    category: "Workshop",
  },
  {
    id: "3",
    title: "Junior Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    category: "Internship",
  },
  {
    id: "4",
    title: "Data Science Fundamentals",
    duration: "12 Weeks",
    level: "Intermediate",
    category: "Course",
  },
];

function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    const q = query.toLowerCase();
    if (q.includes("course")) {
      navigate("/courses");
    } else if (q.includes("workshop")) {
      navigate("/workshop");
    } else if (q.includes("intern")) {
      navigate("/internship");
    } else {
      navigate(`/courses?search=${encodeURIComponent(query)}`);
    }
  };
  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-light-hero to-light-hero-end dark:bg-gradient-to-b dark:from-dark-hero dark:to-dark-hero-end p-7 pb-32 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-white leading-tight">
              Connect, Learn, and{" "}
              <span className="text-light-accent">Grow</span> With WESAL
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-light-cream">
              Your gateway to premium courses, expert workshops, and
              career-launching internships.
            </p>
          </div>
          {/* search bar*/}
          <div className="max-w-3xl mx-auto">
            <form
              onSubmit={handleSearch}
              className="flex flex-col sm:flex-row items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20"
            >
              <div className="flex items-center gap-3 w-full">
                <Search className="w-6 h-6 text-white/70 shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for courses, workshops, or internships..."
                  className="flex-1 bg-transparent outline-none text-white placeholder:text-white/60 text-lg w-full"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-light-ring rounded-xl text-light-accent-foreground hover:bg-light-accent/90 transition-colors font-medium whitespace-nowrap"
              >
                Find Out
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-light-background dark:bg-dark-background py-16 relative z-10 -mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-light-card dark:bg-dark-card rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all border dark:border-dark-border border-light-border"
              >
                <div className="bg-light-secondary dark:bg-dark-secondary py-12 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-light-accent/50 text-light-accent flex items-center justify-center">
                    {category.icon}
                  </div>
                </div>
                <div className="p-6">
                  <p className="test-xs text-light-accent mb-2 tracking-wider">
                    {category.label}
                  </p>
                  <h3 className="text-2xl text-light-foreground dark:text-dark-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-sm text-light-muted-foreground dark:text-dark-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-light-muted-foreground dark:text-dark-muted-foreground">
                      <Signal className="w-4 h-4" />
                      <span>{category.count}</span>
                    </div>
                    <Link
                      to={category.link}
                      className="flex items-center gap-2 hover:gap-3 transition-all text-light-accent"
                    >
                      <span>{category.linkText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-light-background dark:bg-dark-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl text-light-foreground dark:text-dark-foreground">
              Trending Opportunities
            </h2>
            <Link
              to="/courses"
              className="flex items-center gap-2 text-light-accent hover:gap-3 transition-all"
            >
              <span>View ALL</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingOpportunities.map((item) => (
              <div key={item.id} className="bg-light-card dark:bg-dark-card rounded-xl p-6 hover:bg-light-secondary dark:hover:bg-dark-secondary transition-colors cursor-pointer border border-light-border dark:border-dark-border">
                <span className="inline-block text-xs px-3 py-1 rounded-xl bg-light-accent/20 text-light-accent">{item.category}</span>
                <h4 className="text-light-foreground dark:text-dark-foreground mb-4 mt-4 leading-snug">{item.title}</h4>
                <div className="flex flex-wrap gap-2 text-light-muted-foreground dark:text-dark-muted-foreground ">
                  {item.duration &&(
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.duration}
                    </span>
                  )}
                  {item.level && (
                    <span className="flex items-center gap-1">
                      <Signal className="w-4 h-4" />
                      {item.level}
                    </span>
                  )}
                  {item.location && <span>{item.location}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       <div className="py-10 dark:bg-dark-background bg-light-background" />
    </div>
  );
}

export default Home;
