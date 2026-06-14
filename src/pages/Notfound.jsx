import React from "react";
import { Link } from "react-router";
import { Button } from "@material-tailwind/react";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Notfound() {
  const { t } = useTranslation();
  return (
    <div className=" flex items-center justify-center bg-light-background dark:bg-dark-background px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        <div>
          <h1 className="text-9xl font-bold text-light-foreground dark:text-dark-foreground opacity-50">
            404
          </h1>
        </div>
        <div className="mb-12">
          <h2 className="text-3xl text-light-muted-foreground mb-4 dark:text-dark-destructive-foreground">
            {t("Not_Found")}
          </h2>
          <p className="text-lg text-light-muted-foreground dark:text-dark-destructive-foreground max-w-md mx-auto">
            {t("Not_Found_content")}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/">
            <Button color="amber" className="flex items-center gap-2">
              <FaHome className="w-4 h-4" />
              <span>{t("Not_found_home")}</span>
            </Button>
          </Link>
          <Link to="/courses">
            <Button
              variant="outlined"
              className="flex items-center gap-2 dark:bg-dark-foreground dark:text-dark-background"
            >
              <FaSearch className="w-4 h-4" />
              <span>{t("Not_found_Courses")}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
