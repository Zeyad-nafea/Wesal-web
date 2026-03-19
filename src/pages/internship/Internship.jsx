import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Briefcase, MapPin, Clock, Signal,
  Search, Filter, X, Star, TrendingUp,
} from "lucide-react";
import { internships, featuredInternships } from "../internshipsData";
const fields    = ["All Fields", "Engineering", "Design", "Data", "Marketing", "Business"];
const locations = ["All Locations", "Remote", "On-site", "Hybrid"];
const types     = ["All Types", "Full-time", "Part-time"];

const badgeColor = (badge) => {
  if (badge === "Hot")      return "bg-red-500/20 text-red-400";
  if (badge === "New")      return "bg-emerald-500/20 text-emerald-400";
  return "bg-light-accent/20 text-light-accent";
};

const fieldColor = (field) => {
  const map = {
    Engineering: "bg-blue-500/10 text-blue-400",
    Design:      "bg-purple-500/10 text-purple-400",
    Data:        "bg-emerald-500/10 text-emerald-400",
    Marketing:   "bg-orange-500/10 text-orange-400",
    Business:    "bg-yellow-500/10 text-yellow-400",
  };
  return map[field] || "bg-light-accent/10 text-light-accent";
};

function FeaturedCard({ item }) {
  return (
    <div className="relative bg-light-card dark:bg-dark-card rounded-2xl overflow-hidden border border-light-border dark:border-dark-border hover:scale-[1.02] transition-all group">
      <div className="h-1 w-full bg-gradient-to-r from-light-accent via-yellow-300 to-light-accent opacity-80" />
      <div className="p-6">
        <span className={`inline-block text-xs px-3 py-1 rounded-full font-medium mb-4 ${badgeColor(item.badge)}`}>
          {item.badge === "Hot"      && "🔥 "}
          {item.badge === "Featured" && <Star className="inline w-3 h-3 mr-1" />}
          {item.badge === "New"      && "✦ "}
          {item.badge}
        </span>
        <h3 className="text-lg font-semibold text-light-foreground dark:text-dark-foreground mb-1 group-hover:text-light-accent transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-light-muted-foreground dark:text-dark-muted-foreground mb-5">
          {item.company}
        </p>
        <div className="flex flex-wrap gap-3 text-xs text-light-muted-foreground dark:text-dark-muted-foreground mb-6">
          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{item.location}</span>
          <span className="flex items-center gap-1"><Clock  className="w-3.5 h-3.5" />{item.duration}</span>
          <span className={`px-2 py-0.5 rounded-full font-medium ${fieldColor(item.field)}`}>{item.field}</span>
        </div>
        {/* ✅ Link to detail page */}
        <Link
          to={`/internship/${item.id}`}
          className="block w-full py-2.5 rounded-xl bg-light-accent text-light-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity text-center"
        >
          View & Apply
        </Link>
      </div>
    </div>
  );
}

function InternshipCard({ item }) {
  return (
    <div className="bg-light-card dark:bg-dark-card rounded-xl p-5 border border-light-border dark:border-dark-border hover:bg-light-secondary dark:hover:bg-dark-secondary hover:border-light-accent/40 transition-all group flex flex-col gap-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h4 className="text-sm font-semibold text-light-foreground dark:text-dark-foreground group-hover:text-light-accent transition-colors leading-snug mb-1">
            {item.title}
          </h4>
          <p className="text-xs text-light-muted-foreground dark:text-dark-muted-foreground">
            {item.company}
          </p>
        </div>
        <span className={`shrink-0 text-xs px-2.5 py-1 rounded-full font-medium ${fieldColor(item.field)}`}>
          {item.field}
        </span>
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-light-muted-foreground dark:text-dark-muted-foreground">
        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{item.location}</span>
        <span className="flex items-center gap-1"><Clock  className="w-3.5 h-3.5" />{item.duration}</span>
        <span className="flex items-center gap-1"><Signal className="w-3.5 h-3.5" />{item.type}</span>
      </div>
      {/* ✅ Link to detail page */}
      <Link
        to={`/internship/${item.id}`}
        className="mt-auto block w-full py-2 rounded-xl border border-light-accent/50 text-light-accent text-xs font-semibold hover:bg-light-accent hover:text-light-accent-foreground transition-all text-center"
      >
        View & Apply
      </Link>
    </div>
  );
}

