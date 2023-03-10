import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListHeader, ListHeaderSkeleton, SkeletonWrapper } from "~/components";
import { getList } from "~/core";
import { List as ListType } from "~/types";

export const List = () => {
  const { id } = useParams();
  const [activeList, setActiveList] = useState<ListType>();
  const getData = async () => {
    const res = await getList(id!);
    setActiveList(res);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(activeList);

  return (
    <div className="px-12 py-6">
      <SkeletonWrapper
        component={<ListHeader list={activeList!} />}
        ready={!!activeList}
        skeleton={<ListHeaderSkeleton />}
      />
    </div>
  );
};
