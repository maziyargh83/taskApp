import { useLiveQuery } from "dexie-react-hooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ListHeader,
  ListHeaderSkeleton,
  SkeletonWrapper,
  TasksRenderSkeleton,
} from "~/components";
import { RenderTask } from "~/components/Task/RenderTask";
import { db } from "~/core";
import { List as ListType } from "~/types";

export const List = () => {
  const { id } = useParams();
  const activeList = useLiveQuery(
    () => (id ? db.List.get(id!) : undefined),
    [id]
  );
  const Tasks = useLiveQuery(
    () => (id ? db.Task.where("categoryId").equals(id!).toArray() : []),
    [id]
  );

  return (
    <div className="px-12 py-6">
      <SkeletonWrapper
        component={<ListHeader list={activeList!} />}
        ready={!!activeList}
        skeleton={<ListHeaderSkeleton />}
      />
      <SkeletonWrapper
        component={<RenderTask tasks={Tasks!} />}
        ready={!!Tasks}
        skeleton={<TasksRenderSkeleton />}
      />
    </div>
  );
};
