import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import Todo from "./Todo";

export default function TodosList() {
  const { data } = useContext(TodosContext);

  return (
    <div>
      {data.length === 0 && <p className="text-2xl">No Todos</p>}
      {data.map((item) => {
        return <Todo key={item.id} {...item} />;
      })}
    </div>
  );
}
