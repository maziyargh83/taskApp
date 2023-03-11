import clsx from "clsx";
import { convertDateToRelative } from "~/helper/date";
import { STATUS, Task as TaskType } from "~/types";
import * as Checkbox from "@radix-ui/react-checkbox";
import { FiCheck, FiImage, FiStar } from "react-icons/fi";
import { updateMany, updateTask } from "~/core";
import { toast } from "react-toastify";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { RxDragHandleDots2 } from "react-icons/rx";
import { ContextMenu } from "~/components/ContextMenu";
import { Modal } from "~/components/Modal";
import { TaskModal } from "~/components/Task/TaskModal";
import { Reorder, useDragControls } from "framer-motion";
interface RenderTaskProps {
  tasks: TaskType[];
}
interface TaskProps {
  task: TaskType;
}
export const RenderTask = ({ tasks }: RenderTaskProps) => {
  const updateOrder = (data: TaskType[]) => {
    const task = data.map((res, index) => ({ ...res, order: index + 1 }));
    updateMany(task);
  };
  return (
    <div className="mt-10">
      <Reorder.Group
        axis="y"
        onReorder={(e) => {
          updateOrder(e);
        }}
        values={tasks}
      >
        {tasks
          .sort((a, b) => a.order - b.order)
          .map((data) => {
            return <Task key={data.objectId} task={data} />;
          })}
      </Reorder.Group>
    </div>
  );
};
interface TaskProps {
  task: TaskType;
}
export const Task = ({ task }: TaskProps) => {
  const date = useMemo(() => {
    return convertDateToRelative(task.createDate);
  }, [task.createDate]);
  const [showEdit, setShowEdit] = useState(false);
  const checked = useMemo(() => {
    return task.status === "DONE";
  }, [task]);
  const updateCheck = async (isChecked: boolean) => {
    const status: keyof typeof STATUS = isChecked ? "DONE" : "PENDING";
    await updateTask({ ...task, status });
    toast("Succeed", {
      type: "success",
    });
  };
  const toggleFavorite = async () => {
    await updateTask({ ...task, favorite: !task.favorite });
    toast("Succeed", {
      type: "success",
    });
  };
  const update = async (data: Partial<TaskType>) => {
    await updateTask({ ...task, ...data });
    toast("Succeed", {
      type: "success",
    });
    setShowEdit(false);
  };
  const dragControls = useDragControls();
  const iRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const touchHandler: React.TouchEventHandler<HTMLElement> = (e) =>
      e.preventDefault();

    const iTag = iRef.current;

    if (iTag) {
      //@ts-ignore
      iTag.addEventListener("touchstart", touchHandler, { passive: false });

      return () => {
        //@ts-ignore
        iTag.removeEventListener("touchstart", touchHandler, {
          passive: false,
        });
      };
    }
    return;
  }, [iRef]);
  return (
    <Fragment>
      <Modal
        className="bg-secondary w-[400px]"
        close={() => setShowEdit(false)}
        isOpen={showEdit}
      >
        <TaskModal task={task} save={update} />
      </Modal>
      <Reorder.Item
        ref={iRef}
        value={task}
        id={task.objectId}
        dragListener={false}
        dragControls={dragControls}
        className={clsx("flex items-center rounded py-1 px-2 mt-2 bg-body", {
          "bg-light": checked,
        })}
      >
        <RxDragHandleDots2
          onPointerDown={(event) => dragControls.start(event)}
          size={20}
          className="text-primary mr-3"
        />
        <Checkbox.Root
          className={clsx(
            "flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-transparent border-light border outline-none ",
            {
              "bg-primary": checked,
            }
          )}
          onCheckedChange={(isChecked) => updateCheck(isChecked)}
          defaultChecked={checked}
          checked={checked}
        >
          <Checkbox.Indicator className="text-white">
            <FiCheck size={20} />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <p
          className={clsx("text-reverse ml-3", {
            "line-through": checked,
          })}
        >
          {task.title}
        </p>
        <div className="bg-light inline-flex p-1 mx-3 rounded">
          <span
            className={clsx("bg-light  font-bold text-sm", {
              "text-orange-400": date == "Today",
              "text-purple-400": date == "Yesterday",
              "text-teal-400": date != "Yesterday" && date != "Today",
            })}
          >
            {date}
          </span>
        </div>
        {task.image && <FiImage className="text-reverse" size={20} />}

        <div className="flex-1" />
        <div onClick={toggleFavorite} className="cursor-pointer">
          <FiStar
            className={clsx("mx-4 text-yellow-400 ", {
              "fill-yellow-400": task.favorite,
            })}
          />
        </div>
        <ContextMenu update={() => setShowEdit(true)} />
      </Reorder.Item>
    </Fragment>
  );
};
