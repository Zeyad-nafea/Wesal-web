import React from "react";
import { FaSun, FaMoon } from "react-icons/fa6";
import {
  Navbar, Collapse, Typography, Button, IconButton,
  List, ListItem, Menu, MenuHandler, MenuList, MenuItem, Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Cog6ToothIcon, InboxArrowDownIcon, LifebuoyIcon, PowerIcon, UserCircleIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import useTheme from "../../Hooks/usetheme";

const profileMenuItems = [
  { label: "My Profile", icon: UserCircleIcon },
  { label: "Edit Profile", icon: Cog6ToothIcon },
  { label: "Inbox", icon: InboxArrowDownIcon },
  { label: "Help", icon: LifebuoyIcon },
  { label: "Sign Out", icon: PowerIcon },
];

function AvatarWithUserDropdown() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleMenuClick = (label) => {
    setIsMenuOpen(false);
    if (label === "Sign Out") {
      logout();
      navigate("/login");
    } else if (label === "My Profile") {
      navigate("/profile");
    }
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button variant="text" color="blue-gray" className="flex items-center rounded-full p-0">
          <Avatar
            variant="circular"
            size="md"
            alt="user"
            withBorder={true}
            color="blue-gray"
            className="p-0.5"
            src="https://docs.material-tailwind.com/img/face-2.jpg"
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => handleMenuClick(label)}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

function NavList({ closeMenu }) {
  const { isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    closeMenu();
  };

  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <ListItem
        onClick={() => handleNav("/")}
        className="flex items-center gap-2 py-2 pr-4 font-medium text-light-cream cursor-pointer"
      >
        Home
      </ListItem>

      <ListItem
        onClick={() => handleNav("/courses")}
        className="flex items-center gap-2 py-2 pr-4 font-medium text-light-cream cursor-pointer"
      >
        Courses
      </ListItem>

      <ListItem
        onClick={() => handleNav("/internship")}
        className="flex items-center gap-2 py-2 pr-4 font-medium text-light-cream cursor-pointer"
      >
        Internship
      </ListItem>

      <ListItem
        onClick={() => handleNav("/workshop")}
        className="flex items-center gap-2 py-2 pr-4 font-medium text-light-cream cursor-pointer"
      >
        Workshop
      </ListItem>

      {/* FIXED HERE 👇 */}
      <ListItem
        onClick={() => handleNav("/About")}
        className="flex items-center gap-2 py-2 pr-4 font-medium text-light-cream cursor-pointer whitespace-nowrap"
      >
        About Us
      </ListItem>

      <ListItem
        onClick={() => handleNav("/Contact")}
        className="flex items-center gap-2 py-2 pr-4 font-medium text-light-cream cursor-pointer whitespace-nowrap"
      >
        Contact us
      </ListItem>

      {isAuthenticated && (
        <ListItem
          onClick={() => handleNav("/profile")}
          className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 cursor-pointer"
        >
          Profile
        </ListItem>
      )}

      {isAuthenticated && isAdmin() && (
        <ListItem
          onClick={() => handleNav("/dashboard")}
          className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 cursor-pointer"
        >
          Dashboard
        </ListItem>
      )}
    </List>
  );
}

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { theme, mode } = useTheme();

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="w-full max-w-none rounded-none border-light-darkbg px-6 py-2 sticky top-0 z-50 bg-light-darkbg">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img src="/Logo.png" alt="WESAL" className="h-28 w-auto" />
        </div>

        <div className="hidden lg:block">
          <NavList closeMenu={() => {}} />
        </div>

        <div className="hidden gap-2 lg:flex items-center">
          <IconButton
            size="sm"
            variant="text"
            onClick={mode}
            className="text-light-cream hover:bg-white/10"
          >
            {theme === "dark" ? (
              <FaSun className="h-4 w-4" />
            ) : (
              <FaMoon className="h-4 w-4" />
            )}
          </IconButton>

          {isAuthenticated ? (
            <AvatarWithUserDropdown />
          ) : (
            <>
              <div onClick={() => navigate("/register")}>
                <Button size="sm" className="bg-light-accent text-light-accent-foreground hover:bg-[#C8A85A]/90 border-0 font-semibold transition-all duration-300">
                  GET STARTED
                </Button>
              </div>

              <div onClick={() => navigate("/login")}>
                <Button variant="outlined" size="sm" className="border border-light-accent text-light-accent hover:bg-light-accent hover:text-light-accent-foreground transition-all duration-300 font-semibold">
                  LOG IN
                </Button>
              </div>
            </>
          )}
        </div>

        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList closeMenu={() => setOpenNav(false)} />

        <Button
          size="xl"
          variant="text"
          onClick={mode}
          className="text-light-cream hover:bg-white/10 rounded-full"
        >
          {theme === "dark" ? (
            <span className="flex gap-2">
              <FaSun className="h-4 w-4" /> Light
            </span>
          ) : (
            <span className="flex gap-2">
              <FaMoon className="h-4 w-4" /> Dark
            </span>
          )}
        </Button>

        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          {isAuthenticated ? (
            <AvatarWithUserDropdown />
          ) : (
            <>
              <div
                className="w-full"
                onClick={() => {
                  navigate("/register");
                  setOpenNav(false);
                }}
              >
                <Button color="green" size="sm" fullWidth>
                  Get Started
                </Button>
              </div>

              <div
                className="w-full"
                onClick={() => {
                  navigate("/login");
                  setOpenNav(false);
                }}
              >
                <Button color="amber" size="sm" fullWidth>
                  Log In
                </Button>
              </div>
            </>
          )}
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;
