import { FiMoreHorizontal } from "react-icons/fi";
import { capitalizeFirstLetter } from "~/helper/string";
import { List } from "~/types";

interface ListHeaderProps {
  list: List;
}
export const ListHeader = ({ list }: ListHeaderProps) => {
  return (
    <div className="">
      <p className="text-6xl">{list.emoji}</p>
      <div className="flex justify-between items-center mt-10">
        <p className="text-reverse font-bold text-xl">
          {capitalizeFirstLetter(list.title)}
        </p>
        <FiMoreHorizontal className="text-primary" size={20} />
      </div>
    </div>
  );
};
