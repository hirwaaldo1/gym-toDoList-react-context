import { useContext, useState } from "react";
import { TodosListContext } from "../contexts";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Todo({ title, id }) {
  const { editDataValue, deleteTodo } = useContext(TodosListContext);
  const [isCheck, setIsCheck] = useState(false);
  return (
    <div className="flex justify-between items-center py-3 border-b">
      <div className="flex gap-2">
        <input type="checkbox" onClick={() => setIsCheck(!isCheck)} />
        <blockquote
          className=" pt-1 pb-2 px-4 rounded-md"
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={(e) => editDataValue(id, e.target.textContent)}
        >
          <p className={isCheck && "line-through"}>{title}</p>
        </blockquote>
      </div>

      <div className="flex gap-2">
        <button
          className="text-red-700 bg-slate-200 rounded-full w-10 h-10 flex justify-center items-center text-base"
          onClick={() => deleteTodo(id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
