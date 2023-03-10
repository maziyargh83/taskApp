import Skeleton from "react-loading-skeleton";

export const ListHeaderSkeleton = () => {
  return (
    <div className="p-6">
      <div className="mb-4">
        <Skeleton circle width={70} height={70} />
      </div>
      <Skeleton count={2} />
    </div>
  );
};
