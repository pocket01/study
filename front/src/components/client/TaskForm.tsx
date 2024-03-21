"use client";

import { Task } from "@/types";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

const styles = {
  sxForm: {
    padding: "16px",
    margin: "8px",
    backgroundColor: "#fff",
  },
  sxTitle: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  sxInput: {
    width: "100%",
  },
  sxButton: {
    marginTop: "16px",
  },
};

const TaskForm: React.FC<{ onAddTask: (task: Task) => void }> = ({
  onAddTask,
}) => {
  const { sxForm, sxTitle, sxInput, sxButton } = styles;
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (title === "") {
      return;
    }

    const task: Task = {
      cd: "",
      title,
      content: "",
    };

    onAddTask(task);

    setTitle("");
  };

  return (
    <form style={sxForm} onSubmit={handleSubmit}>
      <h2 style={sxTitle}>タスク追加</h2>
      <TextField
        sx={sxInput}
        label="タイトル"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button variant="contained" color="primary" sx={sxButton} type="submit">
        追加
      </Button>
    </form>
  );
};

export default TaskForm;
