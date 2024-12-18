import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../images/robin_logo.png";

function NavList() {
  return (
    <ul className="flex justify-center gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#about"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          About Me
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#project"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium"
      >
        <a
          href="#contact"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Contact
        </a>
      </Typography>
    </ul>
  );
}

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  const handleDownload = () => {
    const fileURL =
      "https://drive.google.com/uc?export=download&id=1JNHkCqDYH-WgleVhNSzx4V4_n5LgY6Bh";
    window.open(fileURL, "_blank");
  };

  return (
    <Navbar className="mx-auto fixed z-10 top-0 bg-opacity-0 border-none px-8 py-2 min-w-full">
      <div className="flex items-center justify-between text-blue-gray-900 w-full">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          <img className="h-8 w-40" src={logo} alt="logo" />
        </Typography>

        <div className="hidden lg:flex flex-grow justify-center">
          <NavList />
        </div>

        <div className="hidden lg:block">
          <Button onClick={handleDownload} size="sm">
            Download Resume
          </Button>
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList />
        <div className="block lg:hidden mt-2">
          <Button onClick={handleDownload} size="sm">
            Download Resume
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
