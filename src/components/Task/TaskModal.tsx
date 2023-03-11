import clsx from "clsx";
import { useState } from "react";
import { FiStar } from "react-icons/fi";
import { toast } from "react-toastify";
import { Button } from "~/components/Button";
import { ImagePicker } from "~/components/ImagePicker";
import { Status } from "~/components/Status/Status";
import { STATUS, Task } from "~/types";
interface TaskModalProps {
  save: (item: Partial<Task>) => void;
}
export const TaskModal = ({ save }: TaskModalProps) => {
  const [status, setStatus] = useState<keyof typeof STATUS>("PENDING");
  const [image, setImage] = useState<ArrayBuffer | string | null | undefined>(
    undefined
  );
  const [favorite, setFavorite] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const changeStatus = () => {
    if (status == "PENDING") {
      setStatus("DONE");
    } else {
      setStatus("PENDING");
    }
  };
  const saveTask = () => {
    if (title.length >= 3) {
      save({
        title,
        image,
        favorite,
        status,
      });
    } else {
      toast("title should at least 3 characters", {
        type: "error",
      });
    }
  };
  return (
    <div className="flex flex-1 flex-col h-full">
      <div className="w-full">
        <p className="text-tertiary">Title</p>
        <div className="flex  mt-2 items-center">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title"
            className="px-2  flex-1 placeholder:text-tertiary text-tertiary bg-transparent border  rounded-md"
          />
          <div onClick={() => setFavorite((prev) => !prev)}>
            <FiStar
              className={clsx("mx-4 text-yellow-400 ", {
                "fill-yellow-400": favorite,
              })}
            />
          </div>
        </div>
      </div>

      <p className="text-tertiary mt-2">Status</p>
      <div>
        <Status onClick={changeStatus} type={status} />
      </div>
      <p className="text-tertiary mt-2">Image</p>
      <div className="flex-1 mt-2 min-h-[100px] max-h-[100px]">
        <ImagePicker image={image} save={setImage} />
      </div>
      <div className="mt-3">
        <Button
          className="w-full border-primary hover:bg-primary"
          theme="primary"
          onClick={saveTask}
        >
          save
        </Button>
      </div>
    </div>
  );
};
