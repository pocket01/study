'use client'

import { Task } from '@/app/portfolio/pTask/types'
import { Theme } from '@emotion/react'
import { Button, SxProps, TextField } from '@mui/material'
import axios from 'axios'
import { CSSProperties, FormEventHandler, useState } from 'react'

type StylsType = {
  sxForm: CSSProperties
  sxTitle: CSSProperties
  sxInput: SxProps<Theme>
  sxButton: SxProps<Theme>
}

const styles: StylsType = {
  sxForm: {
    padding: '16px',
    margin: '8px',
    backgroundColor: '#fff',
  },
  sxTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  sxInput: {
    width: '100%',
  },
  sxButton: {
    marginTop: '16px',
  },
}

const PTaskForm: React.FC<{ onAddTask: (task: Task) => void }> = ({
  onAddTask,
}) => {
  const { sxForm, sxTitle, sxInput, sxButton } = styles
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const handleSubmit = () => {
    if (title === '') {
      return
    }

    const task: Task = {
      cd: '',
      title,
      content,
    }

    axios
      .post('http://localhost:8080/app/pTask/', task, {
        withCredentials: true,
      })
      .then((res) => {
        const data = res.data
        if (data) {
          onAddTask(data)
        }
      })
      .catch((e) => {
        console.error('[ERROR]' + e)
        return undefined
      })
      .finally(() => {
        setTitle('')
        setContent('')
      })
  }

  return (
    <>
      <h2 style={sxTitle}>タスク追加</h2>
      <TextField
        sx={sxInput}
        label='タイトル'
        value={title}
        autoComplete='on'
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        sx={sxInput}
        label='内容'
        value={content}
        multiline={true}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button
        variant='contained'
        color='primary'
        sx={sxButton}
        onClick={handleSubmit}
      >
        追加
      </Button>
    </>
  )
}

export default PTaskForm
