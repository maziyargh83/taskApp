import { useLiveQuery } from "dexie-react-hooks";
import {
  ListHeader,
  ListHeaderSkeleton,
  SkeletonWrapper,
  TasksRenderSkeleton,
} from "~/components";
import { RenderTask } from "~/components/Task/RenderTask";
import { db } from "~/core";

export const Trash = () => {
  const Tasks = useLiveQuery(() =>
    db.Task.filter((t) => t.isDeleted).toArray()
  );
  console.log(Tasks);

  return (
    <div className="px-12 py-6">
      <SkeletonWrapper
        component={
          <ListHeader
            list={
              {
                emoji: "🗑️",
                title: "Trash",
              } as any
            }
            view
          />
        }
        ready={true}
        skeleton={<ListHeaderSkeleton />}
      />
      <SkeletonWrapper
        component={
          <RenderTask
            enableReorder={false}
            enableStatus={false}
            enableStar={false}
            enableRecover={true}
            tasks={Tasks!}
          />
        }
        ready={!!Tasks}
        skeleton={<TasksRenderSkeleton />}
      />
    </div>
  );
};
