import { configureStore, createSlice } from '@reduxjs/toolkit'
import { StoreType } from './types'

const initialState: StoreType = {
  tasks: [],
}

/**
 * タスク管理
 */
const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    setTasks: (state, action) => {
      return {
        ...state,
        tasks: [...action.payload],
      }
    },
    createTask: (state, action) => {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }
    },
    updateTask: (state, action) => {
      const task = state.tasks.find((task) => task.cd === action.payload.id)
      if (!task) return
      task.title = action.payload.title
      return state
    },
    deleteTask: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.cd !== action.payload.cd),
      }
    },
  },
})

const store = configureStore({
  reducer: taskSlice.reducer,
})

export const { setTasks, createTask, updateTask, deleteTask } =
  taskSlice.actions

export default store
