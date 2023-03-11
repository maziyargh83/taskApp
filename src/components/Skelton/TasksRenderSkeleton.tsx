import Skeleton from "react-loading-skeleton";

export const TasksRenderSkeleton = () => {
  return (
    <div className="p-6">
      <Skeleton count={4} />
    </div>
  );
};
