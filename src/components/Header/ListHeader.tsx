import { useState } from "react";
import { toast } from "react-toastify";
import { ContextMenu } from "~/components/ContextMenu/ContextMenu";
import { Modal } from "~/components/Modal";
import { CreateList } from "~/components/SideBar/ListModal";
import { TaskModal } from "~/components/Task/TaskModal";
import { updateList } from "~/core";
import { capitalizeFirstLetter } from "~/helper/string";
import { List } from "~/types";

interface ListHeaderProps {
  list: List;
}
export const ListHeader = ({ list }: ListHeaderProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [openTask, setOpenTask] = useState(false);
  const updateListData = async (data: Partial<List>) => {
    await updateList({ ...list, ...data });
    toast("succeed", {
      type: "success",
    });
    setOpenModal(false);
  };
  return (
    <div className="">
      <p className="text-6xl">{list.emoji}</p>
      <div className="flex justify-between items-center mt-10">
        <p className="text-reverse font-bold text-xl">
          {capitalizeFirstLetter(list.title)}
        </p>
        <Modal
          className="bg-secondary w-[400px] h-48"
          close={() => setOpenModal(false)}
          isOpen={openModal}
        >
          <CreateList addList={updateListData} list={list} type="update" />
        </Modal>
        <ContextMenu update={() => setOpenModal(true)} />
      </div>
      <div
        onClick={() => setOpenTask(true)}
        className="flex space-x-3 items-center mt-10 cursor-pointer"
      >
        <span className="text-primary text-lg">+</span>
        <p className="text-tertiary  text-base">New Task</p>
      </div>
      <Modal
        className="bg-secondary w-[400px] "
        close={() => setOpenTask(false)}
        isOpen={openTask}
      >
        <TaskModal />
      </Modal>
    </div>
  );
};
