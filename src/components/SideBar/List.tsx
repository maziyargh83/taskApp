import { useEffect, useState } from "react";
import { DropMenu } from "~/components/DropMenu";
import { db } from "~/core";
import { List as ListType } from "~/types";
import { clsx } from "clsx";
export const List = () => {
  const [listData, setListData] = useState<ListType[]>([]);
  const getData = async () => {
    const data = await db.List.toArray();
    setListData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <DropMenu title="List">
      {listData?.map((item) => (
        <ListItem {...item} />
      ))}
    </DropMenu>
  );
};

const ListItem = ({ emoji = "👀", title = "" }: ListType) => {
  return (
    <div
      className={clsx("flex items-center justify-between mt-5 rounded", {})}
    ></div>
  );
};
