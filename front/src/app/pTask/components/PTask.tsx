"use client"

import { deleteTask, updateTask } from "@/app/pTask/store"
import { Task } from "@/app/pTask/types"
import PBox from "@/components/client/atoms/container"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import SaveIcon from "@mui/icons-material/Save"
import {
  IconButton,
  Paper,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"

type StylesType = {
  sxTask: SxProps<Theme>
  sxActions: SxProps<Theme>
}

const styles: StylesType = {
  sxTask: {
    padding: "16px",
    margin: "8px",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
  },
  sxActions: {
    float: "right",
  },
}

const PTask: React.FC<{
  argTask: Task
}> = ({ argTask }) => {
  const dispatch = useDispatch()
  const { sxTask, sxActions } = styles
  const [isEdit, setEdit] = useState<boolean>(false)
  const [task, setTask] = useState<Task>(argTask)

  const handleEditTask = async () => {
    if (isEdit) {
      await axios
        .put(
          "http://localhost:8000/app/pTask/put/",
          { task: task },
          {
            headers: {
              "X-CSRFToken": "BNYMLtmlpfIHB35yDqgV5Up3F5X9B3Xx",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          const data = res.data
          if (data) {
            dispatch(updateTask(data))
          }
        })
        .catch((e) => {
          console.error("[ERROR]" + e)
        })
    }
    setEdit((prev) => !prev)
  }

  const handleDeleteTask = () => {
    const rtn = confirm(`「${task.cd}：${task.title}」を削除しますか？`)
    if (rtn)
      axios
        .delete("http://localhost:8000/app/pTask/delete/", {
          headers: {
            "X-CSRFToken": "BNYMLtmlpfIHB35yDqgV5Up3F5X9B3Xx",
          },
          withCredentials: true,
          data: { task: task },
        })
        .then((res) => {
          const data = res.data
          if (data) {
            dispatch(deleteTask(task))
          }
        })
        .catch((e) => {
          console.error("[ERROR]" + e)
          return undefined
        })
  }

  return (
    <>
      <Paper key={task.cd} sx={sxTask}>
        <Typography>{task.cd}</Typography>
        <TextField
          disabled={!isEdit}
          value={task.title}
          onChange={(e) =>
            setTask((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <TextField
          multiline={true}
          disabled={!isEdit}
          value={task.content}
          onChange={(e) =>
            setTask((prev) => ({ ...prev, content: e.target.value }))
          }
        />
        <PBox sx={sxActions}>
          <IconButton onClick={handleEditTask}>
            {isEdit ? <SaveIcon /> : <EditIcon />}
          </IconButton>
          <IconButton onClick={handleDeleteTask}>
            <DeleteIcon />
          </IconButton>
        </PBox>
      </Paper>
    </>
  )
}

export default PTask
