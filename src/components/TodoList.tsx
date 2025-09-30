
"use client"
import { addTodo, deleteTodo, toggleTodo } from "@/lib/features/todos/todoSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useState } from "react";


function TodoList() {
      const dispatch = useAppDispatch();
      const [inputTodo, setinputTodods] = useState("");
      const allTodos=useAppSelector((state) => state.todos.todos);

      console.log("all todos is ", allTodos);
      console.log("this is client component");
  return (
    <>
          {/* Input and Add Button */}
      <div className="flex mb-4 gap-2">
        <input
          type="text"
          placeholder="Add a new todo..."
          value={inputTodo}
          onChange={(e) => setinputTodods(e.target.value)}
          className="flex-1 p-2 text-black border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
         className="px-4 py-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-600 transition"
         onClick={()=>
         {
             dispatch(addTodo(inputTodo))
             setinputTodods("")
         }
        }
         >
          Add
        </button>
      </div>
   <ul className="space-y-2">
        
        {
            allTodos.length>0?allTodos.map((todo) => (
                <li key={todo.id} className="flex items-center justify-between bg-white p-2 rounded shadow-sm">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4"  checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))}/>
                    <span className={ `text-gray-800 ${todo.completed ? "line-through" : ""}`}>{todo.text}</span>
                  </div>
                  <button className="text-red-500 cursor-pointer hover:text-red-700" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                </li>
              )):"No todos found"
        }

        {/* <li className="flex items-center justify-between bg-white p-2 rounded shadow-sm">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-gray-800 line-through">Completed Todo</span>
          </div>
          <button className="text-red-500 hover:text-red-700">Delete</button>
        </li> */}
      </ul>
    </>
  )
}

export default TodoList
