import { useEffect, useState } from "react";
import { DropMenu } from "~/components/DropMenu";
import { db } from "~/core";
import { Label as LabelType } from "~/types";
import { clsx } from "clsx";
export const Label = () => {
  const [LabelData, setLabelData] = useState<LabelType[]>([]);
  const getData = async () => {
    const data = await db.Label.toArray();
    setLabelData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <DropMenu title="Label">
      {LabelData?.map((item) => (
        <LabelItem {...item} />
      ))}
    </DropMenu>
  );
};

const LabelItem = ({ emoji = "👀", title = "" }: LabelType) => {
  return (
    <div
      className={clsx("flex items-center justify-between mt-5 rounded", {})}
    ></div>
  );
};
