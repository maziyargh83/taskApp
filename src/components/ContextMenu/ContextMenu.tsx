import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FiEdit3, FiMoreHorizontal, FiTrash2 } from "react-icons/fi";
interface ContextMenuProps {
  update: () => void;
}
export const ContextMenu = ({ update }: ContextMenuProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label="Customise options">
          <FiMoreHorizontal className="text-primary" size={20} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className=" bg-secondary rounded-md p-1  will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Item
            onClick={update}
            className="space-x-3  text-sm leading-none text-reverse rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-reverse data-[disabled]:pointer-events-none  data-[highlighted]:text-reverse"
          >
            <FiEdit3 className="text-primary" />
            <span className="text-primary">Edit</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="space-x-3 text-sm leading-none text-reverse rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-reverse data-[disabled]:pointer-events-none  data-[highlighted]:text-reverse">
            <FiTrash2 className="text-red-400" />
            <span className="text-red-400">Delete</span>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className="fill-secondary" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
