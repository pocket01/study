import { createTask, deleteTask, updateTask } from "@/store";
import { StoreType, Task } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "./client/TaskForm";
import TaskList from "./client/TaskList";

export const AppStickyNote = () => {
  const dispatch = useDispatch();
  const tasks = useSelector<StoreType, Task[]>((state) => state.tasks);

  const handleAddTask = (task: Task) => {
    dispatch(createTask(task));
  };

  const handleEditTask = (task: Task) => {
    dispatch(updateTask(task));
  };

  const handleDeleteTask = (id: number) => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <h1>付箋風タスク管理アプリケーション</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};
