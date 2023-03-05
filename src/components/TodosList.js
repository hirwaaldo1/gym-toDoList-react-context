import { useContext } from "react";
import { TodosListContext } from "../contexts/TodosList";
import Todo from "./Todo";

export default function TodosList() {
  const { data } = useContext(TodosListContext);

  return (
    <div>
      {data.length === 0 && <p className="text-2xl">No Todos</p>}
      {data.map((item) => {
        return <Todo key={item.id} {...item} />;
      })}
    </div>
  );
}
