"use client";

import { Task } from "@/types";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton, Paper, Typography } from "@mui/material";

const styles = {
  sxTask: {
    padding: "16px",
    margin: "8px",
    backgroundColor: "#fff",
  },
  sxTitle: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  sxDescription: {
    fontSize: "14px",
  },
  sxDueDate: {
    fontSize: "12px",
    color: "#ccc",
  },
  sxActions: {
    float: "right",
  },
};

const TaskList: React.FC<{
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
}> = ({ tasks, onEditTask, onDeleteTask }) => {
  const { sxTask, sxTitle, sxDescription, sxDueDate, sxActions } = styles;

  return (
    <>
      {tasks.map((task) => (
        <Paper key={task.id} sx={sxTask}>
          <Typography sx={sxTitle}>{task.title}</Typography>
          <Typography sx={sxDescription}>{task.description}</Typography>
          <Typography sx={sxDueDate}>{task.dueDate}</Typography>
          <Box sx={sxActions}>
            <IconButton onClick={() => onEditTask(task)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => onDeleteTask(task.id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Paper>
      ))}
    </>
  );
};

export default TaskList;
