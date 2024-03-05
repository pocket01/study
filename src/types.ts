export type Task = {
  id: number;
  title: string;
  description?: string;
  dueDate?: string;
  priority?: string;
  category?: string;
  project?: string;
};

export type StateType = { tasks: Task[] };
