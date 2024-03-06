import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Navs } from "./Navs";

interface NavListProps {
  toggleMenu: () => void;
}

const NavList = ({ toggleMenu }: NavListProps) => {
  return (
    <>
      <div className="absolute left-0 top-[50px]">
        {Navs.map((nav, index) => {
          return (
            <motion.div
              initial={{ x: "-200%" }}
              animate={{ x: 0 }}
              className="flex h-[4rem] w-[40rem] items-center bg-white indent-10"
              transition={{ type: "linear", delay: index * 0.1 }}
              onClick={toggleMenu}
            >
              <Link to={nav.link}>{nav.name} </Link>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default NavList;
