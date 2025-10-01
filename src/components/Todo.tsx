
import TodoList from "./TodoList";


function Todo() {
    console.log("this is server componet")

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="flex item-center justify-center gap-2">

      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Todo App
      </h1>
        <img  className="w-10 h-10 rounded-full mr-4" src={`https://ui-avatars.com/api/?name=Salim%20khan&background=random&color=fff&size=40`} alt="" />
      </div>



      <TodoList />
    </div>
  );
}

export default Todo;
