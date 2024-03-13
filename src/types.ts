/**
 * タスク
 */
export type Task = {
  id: number;
  title: string;
  content?: string;
};

/**
 * Store
 */
export type StoreType = { tasks: Task[] };
