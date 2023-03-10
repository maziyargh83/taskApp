import { Fragment, useEffect, useState } from "react";
import { DropMenu } from "~/components/DropMenu";
import { db } from "~/core";
import { List as ListType } from "~/types";
import { clsx } from "clsx";
import { Modal } from "~/components/Modal";
import { CreateList } from "~/components/SideBar/ListModal";
export const List = () => {
  const [listData, setListData] = useState<ListType[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(true);
  const getData = async () => {
    const data = await db.List.toArray();
    setListData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Fragment>
      <DropMenu title="List">
        {listData?.map((item) => (
          <ListItem {...item} />
        ))}
      </DropMenu>
      <Modal
        className="bg-secondary w-[400px]"
        close={() => setOpenModal(false)}
        isOpen={openModal}
      >
        <CreateList />
      </Modal>
    </Fragment>
  );
};

const ListItem = ({ emoji = "👀", title = "" }: ListType) => {
  return (
    <div
      className={clsx("flex items-center justify-between mt-5 rounded", {})}
    ></div>
  );
};
