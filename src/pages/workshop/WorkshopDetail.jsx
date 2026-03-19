import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { workshops, internships } from "../internshipsData";
import {
  ArrowLeft, MapPin, Clock, Calendar, Wrench,
  CheckCircle2, ChevronRight, Building2,
  Users, BookOpen, Layers, Briefcase,
} from "lucide-react";

const fieldColor = (field) => {
  const map = {
    Engineering: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Design:      "bg-purple-500/10 text-purple-400 border-purple-500/20",
    Data:        "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    Marketing:   "bg-orange-500/10 text-orange-400 border-orange-500/20",
    Business:    "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  };
  return map[field] || "bg-light-accent/10 text-light-accent border-light-accent/20";
};

const badgeColor = (badge) => {
  if (badge === "Live")    return "bg-red-500/20 text-red-400";
  if (badge === "New")     return "bg-emerald-500/20 text-emerald-400";
  if (badge === "Popular") return "bg-light-accent/20 text-light-accent";
  return "";
};

function Section({ icon: Icon, title, children }) {
  return (
    <div className="bg-light-card dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-light-border dark:border-dark-border">
        <div className="w-8 h-8 rounded-lg bg-light-accent/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-light-accent" />
        </div>
        <h2 className="text-base font-semibold text-light-foreground dark:text-dark-foreground">
          {title}
        </h2>
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}

function WorkshopDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const workshop = workshops.find((w) => w.id === id);
  // Find the linked internship
  const linkedInternship = workshop
    ? internships.find((i) => i.id === workshop.internshipId)
    : null;

  if (!workshop) {
    return (
      <div className="min-h-screen bg-light-background dark:bg-dark-background flex flex-col items-center justify-center gap-4">
        <Wrench className="w-14 h-14 text-light-accent opacity-40" />
        <p className="text-xl text-light-foreground dark:text-dark-foreground font-semibold">
          Workshop not found
        </p>
        <Link to="/workshop" className="flex items-center gap-2 text-light-accent hover:gap-3 transition-all text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Workshops
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-light-background dark:bg-dark-background min-h-screen">

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-light-hero to-light-hero-end dark:from-dark-hero dark:to-dark-hero-end pt-8 pb-28 px-4">
        <div className="container mx-auto max-w-5xl">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/workshop" className="hover:text-white transition-colors">Workshops</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white truncate max-w-[200px]">{workshop.title}</span>
          </div>

          {/* Title block */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className={`inline-block text-xs px-3 py-1 rounded-full font-medium border ${fieldColor(workshop.field)}`}>
                  {workshop.field}
                </span>
                {workshop.badge && (
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${badgeColor(workshop.badge)}`}>
                    {workshop.badge === "Live" && "🔴 "}
                    {workshop.badge === "Popular" && "⭐ "}
                    {workshop.badge === "New" && "✦ "}
                    {workshop.badge}
                  </span>
                )}
              </div>
              <h1 className="text-4xl sm:text-5xl text-white font-bold leading-tight mb-2">
                {workshop.title}
              </h1>
              <p className="text-light-cream text-lg flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                {workshop.company}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
              {[
                { icon: Calendar, label: workshop.date     },
                { icon: Clock,    label: workshop.time     },
                { icon: MapPin,   label: workshop.location },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 text-sm text-white/80 bg-white/10 px-3 py-1.5 rounded-full">
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-5xl px-4 -mt-16 relative z-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            <Section icon={Wrench} title="About This Workshop">
              <p className="text-light-muted-foreground dark:text-dark-muted-foreground leading-relaxed text-sm">
                {workshop.description}
              </p>
            </Section>

            <Section icon={BookOpen} title="What You'll Learn">
              <ul className="flex flex-col gap-3">
                {workshop.whatYouWillLearn.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-light-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-light-muted-foreground dark:text-dark-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section icon={Users} title="Who Should Attend">
              <p className="text-sm text-light-muted-foreground dark:text-dark-muted-foreground leading-relaxed">
                {workshop.whoShouldAttend}
              </p>
            </Section>

            <Section icon={Layers} title="Schedule & Agenda">
              <div className="flex flex-col gap-0">
                {workshop.schedule.map((slot, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-light-accent mt-1.5" />
                      {i < workshop.schedule.length - 1 && (
                        <div className="w-px flex-1 bg-light-border dark:bg-dark-border my-1 min-h-[20px]" />
                      )}
                    </div>
                    <div className="pb-4 flex-1">
                      <span className="text-xs font-semibold text-light-accent block mb-0.5">{slot.time}</span>
                      <span className="text-sm text-light-muted-foreground dark:text-dark-muted-foreground">{slot.activity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section icon={ChevronRight} title="How to Register">
              <ol className="flex flex-col gap-4">
                {workshop.howToRegister.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="flex flex-col items-center shrink-0">
                      <span className="w-6 h-6 rounded-full bg-light-accent text-light-accent-foreground text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      {i < workshop.howToRegister.length - 1 && (
                        <div className="w-px h-5 bg-light-accent/20 mt-1" />
                      )}
                    </div>
                    <span className="text-sm text-light-muted-foreground dark:text-dark-muted-foreground leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </Section>

            {/* Linked Internship */}
            {linkedInternship && (
              <div className="bg-light-card dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-4 border-b border-light-border dark:border-dark-border">
                  <div className="w-8 h-8 rounded-lg bg-light-accent/10 flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-light-accent" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-light-foreground dark:text-dark-foreground">
                      Related Internship
                    </h2>
                    <p className="text-xs text-light-muted-foreground dark:text-dark-muted-foreground">
                      This workshop is part of the internship programme at {linkedInternship.company}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-light-secondary dark:bg-dark-secondary border border-light-border dark:border-dark-border hover:border-light-accent/40 transition-all">
                    <div>
                      <h3 className="text-sm font-semibold text-light-foreground dark:text-dark-foreground mb-1">
                        {linkedInternship.title}
                      </h3>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-light-muted-foreground dark:text-dark-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{linkedInternship.location}</span>
                        <span className="flex items-center gap-1"><Clock   className="w-3 h-3" />{linkedInternship.duration}</span>
                        <span className="font-medium text-light-foreground dark:text-dark-foreground">{linkedInternship.salary}</span>
                      </div>
                    </div>
                    <Link
                      to={`/internship/${linkedInternship.id}`}
                      className="shrink-0 px-4 py-2 rounded-xl border border-light-accent/50 text-light-accent text-xs font-semibold hover:bg-light-accent hover:text-light-accent-foreground transition-all text-center"
                    >
                      View Internship
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            <div className="bg-light-card dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border overflow-hidden sticky top-6">
              <div className="h-1 w-full bg-gradient-to-r from-light-accent via-yellow-300 to-light-accent" />
              <div className="p-6 flex flex-col gap-5">

                <div>
                  <p className="text-xs text-light-muted-foreground dark:text-dark-muted-foreground uppercase tracking-wider mb-1">
                    Duration
                  </p>
                  <p className="text-2xl font-bold text-light-foreground dark:text-dark-foreground">
                    {workshop.duration}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Calendar, label: "Date",     value: workshop.date     },
                    { icon: Clock,    label: "Time",     value: workshop.time     },
                    { icon: MapPin,   label: "Location", value: workshop.location },
                    { icon: Wrench,   label: "Field",    value: workshop.field    },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="bg-light-secondary dark:bg-dark-secondary rounded-xl p-3">
                      <div className="flex items-center gap-1.5 text-light-muted-foreground dark:text-dark-muted-foreground mb-1">
                        <Icon className="w-3.5 h-3.5" />
                        <span className="text-xs">{label}</span>
                      </div>
                      <p className="text-xs font-semibold text-light-foreground dark:text-dark-foreground truncate">{value}</p>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 rounded-xl bg-light-accent text-light-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
                  Register Now
                </button>

                <button
                  onClick={() => navigate(-1)}
                  className="w-full py-2.5 rounded-xl border border-light-border dark:border-dark-border text-light-muted-foreground dark:text-dark-muted-foreground text-sm hover:border-light-accent/40 transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Go Back
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default WorkshopDetail;
