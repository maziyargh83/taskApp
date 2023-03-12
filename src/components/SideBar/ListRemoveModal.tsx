import { useLiveQuery } from "dexie-react-hooks";
import { Button } from "~/components/Button";
import { db } from "~/core";

interface ListRemoveModalProps {
  cancel: () => void;
  ok: () => void;
  id: string;
}
export const ListRemoveModal = ({ id, cancel, ok }: ListRemoveModalProps) => {
  const count = useLiveQuery(() =>
    db.Task.where("categoryId").equals(id).count()
  );
  return (
    <div className="flex-1 h-full flex-col text-tertiary justify-between flex">
      <p className="text-center">Remove {count} Tasks ?</p>
      <div className="flex justify-between space-x-2">
        <Button onClick={cancel}>No</Button>
        <Button onClick={ok}>Yes</Button>
      </div>
    </div>
  );
};
