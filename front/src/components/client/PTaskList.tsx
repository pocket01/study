"use client";

import { Task } from "@/types";
import PTask from "./PTask";

const TaskList: React.FC<{
  tasks: Task[];
}> = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <PTask argTask={task} />
      ))}
    </>
  );
};

export default TaskList;
