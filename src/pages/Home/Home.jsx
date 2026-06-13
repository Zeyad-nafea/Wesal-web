import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as motion from "motion/react-client";
import { useTranslation } from "react-i18next";
import {
  Search,
  BookOpen,
  Wrench,
  Briefcase,
  Clock,
  Signal,
  ArrowRight,
} from "lucide-react";
import { Button } from "@material-tailwind/react";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();
  const categories = [
    {
      id: "courses",
      title: t("cards1_title"),
      label: t("cards1"),
      icon: <BookOpen className="w-10 h-10" />,
      description: t("cards1_content"),
      count: t("cards1_no"),
      link: "/courses",
      linkText: t("cards1_button"),
    },
    {
      id: "workshops",
      title: t("cards2_title"),
      label: t("cards2"),
      icon: <Wrench className="w-10 h-10" />,
      description: t("cards2_content"),
      count: t("cards2_no"),
      link: "/workshop",
      linkText: t("cards2_button"),
    },
    {
      id: "internships",
      title: t("cards3_title"),
      label: t("cards3"),
      icon: <Briefcase className="w-10 h-10" />,
      description:
        t("cards3_content"),
      count: t("cards3_no"),
      link: "/internship",
      linkText: t("cards3_button"),
    },
  ];
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
  const trendingOpportunities = [
  {
    id: "1",
    title: t("cards4_title"),
    duration: t("cards4_no"),
    level: t("cards4_level"),
    category: t("cards4"),
  },
  {
    id: "2",
    title: t("cards5_title"),
    duration: t("cards5_no"),
    level: t("cards5_level"),
    category: t("cards5"),
  },
  {
    id: "3",
    title: t("cards6_title"),
    company: "TechCorp",
    location: t("cards6_level"),
    category: t("cards6"),
  },
  {
    id: "4",
    title: t("cards7_title"),
    duration:t("cards7_no"),
    level: t("cards7_level"),
    category: t("cards7"),
  },
];
  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-light-hero to-light-hero-end dark:bg-gradient-to-b dark:from-dark-hero dark:to-dark-hero-end p-7 pb-32 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            animate="visible"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-white leading-tight">
              {t("hero")}{" "}
              <span className="text-light-accent">{t("hero_high")}</span>{t("hero2")}
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-light-cream">
              {t("subtitle")}
            </p>
          </motion.div>
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
                  placeholder={t("search")}
                  className="flex-1 bg-transparent outline-none text-white placeholder:text-white/60 text-lg w-full"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-light-ring rounded-xl text-light-accent-foreground hover:bg-light-accent/90 transition-colors font-medium whitespace-nowrap"
              >
                {t("search_button")}
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-light-background dark:bg-dark-background py-16 relative z-10 -mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            animate="visible"
          >
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
                      <span>{category.linkText}{t("Arrow")}</span>
                      {/* <ArrowRight className="w-4 h-4" /> */}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="bg-light-background dark:bg-dark-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl text-light-foreground dark:text-dark-foreground">
              {t("Trending Opportunities")}
            </h2>
            <Link
              to="/courses"
              className="flex items-center gap-2 text-light-accent hover:gap-3 transition-all"
            >
              <span>{t("view")}{t("Arrow")}</span>
              {/* <ArrowRight className="w-5 h-5" /> */}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingOpportunities.map((item) => (
              <div
                key={item.id}
                className="bg-light-card dark:bg-dark-card rounded-xl p-6 hover:bg-light-secondary dark:hover:bg-dark-secondary transition-colors cursor-pointer border border-light-border dark:border-dark-border"
              >
                <span className="inline-block text-xs px-3 py-1 rounded-xl bg-light-accent/20 text-light-accent">
                  {item.category}
                </span>
                <h4 className="text-light-foreground dark:text-dark-foreground mb-4 mt-4 leading-snug">
                  {item.title}
                </h4>
                <div className="flex flex-wrap gap-2 text-light-muted-foreground dark:text-dark-muted-foreground ">
                  {item.duration && (
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
      <section className="py-20 bg-light-background dark:bg-dark-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-b from-light-hero to-light-hero-end dark:bg-gradient-to-b dark:from-dark-hero dark:to-dark-hero-end p-12 rounded-xl text-center">
            <h2 className="text-3xl sm:text-4xl text-light-secondary mb-4">
              {t("footer_home")}
            </h2>
            <p className="text-light-cream/90 mb-8 max-w-2xl mx-auto text-lg">
              {t("footerhome_content")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/register">
                <Button color="amber">{t("footerhome_button")}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
