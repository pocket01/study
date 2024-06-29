'use client'

import { Task } from '@/app/portfolio/pTask/types'
import PTask from './PTask'

const TaskList: React.FC<{
  tasks: Task[]
}> = ({ tasks }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <PTask key={index} argTask={task} />
      ))}
    </>
  )
}

export default TaskList
