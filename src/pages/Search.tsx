import { useLiveQuery } from "dexie-react-hooks";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
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
      <div className="flex items-center border rounded-md mt-10 p-2">
        <input
          className="flex-1 bg-transparent outline-none text-tertiary"
          placeholder="Enter Search KeyWord"
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FiSearch className="text-tertiary mx-3" size={20} />
      </div>
      <SkeletonWrapper
        component={<RenderTask enableReorder={false} tasks={Tasks!} />}
        ready={!!Tasks}
        skeleton={<TasksRenderSkeleton />}
      />
    </div>
  );
};
