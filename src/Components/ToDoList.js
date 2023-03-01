import { faEdit, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { ToDoListContext } from "../App";

function ListTodos({ title, id, deleteTodo }) {
  const [isCheck, setIsCheck] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(title);
  const { setData, data } = useContext(ToDoListContext);
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
            className="border-2 border-black"
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
export default function ToDoList() {
  const { data, setData } = useContext(ToDoListContext);
  function deleteTodo(id) {
    let newValue = data.filter((item) => item.id !== id);
    setData(newValue);
  }
  return (
    <div>
      {data?.length === 0 && <p className="text-2xl">No Todos</p>}
      {data?.map((item, i) => {
        return <ListTodos key={item.id} {...item} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
}