function Internship() {
  const [search,           setSearch          ] = useState("");
  const [selectedField,    setSelectedField   ] = useState("All Fields");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedType,     setSelectedType    ] = useState("All Types");
  const [filtersOpen,      setFiltersOpen     ] = useState(false);

  const activeFilterCount = [
    selectedField    !== "All Fields",
    selectedLocation !== "All Locations",
    selectedType     !== "All Types",
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedField("All Fields");
    setSelectedLocation("All Locations");
    setSelectedType("All Types");
    setSearch("");
  };

  const filtered = internships.filter((item) => {
    const matchSearch   = !search.trim() || item.title.toLowerCase().includes(search.toLowerCase()) || item.company.toLowerCase().includes(search.toLowerCase());
    const matchField    = selectedField    === "All Fields"    || item.field    === selectedField;
    const matchLocation = selectedLocation === "All Locations" || item.location === selectedLocation;
    const matchType     = selectedType     === "All Types"     || item.type     === selectedType;
    return matchSearch && matchField && matchLocation && matchType;
  });

  return (
    <div className="bg-light-background dark:bg-dark-background min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-b from-light-hero to-light-hero-end dark:from-dark-hero dark:to-dark-hero-end p-7 pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 text-light-accent text-sm font-medium mb-4 bg-white/10 px-4 py-1.5 rounded-full">
              <Briefcase className="w-4 h-4" />
              80+ Openings Available
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-5 text-white leading-tight">
              Launch Your <span className="text-light-accent">Career</span> Journey
            </h1>
            <p className="text-lg text-light-cream max-w-xl mx-auto">
              Discover internships at top companies and build real-world experience that matters.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
              <Search className="w-5 h-5 text-white/70 shrink-0" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by title or company..."
                className="flex-1 bg-transparent outline-none text-white placeholder:text-white/60 text-base"
              />
              {search && (
                <button onClick={() => setSearch("")}>
                  <X className="w-4 h-4 text-white/60 hover:text-white transition-colors" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="relative z-10 mt-16 bg-light-background dark:bg-dark-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-light-accent" />
            <h2 className="text-2xl text-light-foreground dark:text-dark-foreground font-semibold">
              Featured Opportunities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredInternships.map((item) => (
              <FeaturedCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* All internships */}
      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl text-light-foreground dark:text-dark-foreground font-semibold">
                All Internships
              </h2>
              <p className="text-sm text-light-muted-foreground dark:text-dark-muted-foreground mt-0.5">
                {filtered.length} result{filtered.length !== 1 ? "s" : ""} found
              </p>
            </div>
            <button
              onClick={() => setFiltersOpen((v) => !v)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-light-border dark:border-dark-border text-light-foreground dark:text-dark-foreground hover:border-light-accent/50 transition-colors text-sm font-medium"
            >
              <Filter className="w-4 h-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="ml-1 px-2 py-0.5 rounded-full bg-light-accent text-light-accent-foreground text-xs font-bold">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>

          {filtersOpen && (
            <div className="mb-8 p-5 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border">
              <div className="flex flex-col sm:flex-row gap-6">
                {[
                  { label: "Field",    options: fields,    value: selectedField,    setter: setSelectedField    },
                  { label: "Location", options: locations, value: selectedLocation, setter: setSelectedLocation },
                  { label: "Type",     options: types,     value: selectedType,     setter: setSelectedType     },
                ].map(({ label, options, value, setter }) => (
                  <div key={label} className="flex-1">
                    <p className="text-xs text-light-muted-foreground dark:text-dark-muted-foreground mb-2 font-medium uppercase tracking-wider">
                      {label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setter(opt)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                            value === opt
                              ? "bg-light-accent text-light-accent-foreground border-light-accent"
                              : "border-light-border dark:border-dark-border text-light-muted-foreground dark:text-dark-muted-foreground hover:border-light-accent/40"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {activeFilterCount > 0 && (
                <div className="mt-4 pt-4 border-t border-light-border dark:border-dark-border flex justify-end">
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1.5 text-xs text-light-muted-foreground dark:text-dark-muted-foreground hover:text-red-400 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          )}

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((item) => (
                <InternshipCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Briefcase className="w-12 h-12 text-light-muted-foreground dark:text-dark-muted-foreground mx-auto mb-4 opacity-40" />
              <p className="text-light-muted-foreground dark:text-dark-muted-foreground text-lg mb-2">No internships found</p>
              <p className="text-sm text-light-muted-foreground dark:text-dark-muted-foreground opacity-60 mb-6">
                Try adjusting your filters or search term.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-2.5 rounded-xl bg-light-accent text-light-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <div className="py-6" />
    </div>
  );
}

export default Internship;
