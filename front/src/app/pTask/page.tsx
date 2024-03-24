"use client";

import { AppPTask } from "@/app/pTask/app";
import store from "@/app/pTask/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <AppPTask />
    </Provider>
  );
}
