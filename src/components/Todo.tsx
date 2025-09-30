
import TodoList from "./TodoList";


function Todo() {
    console.log("this is server componet")

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Todo App
      </h1>



      <TodoList />
    </div>
  );
}

export default Todo;
