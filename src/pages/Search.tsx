import { useLiveQuery } from "dexie-react-hooks";
import { useState } from "react";
import {
  ListHeader,
  ListHeaderSkeleton,
  SkeletonWrapper,
  TasksRenderSkeleton,
} from "~/components";
import { RenderTask } from "~/components/Task/RenderTask";
import { db } from "~/core";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const Tasks = useLiveQuery(() => {
    const pattern = `${searchQuery}`;
    const regex = new RegExp(pattern);
    return db.Task.filter((item) => regex.test(item.title)).toArray();
  }, [searchQuery]);

  return (
    <div className="px-12 py-6">
      <SkeletonWrapper
        component={
          <ListHeader
            list={
              {
                emoji: "🔎",
                title: "Search",
              } as any
            }
            view
          />
        }
        ready={true}
        skeleton={<ListHeaderSkeleton />}
      />
      <div>
        <input type="text" onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <SkeletonWrapper
        component={<RenderTask tasks={Tasks!} />}
        ready={!!Tasks}
        skeleton={<TasksRenderSkeleton />}
      />
    </div>
  );
};
