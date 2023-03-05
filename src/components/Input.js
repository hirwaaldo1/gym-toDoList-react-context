import { useContext, useState } from "react";
import { TodosListContext } from "../contexts/TodosList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function Input() {
  const { addNewTodo } = useContext(TodosListContext);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1 className="text-6xl my-5">Todos</h1>
      <form
        className="flex items-center text-lg w-full  shadow-xl border py-2 px-4 rounded-full"
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
              setInputValue("");
            }
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    </div>
  );
}
