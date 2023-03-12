import { useLiveQuery } from "dexie-react-hooks";
import {
  EmptyTask,
  ListHeader,
  ListHeaderSkeleton,
  SkeletonWrapper,
  TasksRenderSkeleton,
} from "~/components";
import { RenderTask, Task } from "~/components/Task/RenderTask";
import { db } from "~/core";

export const Favorite = () => {
  const Tasks = useLiveQuery(() =>
    db.Task.filter((t) => t.favorite && !t.isDeleted).toArray()
  );

  return (
    <div className="px-12 py-6">
      <SkeletonWrapper
        component={
          <ListHeader
            list={
              {
                emoji: "⭐️",
                title: "Favorite",
              } as any
            }
            view
          />
        }
        ready={true}
        skeleton={<ListHeaderSkeleton />}
      />
      <SkeletonWrapper
        component={<RenderTask enableReorder={false} tasks={Tasks!} />}
        ready={!!Tasks}
        data={Tasks!}
        empty={<EmptyTask />}
        skeleton={<TasksRenderSkeleton />}
      />
    </div>
  );
};
