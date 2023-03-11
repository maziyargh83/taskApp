import { STATUS } from "~/types";
interface StatusProps {
  type: keyof typeof STATUS;
  onClick: () => void;
}
export const Status = ({ type, onClick }: StatusProps) => {
  const Done = (
    <div className="bg-light inline-flex p-1 rounded mt-1">
      <span className="text-purple-500 font-bold text-sm">Done</span>
    </div>
  );
  const Pending = (
    <div className="bg-light inline-flex p-1 rounded mt-1">
      <span className="text-orange-500 font-bold text-sm">Pending</span>
    </div>
  );
  return (
    <div onClick={onClick} className="cursor-pointer inline-flex">
      {type === "PENDING" ? Pending : Done}
    </div>
  );
};
