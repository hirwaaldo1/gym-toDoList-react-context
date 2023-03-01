import { useContext } from "react";
import { TodosListContext } from "../contexts";
import Todo from "./Todo";

export default function TodosList() {
  const { data, setData } = useContext(TodosListContext);
  function deleteTodo(id) {
    let newValue = data.filter((item) => item.id !== id);
    setData(newValue);
  }
  return (
    <div>
      {data?.length === 0 && <p className="text-2xl">No Todos</p>}
      {data?.map((item, i) => {
        return <Todo key={item.id} {...item} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
}
