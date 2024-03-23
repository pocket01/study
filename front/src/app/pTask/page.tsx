"use client";

import { AppPTask } from "@/components/AppPTask";
import store from "@/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <AppPTask />
    </Provider>
  );
}
