import React, { createContext, useState } from "react";
import Input from "./Components/Input";
import ToDoList from "./Components/ToDoList";
const DATA = [
  {
    id: 1,
    title: "Make a todo app",
  },
  {
    id: 2,
    title: "Make a calculator app",
  },
];
export const ToDoListContext = createContext(DATA);
export default function Todos() {
  const [data, setData] = useState(DATA);
  let value = {
    data,
    setData,
  };

  return (
    <ToDoListContext.Provider value={value}>
      <div className="flex justify-center items-center font-bold text-2xl">
        <div className="w-[40%] text-center">
          <Input />
          <ToDoList />
        </div>
      </div>
    </ToDoListContext.Provider>
  );
}
