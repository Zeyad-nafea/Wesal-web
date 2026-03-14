import React from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Target, Users, Lightbulb, Award } from "lucide-react";
const values = [
  {
    icon: (
      <Target className="w-8 h-8 dark:text-dark-foreground text-light-foreground" />
    ),
    title: "Mission Driven",
    description:
      "We're committed to connecting talented individuals with opportunities that accelerate their career growth.",
  },
  {
    icon: (
      <Users className="w-8 h-8 dark:text-dark-foreground text-light-foreground" />
    ),
    title: "Community First",
    description:
      "Building a supportive community where students and professionals can learn, grow, and succeed together.",
  },
  {
    icon: (
      <Lightbulb className="w-8 h-8 dark:text-dark-foreground text-light-foreground" />
    ),
    title: "Innovation",
    description:
      "Constantly evolving our platform to provide the best learning experience with cutting-edge technology.",
  },
  {
    icon: (
      <Award className="w-8 h-8 dark:text-dark-foreground text-light-foreground" />
    ),
    title: "Excellence",
    description:
      "Partnering with industry leaders to offer premium courses, workshops, and internship opportunities.",
  },
];

function About() {
  return (
    <div className="">
      <section className="bg-gradient-to-b from-light-hero to-light-hero-end dark:bg-gradient-to-b dark:from-dark-hero dark:to-dark-hero-end py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-white leading-tight">
              About<span className="text-light-accent"> WESAL</span>
            </h1>
            <p className="text-xl  text-light-cream">
              WESAL is where young minds connect, grow, and turn dreams into
              impact. We believe in learning, sharing opportunities, and
              empowering youth to create a better future.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-light-background dark:bg-dark-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl sm:text-4xl mb-8 text-center text-light-foreground dark:text-dark-foreground">
            Our Story
          </h2>
          <div className="space-y-6 leading-relaxed text-lg text-light-muted-foreground dark:text-dark-muted-foreground">
            <p className="">
              Wesal was born from a simple belief: every young person deserves a
              chance to discover their potential.
            </p>
            <p>
              We saw talented, ambitious youth searching for direction,
              opportunities, and the right community to grow with. So Wesal
              became that bridge — connecting curiosity with knowledge, skills
              with experience, and ambition with real opportunities.
            </p>
            <p>
              Through courses, workshops, internships, and a driven community,
              Wesal brings together people who believe that learning should open
              doors, not stop at information. Because when the right minds
              connect, possibilities become limitless.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-light-background dark:bg-dark-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl sm:text-4xl mb-8 text-center text-light-foreground dark:text-dark-foreground">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="mt-6 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border hover:border-l-light-accent/30 transition-all"
              >
                <CardBody>
                  <section className="w-14 h-14 rounded-xl bg-light-ring/80 flex items-center justify-center">
                    {value.icon}
                  </section>

                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 mt-2 dark:text-dark-foreground"
                  >
                    {value.title}
                  </Typography>
                  <Typography className="dark:text-dark-cream">
                    {value.description}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-light-background dark:bg-dark-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-gradient-to-b from-light-hero to-light-hero-end dark:bg-gradient-to-b dark:from-dark-hero dark:to-dark-hero-end p-12 rounded-xl text-center">
            <h2 className="text-3xl sm:text-4xl text-light-secondary mb-4">
              Join Our Community
            </h2>
            <p className="text-light-cream/90 mb-8 max-w-2xl mx-auto text-lg">
              Start your learning journey today and connect with thousands of
              students and professionals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/register">
                <Button color="amber">Get Started</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outlined" className="rounded-full text-white border-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
