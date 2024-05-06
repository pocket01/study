"use client"

import { Task } from "@/app/pTask/types"
import { Theme } from "@emotion/react"
import { Button, Link, SxProps, TextField } from "@mui/material"
import axios from "axios"
import { redirect } from "next/navigation"
import { CSSProperties, useState } from "react"

type StylsType = {
  sxForm: CSSProperties
  sxTitle: CSSProperties
  sxInput: SxProps<Theme>
  sxButton: SxProps<Theme>
}

const styles: StylsType = {
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
}

const PTaskForm: React.FC<{ onAddTask: (task: Task) => void }> = ({
  onAddTask,
}) => {
  const { sxForm, sxTitle, sxInput, sxButton } = styles
  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (title === "") {
      return
    }

    const task: Task = {
      cd: "",
      title,
      content,
    }

    axios
      .post(
        "https://localhost:8000/app/pTask/post/",
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
          onAddTask(data)
        }
      })
      .catch((e) => {
        console.error("[ERROR]" + e)
        return undefined
      })
      .finally(() => {
        setTitle("")
        setContent("")
      })
  }

  const auth = async () => {
    const result = await axios.get(
      `api/youtube/oauth/auth${window.location.search}`
    )
    if (result) redirect("/pTask")
    // console.log(process.env.YT_CREDENTIALS)
  }

  const getYtVideos = async () => {
    const result = await axios.get(
      `/api/youtube/search${window.location.search}`
    )
    return result
  }

  const getYtChannels = async () => {
    const result = await axios.get(
      `/api/youtube/channels${window.location.search}`
    )
    return result
  }

  return (
    <form style={sxForm} onSubmit={handleSubmit}>
      <h2 style={sxTitle}>タスク追加</h2>
      <TextField
        sx={sxInput}
        label="タイトル"
        value={title}
        autoComplete="on"
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        sx={sxInput}
        label="内容"
        value={content}
        multiline={true}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button variant="contained" color="primary" sx={sxButton} type="submit">
        追加
      </Button>
      <Link href="/api/youtube/oauth/cert">【テスト】Google認証</Link>
      <Button onClick={auth}>【テスト】Google認可</Button>
      <Button onClick={getYtVideos}>【テスト】Youtube動画取得</Button>
      <Button onClick={getYtChannels}>【テスト】Youtubeチャンネル取得</Button>
    </form>
  )
}

export default PTaskForm
