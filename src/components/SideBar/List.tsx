import { Fragment, useEffect, useState } from "react";
import { DropMenu } from "~/components/DropMenu";
import { createList, getLists } from "~/core";
import { List as ListType } from "~/types";
import { clsx } from "clsx";
import { Modal } from "~/components/Modal";
import { CreateList } from "~/components/SideBar/ListModal";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
export const List = () => {
  const [listData, setListData] = useState<ListType[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const getData = async () => {
    const data = await getLists();
    setListData(data);
  };
  const addList = async (data: Partial<ListType>) => {
    try {
      await createList(data);
      setOpenModal(false);
      getData();
      toast("Succeed", {
        type: "success",
      });
    } catch (error) {
      toast("Something went wrong", {
        type: "error",
      });
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Fragment>
      <DropMenu title="List">
        {listData?.map((item) => (
          <ListItem key={item.objectId} {...item} />
        ))}
        <ListItem
          emoji="+"
          create={() => setOpenModal(true)}
          titleClassName="text-primary"
          title="New List"
        />
      </DropMenu>
      <Modal
        className="bg-secondary w-[400px] h-48"
        close={() => setOpenModal(false)}
        isOpen={openModal}
      >
        <CreateList addList={addList} type="create" />
      </Modal>
    </Fragment>
  );
};
interface ListItemProps {
  titleClassName?: string;
  create?: () => void;
}
const ListItem = ({
  emoji = "👀",
  title = "",
  objectId,
  titleClassName,
  create,
}: Partial<ListType> & ListItemProps) => {
  return (
    <NavLink
      to={"/list/" + objectId}
      onClick={(e) => {
        if (!objectId) {
          e.preventDefault();
          create && create();
        }
      }}
      className={({ isActive }) =>
        clsx("flex items-center space-x-3 px-5 mt-4 rounded", {
          "bg-[#a1a1a33d] text-tertiary": isActive,
        })
      }
    >
      <span
        className={clsx("", {
          [titleClassName!]: !!titleClassName,
        })}
      >
        {emoji}
      </span>
      <p>{title}</p>
    </NavLink>
  );
};
