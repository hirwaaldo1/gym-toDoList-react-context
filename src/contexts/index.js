import { createContext, useState } from "react";
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
export const TodosListContext = createContext(DATA);

export default function TodosListContextProvider({ children }) {
  const [data, setData] = useState(DATA);
  let value = { data, setData };
  return (
    <TodosListContext.Provider value={value}>
      {children}
    </TodosListContext.Provider>
  );
}
