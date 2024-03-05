import { Task } from "../types";

const tasks: Task[] = [
  {
    id: 1,
    title: "タスク1",
    description: "これはタスク1の説明です",
    dueDate: "2024-03-08",
    priority: "high",
    category: "仕事",
    project: "プロジェクトA",
  },
  {
    id: 2,
    title: "タスク2",
    description: "これはタスク2の説明です",
    dueDate: "2024-03-10",
    priority: "medium",
    category: "プライベート",
    project: "買い物",
  },
];

export default tasks;
