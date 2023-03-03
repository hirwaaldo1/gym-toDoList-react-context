import { createContext, useState } from "react";
export const TodosListContext = createContext([]);

export default function TodosListContextProvider({ children }) {
  const [data, setData] = useState([]);
  function addNewTodo(title) {
    setData((data) => [
      ...data,
      { id: data[data.length - 1]?.id + 1 || 1, title: title },
    ]);
  }
  function editDataValue(id, editValue) {
    let newData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          title: editValue,
        };
      }
      return item;
    });
    setData(newData);
  }
  function deleteTodo(id) {
    let newValue = data.filter((item) => item.id !== id);
    setData(newValue);
  }
  let value = { data, setData, addNewTodo, editDataValue, deleteTodo };
  return (
    <TodosListContext.Provider value={value}>
      {children}
    </TodosListContext.Provider>
  );
}
