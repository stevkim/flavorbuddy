import { MenuIcon, useMenuIcon } from "react-animated-menuicon";
import NavList from "./NavList";
import { Link } from "@tanstack/react-router";

const Navbar = () => {
  const methods = useMenuIcon({ size: "md", type: "spin" });

  const { open, toggleMenu } = methods;

  return (
    <nav className="relative flex h-[50px] items-center bg-white px-20">
      <span>
        <MenuIcon {...methods} />
      </span>
      <Link to="/" className="mx-auto text-2xl font-bold">
        Flavor Buddy
      </Link>
      {open ? <NavList toggleMenu={toggleMenu} /> : null}
    </nav>
  );
};

export default Navbar;
