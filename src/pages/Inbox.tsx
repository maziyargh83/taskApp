import { useLiveQuery } from "dexie-react-hooks";
import {
  ListHeader,
  ListHeaderSkeleton,
  SkeletonWrapper,
  TasksRenderSkeleton,
} from "~/components";
import { RenderTask } from "~/components/Task/RenderTask";
import { db } from "~/core";

export const Inbox = () => {
  const Tasks = useLiveQuery(() =>
    db.Task.filter((t) => !t.isDeleted).toArray()
  );
  console.log(Tasks);

  return (
    <div className="px-12 py-6">
      <SkeletonWrapper
        component={
          <ListHeader
            list={
              {
                emoji: "📄",
                title: "Inbox",
              } as any
            }
            view
          />
        }
        ready={true}
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
