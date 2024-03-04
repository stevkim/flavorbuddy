import { motion } from "framer-motion";

interface NavListProps {
  list: string[];
}

const NavList = ({ list }: NavListProps) => {
  return (
    <>
      <div className="absolute left-0 top-[50px]">
        {list.map((listItem, index) => {
          return (
            <motion.div
              initial={{ x: "-200%" }}
              animate={{ x: 0 }}
              className="flex h-[2rem] w-[40rem] items-center bg-white indent-10"
              transition={{ type: "linear", delay: index * 0.1 }}
            >
              {listItem}
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default NavList;
