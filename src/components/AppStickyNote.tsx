import { createTask, deleteTask, updateTask } from "@/store";
import { StoreType, Task } from "@/types";
import axios from "axios";
import { useEffect } from "react";
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

  const handleDeleteTask = (cd: string) => {
    dispatch(deleteTask(cd));
  };

  // /**
  //  * タスク取得API呼び出し
  //  * @returns タスク
  //  */
  // const getApiTasks = useCallback(async () => {
  // }, []);

  useEffect(() => {
    if (!tasks.length) {
      const cancelToken = axios.CancelToken.source();
      axios
        .get<Task>("http://localhost:8000/app/pTask/", {
          cancelToken: cancelToken.token,
        })
        .then((res) => {
          const data = res.data;
          console.log("[test]value:" + JSON.stringify(data));
          if (data) {
            dispatch(createTask(data));
          }
        })
        .catch((e) => {
          console.error("[ERROR]" + e);
          return undefined;
        });
      return () => {
        cancelToken.cancel();
      };
    }
  }, []);

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
