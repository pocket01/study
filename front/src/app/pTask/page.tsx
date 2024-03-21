"use client";

import { AppStickyNote } from "@/components/AppStickyNote";
import store from "@/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <AppStickyNote />
    </Provider>
  );
}
