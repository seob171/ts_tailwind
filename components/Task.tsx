import React from "react";

type State = "TASK_INBOX" | "TASK_PINNED" | "TASK_ARCHIVED";

export type TaskProps = {
  task: { id: string; title: string; state: State; updatedAt?: Date };
  onArchiveTask?: (id: string) => void;
  onPinTask?: (id: string) => void;
};
const Task = ({ task: { title, state } }: TaskProps) => {
  const styles: { [K in State]: string } = {
    TASK_INBOX: "border-black",
    TASK_PINNED: "border-blue-400",
    TASK_ARCHIVED: "border-red-400",
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        readOnly
        className={`p-4 text-black rounded-xl border-2 ${styles[state]}`}
      />
    </div>
  );
};

export default Task;
