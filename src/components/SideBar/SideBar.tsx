import { FiInbox, FiSearch, FiStar, FiTrash2 } from "react-icons/fi";
import { MdOutlineTask } from "react-icons/md";
import { List } from "./List";
import { Label } from "./Label";
export const SideBar = () => {
  return (
    <aside className="bg-secondary border-r-light border-r w-[200px] text-tertiary flex flex-col">
      <div className="border-b border-b-light  px-3 pb-6">
        <div className="flex items-center space-x-3 mt-5">
          <MdOutlineTask className="text-orange-400" size={20} />
          <span className="text-sm font-bold">Task app</span>
        </div>
        <div className="flex items-center space-x-3 mt-5">
          <FiSearch className="text-light" size={20} />
          <span className="text-sm">Quick find</span>
        </div>
        <div className="flex items-center space-x-3 mt-5">
          <FiStar className="text-yellow-400" size={20} />
          <span className="text-sm">Favorite</span>
        </div>
        <div className="flex items-center space-x-3 mt-5">
          <FiInbox className="text-teal-400" size={20} />
          <span className="text-sm">Inbox</span>
        </div>
        <div className="flex items-center space-x-3 mt-5">
          <FiTrash2 className="text-red-400" size={20} />
          <span className="text-sm">Trash</span>
        </div>
      </div>
      <div className="px-3 pt-5">
        <List />
        <div className="mt-5">
          <Label />
        </div>
      </div>
    </aside>
  );
};
