import { useContext, useState } from "react";
import { TodosListContext } from "../contexts";
import { faEdit, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Todo({ title, id, deleteTodo }) {
  const [isCheck, setIsCheck] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(title);
  const { setData, data } = useContext(TodosListContext);
  function editDataValue() {
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
    setIsEdit(!isEdit);
  }
  return (
    <div className="flex justify-between items-center py-3 border-b">
      {isEdit ? (
        <div className="flex gap-10 items-center">
          <input
            className="border-2 border-black pt-1 pb-2 px-4 rounded-md"
            onChange={(e) => setEditValue(e.target.value)}
            value={editValue}
          />
          <FontAwesomeIcon
            icon={faSave}
            className="text-green-600 cursor-pointer"
            onClick={editDataValue}
          />
        </div>
      ) : (
        <div className="flex gap-10 items-center">
          <input type="checkbox" onClick={() => setIsCheck(!isCheck)} />
          <p className={`${isCheck && "line-through"}`}>{title}</p>
        </div>
      )}
      <div className="flex gap-2">
        <button
          className="text-red-700 bg-slate-200 rounded-full w-10 h-10 flex justify-center items-center text-base"
          onClick={() => deleteTodo(id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button
          className="text-blue-700 bg-slate-200 rounded-full w-10 h-10 flex justify-center items-center text-base"
          onClick={() => setIsEdit(!isEdit)}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
    </div>
  );
}
