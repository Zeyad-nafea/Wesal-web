import React from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Target, Users, Lightbulb, Award } from "lucide-react";
import { useTranslation } from "react-i18next";


function About() {
  const { t } = useTranslation();
  const values = [
  {
    icon: (
      <Target className="w-8 h-8 dark:text-dark-foreground text-light-foreground" />
    ),
    title: t("values1_title"),
    description:
      t("values1_content"),
  },
  {
    icon: (
      <Users className="w-8 h-8 dark:text-dark-foreground text-light-foreground" />
    ),
    title: t("values2_title"),
    description:
      t("values2_content"),
  },
  {
    icon: (
      <Lightbulb className="w-8 h-8 dark:text-dark-foreground text-light-foreground" />
    ),
    title: t("values3_title"),
    description:
      t("values3_content"),
  },
  {
    icon: (
      <Award className="w-8 h-8 dark:text-dark-foreground text-light-foreground" />
    ),
    title: t("values4_title"),
    description:
      t("values4_content"),
  },
];
  return (
    <div className="">
      <section className="bg-gradient-to-b from-light-hero to-light-hero-end dark:bg-gradient-to-b dark:from-dark-hero dark:to-dark-hero-end py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-white leading-tight">
              {t("about1")}<span className="text-light-accent"> {t("Wesal")}</span>
            </h1>
            <p className="text-xl  text-light-cream">
              {t("about_content")}
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-light-background dark:bg-dark-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl sm:text-4xl mb-8 text-center text-light-foreground dark:text-dark-foreground">
            {t("our_story")}
          </h2>
          <div className="space-y-6 leading-relaxed text-lg text-light-muted-foreground dark:text-dark-muted-foreground">
            <p className="">
             {t("story1")}
            </p>
            <p>
              {t("story2")}
            </p>
            <p>
              {t("story3")}
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-light-background dark:bg-dark-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl sm:text-4xl mb-8 text-center text-light-foreground dark:text-dark-foreground">
            {t("values")}
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
              {t("join")}
            </h2>
            <p className="text-light-cream/90 mb-8 max-w-2xl mx-auto text-lg">
              {t("join_content")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/register">
                <Button color="amber">{t("footerhome_button")}</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outlined" className="rounded-full text-white border-white">
                  {t("Contact_us")}
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
