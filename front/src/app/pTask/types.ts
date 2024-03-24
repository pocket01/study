/**
 * タスク
 */
export type Task = {
  cd: string;
  title: string;
  content?: string;
};

/**
 * Store
 */
export type StoreType = { tasks: Task[] };
