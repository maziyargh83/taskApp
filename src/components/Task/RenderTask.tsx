import { Task as TaskType } from "~/types";

interface RenderTaskProps {
  tasks: TaskType[];
}
interface TaskProps {
  task: TaskType;
}
export const RenderTask = ({ tasks }: RenderTaskProps) => {
  return (
    <div className="mt-10">
      {tasks.map((item) => {
        return <Task key={item.objectId} task={item} />;
      })}
    </div>
  );
};
export const Task = ({ task }: TaskProps) => {
  return (
    <div className="flex">
      <p className="text-reverse">{task.title}</p>
    </div>
  );
};
