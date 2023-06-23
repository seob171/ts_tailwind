import React from "react";

type State = "TASK_INBOX" | "TASK_PINNED" | "TASK_ARCHIVED";

export type TaskProps = {
  task: { id: string; title: string; state: State; updatedAt?: Date };
  onArchiveTask?: (id: string) => void;
  onPinTask?: (id: string) => void;
};
const Task = ({ task: { title } }: TaskProps) => {
  return (
    <div className={"list-item"}>
      <input type="text" value={title} readOnly />
    </div>
  );
};

export default Task;
