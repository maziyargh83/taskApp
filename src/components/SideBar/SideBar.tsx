import {
  FiChevronsLeft,
  FiInbox,
  FiSearch,
  FiStar,
  FiTrash2,
} from "react-icons/fi";
import { List } from "./List";
import { Fragment, useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };
  const className = ({ isActive }: { isActive: boolean }) =>
    clsx("flex items-center space-x-3 mt-5 mx-2 px-1 py-2 rounded", {
      "bg-light": isActive,
    });
  return (
    <Fragment>
      <aside
        className={clsx(
          "fixed h-screen bg-secondary border-r-light border-r w-[200px] text-tertiary flex flex-col",
          {
            "-left-[200px]": !isOpen,
            "left-0 ": isOpen,
          }
        )}
      >
        <div
          onClick={closeModal}
          className="absolute left-[100%] p-2 border cursor-pointer border-light border-l-0 bg-secondary top-5"
        >
          <FiChevronsLeft size={20} />
        </div>
        <div className="border-b border-b-light  pb-6">
          <div className="flex items-center justify-between mt-5">
            <span className="text-sm font-bold">Task app</span>
          </div>
          <NavLink className={className} to={"/search"}>
            <FiSearch className="text-light" size={20} />
            <span className="text-sm">Quick find</span>
          </NavLink>
          <NavLink className={className} to={"/favorite"}>
            <FiStar className="text-yellow-400" size={20} />
            <span className="text-sm">Favorite</span>
          </NavLink>
          <NavLink className={className} to={"/inbox"}>
            <FiInbox className="text-teal-400" size={20} />
            <span className="text-sm">Inbox</span>
          </NavLink>
          <NavLink className={className} to={"/trash"}>
            <FiTrash2 className="text-red-400" size={20} />
            <span className="text-sm">Trash</span>
          </NavLink>
        </div>
        <div className="px-3 pt-5">
          <List />
        </div>
      </aside>
      {isOpen && <div className="w-[200px] xl:block hidden" />}
    </Fragment>
  );
};
