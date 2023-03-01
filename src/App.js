import Input from "./components/Input";
import ToDoList from "./components/TodosList";
export default function Todos() {
  return (
    <div className="flex justify-center items-center font-bold text-2xl">
      <div className="w-[40%] text-center">
        <Input />
        <ToDoList />
      </div>
    </div>
  );
}
