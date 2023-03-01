import React, { useContext, useState } from "react";
import { ToDoListContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function Input() {
  const { setData } = useContext(ToDoListContext);
  const [inputValue, setInputValue] = useState("");
  function addNewTodo(title) {
    setData((data) => [
      ...data,
      { id: data[data.length - 1]?.id + 1 || 1, title: title },
    ]);
    setInputValue("");
  }
  return (
    <div>
      <h1 className="text-6xl">Todos</h1>
      <form
        className="flex items-center text-lg w-full  shadow-xl border p-3 rounded-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="add Todos"
          className="w-full outline-none"
        />
        <button
          type="submit"
          className="bg-blue-700 text-white rounded-full w-10 h-10 flex justify-center items-center text-md"
          onClick={() => {
            if (inputValue) {
              addNewTodo(inputValue);
            }
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    </div>
  );
}
