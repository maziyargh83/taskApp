import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "~/components/Button";
import { List } from "~/types";

interface CreateList {
  type: "update" | "create";
  addList: (list: Partial<List>) => void;
}
export const CreateList = ({ type, addList }: CreateList) => {
  const [emojiData, setEmojiData] = useState("👀");
  const [titleData, setTitleData] = useState("");
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const save = () => {
    if (titleData.length >= 3) {
      addList({
        emoji: emojiData,
        title: titleData,
      });
    } else {
      toast("title should at least 3 characters", {
        type: "error",
      });
    }
  };
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex space-x-3">
        <div className="relative">
          <button
            className="p-1 px-2 border border-tertiary rounded-md"
            onClick={() => setShowPicker((prev) => !prev)}
          >
            {emojiData}
          </button>
          {showPicker && (
            <div className="absolute">
              <EmojiPicker
                onEmojiClick={(e) => {
                  setEmojiData(e.emoji);
                  setShowPicker(false);
                }}
              />
            </div>
          )}
        </div>
        <div className="flex-1 flex">
          <input
            className="bg-transparent border rounded flex-1 border-tertiary placeholder:text-tertiary focus:text-tertiary text-tertiary placeholder:px-2 px-2"
            type="text"
            value={titleData}
            placeholder="Enter List Title"
            onChange={(e) => setTitleData(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-10 flex">
        <Button onClick={save}>Create List</Button>
      </div>
    </div>
  );
};
