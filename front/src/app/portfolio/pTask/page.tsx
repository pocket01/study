"use client"

import { AppPTask } from "@/app/portfolio/pTask/app"
import store from "@/app/portfolio/pTask/store"
import { Provider } from "react-redux"

export default function Home() {
  return (
    <Provider store={store}>
      <AppPTask />
    </Provider>
  )
}
