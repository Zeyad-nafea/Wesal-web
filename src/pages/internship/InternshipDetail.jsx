import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { internships, workshops } from "../Internshipsdata";
import {
  ArrowLeft, MapPin, Clock, Signal, Briefcase,
  DollarSign, CheckCircle2, ChevronRight,
  Building2, Calendar, Users, Layers, Wrench,
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

const workshopBadgeColor = (badge) => {
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

function InternshipDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const internship = internships.find((i) => i.id === id);
  // Get all workshops linked to this internship
  const linkedWorkshops = workshops.filter((w) => w.internshipId === id);

  if (!internship) {
    return (
      <div className="min-h-screen bg-light-background dark:bg-dark-background flex flex-col items-center justify-center gap-4">
        <Briefcase className="w-14 h-14 text-light-accent opacity-40" />
        <p className="text-xl text-light-foreground dark:text-dark-foreground font-semibold">
          Internship not found
        </p>
        <Link to="/internship" className="flex items-center gap-2 text-light-accent hover:gap-3 transition-all text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Internships
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-light-background dark:bg-dark-background min-h-screen">

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-light-hero to-light-hero-end dark:from-dark-hero dark:to-dark-hero-end pt-8 pb-28 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/internship" className="hover:text-white transition-colors">Internships</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white truncate max-w-[180px]">{internship.title}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div>
              <span className={`inline-block text-xs px-3 py-1 rounded-full font-medium border mb-4 ${fieldColor(internship.field)}`}>
                {internship.field}
              </span>
              <h1 className="text-4xl sm:text-5xl text-white font-bold leading-tight mb-2">
                {internship.title}
              </h1>
              <p className="text-light-cream text-lg flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                {internship.company}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
              {[
                { icon: MapPin, label: internship.location },
                { icon: Clock,  label: internship.duration },
                { icon: Signal, label: internship.type },
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

            <Section icon={Briefcase} title="About This Internship">
              <p className="text-light-muted-foreground dark:text-dark-muted-foreground leading-relaxed text-sm">
                {internship.description}
              </p>
            </Section>

            <Section icon={Layers} title="What You'll Do">
              <ul className="flex flex-col gap-3">
                {internship.whatYouWillDo.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-light-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-light-muted-foreground dark:text-dark-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section icon={CheckCircle2} title="Requirements">
              <ul className="flex flex-col gap-3">
                {internship.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-light-accent/15 text-light-accent text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-light-muted-foreground dark:text-dark-muted-foreground leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section icon={ChevronRight} title="How to Apply">
              <ol className="flex flex-col gap-4">
                {internship.howToApply.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="flex flex-col items-center shrink-0">
                      <span className="w-6 h-6 rounded-full bg-light-accent text-light-accent-foreground text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      {i < internship.howToApply.length - 1 && (
                        <div className="w-px h-5 bg-light-accent/20 mt-1" />
                      )}
                    </div>
                    <span className="text-sm text-light-muted-foreground dark:text-dark-muted-foreground leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </Section>

            {/* ── Workshops Section — only shown if this intern has workshops ── */}
            {linkedWorkshops.length > 0 && (
              <div className="bg-light-card dark:bg-dark-card rounded-2xl border border-light-border dark:border-dark-border overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-4 border-b border-light-border dark:border-dark-border">
                  <div className="w-8 h-8 rounded-lg bg-light-accent/10 flex items-center justify-center">
                    <Wrench className="w-4 h-4 text-light-accent" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-light-foreground dark:text-dark-foreground">
                      Related Workshops
                    </h2>
                    <p className="text-xs text-light-muted-foreground dark:text-dark-muted-foreground">
                      Boost your chances — attend these workshops hosted by {internship.company}
                    </p>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  {linkedWorkshops.map((ws) => (
                    <div
                      key={ws.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-light-secondary dark:bg-dark-secondary border border-light-border dark:border-dark-border hover:border-light-accent/40 transition-all"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="text-sm font-semibold text-light-foreground dark:text-dark-foreground truncate">
                            {ws.title}
                          </h3>
                          {ws.badge && (
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${workshopBadgeColor(ws.badge)}`}>
                              {ws.badge}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-light-muted-foreground dark:text-dark-muted-foreground">
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{ws.date}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{ws.duration}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{ws.location}</span>
                        </div>
                      </div>
                      <Link
                        to={`/workshop/${ws.id}`}
                        className="shrink-0 px-4 py-2 rounded-xl border border-light-accent/50 text-light-accent text-xs font-semibold hover:bg-light-accent hover:text-light-accent-foreground transition-all text-center"
                      >
                        View Workshop
                      </Link>
                    </div>
                  ))}
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
                    Monthly Compensation
                  </p>
                  <p className="text-2xl font-bold text-light-foreground dark:text-dark-foreground">
                    {internship.salary}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    { icon: Clock,      label: "Duration",  value: internship.duration  },
                    { icon: Signal,     label: "Type",      value: internship.type      },
                    { icon: MapPin,     label: "Location",  value: internship.location  },
                    { icon: Calendar,   label: "Deadline",  value: internship.deadline  },
                    { icon: Users,      label: "Team Size", value: internship.teamSize  },
                    { icon: DollarSign, label: "Field",     value: internship.field     },
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

                {/* Workshop count badge in sidebar */}
                {linkedWorkshops.length > 0 && (
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-light-accent/10 border border-light-accent/20">
                    <Wrench className="w-4 h-4 text-light-accent shrink-0" />
                    <p className="text-xs text-light-accent font-medium">
                      {linkedWorkshops.length} workshop{linkedWorkshops.length > 1 ? "s" : ""} available for this internship
                    </p>
                  </div>
                )}

                <button className="w-full py-3 rounded-xl bg-light-accent text-light-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
                  Apply Now
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
export default InternshipDetail;
