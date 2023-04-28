import React, { useState } from "react";
import TodoInput from "~/components/todo/TodoInput";
import TodoList from "~/components/todo/TodoList";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [isEditing, setIsEditing] = useState(false);

  const addTodo = (e) => {
    e.preventDefault();
    if (todo !== "") {
      if (editIndex === -1) {
        setTodos([...todos, todo]);
      } else {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = todo; // update the edited todo item
        setTodos(updatedTodos); // update the entire array to trigger re-rendering
        setEditIndex(-1); // clear the edit index
        setIsEditing(false); // toggle off the edit mode
      }
      setTodo("");
    }
  };

  const deleteTodo = (text: any) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  const editTodo = (index, value) => {
    console.log(`Editing todo at index ${index} with value ${value}`);
    setEditIndex(index); // set the index of the item being edited
    setTodo(value); // set the input value to the text of the selected todo item
    setIsEditing(true); // toggle on the edit mode
  };

  console.log("todos:", todos);

  return (
    <div className="mx-96 rounded-xl bg-blue-200 p-12 shadow-xl">
      <h1 className="text-center text-5xl font-black text-blue-500">ToDos</h1>

      <div className="mt-6 justify-center text-center">
        <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      </div>
      <div className="mx-28 mt-6">
        <TodoList
          list={todos}
          remove={deleteTodo}
          edit={editTodo}
          editIndex={editIndex}
          isEditing={isEditing}
          setTodo={setTodo}
        />
      </div>
    </div>
  );
};

export default Todo;
