import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ContextMenu } from "~/components/ContextMenu/ContextMenu";
import { Modal } from "~/components/Modal";
import { ListRemoveModal } from "~/components/SideBar";
import { CreateList } from "~/components/SideBar/ListModal";
import { TaskModal } from "~/components/Task/TaskModal";
import { addTask, removeTaskAndList, updateList } from "~/core";
import { capitalizeFirstLetter } from "~/helper/string";
import { List, Task } from "~/types";

interface ListHeaderProps {
  list: List;
  view?: boolean;
}
export const ListHeader = ({ list, view = false }: ListHeaderProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [openTask, setOpenTask] = useState(false);
  const nav = useNavigate();
  const remove = async () => {
    await removeTaskAndList(list.objectId);
    nav("/inbox");
  };
  const updateListData = async (data: Partial<List>) => {
    await updateList({ ...list, ...data });
    toast("succeed", {
      type: "success",
    });
    setOpenModal(false);
  };
  const saveTask = async ({
    title,
    favorite,
    status,
    image,
  }: Partial<Task>) => {
    await addTask({
      title,
      categoryId: list.objectId,
      favorite,
      status,
      image,
    });
    toast("succeed", {
      type: "success",
    });
    setOpenTask(false);
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
        {!view && (
          <ContextMenu
            deleteItem={() => setRemoveModal(true)}
            update={() => setOpenModal(true)}
          />
        )}
      </div>
      {!view && (
        <div
          onClick={() => setOpenTask(true)}
          className="flex space-x-3 items-center mt-10 cursor-pointer"
        >
          <span className="text-primary text-lg">+</span>
          <p className="text-tertiary  text-base">New Task</p>
        </div>
      )}
      <Modal
        className="bg-secondary w-[400px]"
        close={() => setOpenTask(false)}
        isOpen={openTask}
      >
        <TaskModal save={saveTask} />
      </Modal>
      <Modal
        className="bg-secondary w-[200px] h-[150px]"
        close={() => setRemoveModal(false)}
        isOpen={removeModal}
      >
        <ListRemoveModal
          id={list.objectId}
          cancel={() => {
            setRemoveModal(false);
          }}
          ok={remove}
        />
      </Modal>
    </div>
  );
};
