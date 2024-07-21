import { createTask, setTasks } from '@/app/portfolio/pTask/store'
import { StoreType, Task } from '@/app/portfolio/pTask/types'
import { Typography } from '@mui/material'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PTaskForm from './components/PTaskForm'
import TaskList from './components/PTaskList'

export const AppPTask = () => {
  const dispatch = useDispatch()
  const tasks = useSelector<StoreType, Task[]>((state) => state.tasks)

  const handleAddTask = (task: Task) => {
    dispatch(createTask(task))
  }

  useEffect(() => {
    if (!tasks.length) {
      const cancelToken = axios.CancelToken.source()
      axios
        .get<Task[]>('http://localhost:8080/app/pTask/', {
          cancelToken: cancelToken.token,
        })
        .then((res) => {
          const data = res.data
          if (data && data.length) {
            dispatch(setTasks(data))
          }
        })
        .catch((e) => {
          return undefined
        })
      return () => {
        cancelToken.cancel()
      }
    }
  }, [])

  return (
    <>
      <Typography>タスク管理</Typography>
      <PTaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </>
  )
}
