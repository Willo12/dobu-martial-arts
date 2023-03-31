interface TodoInputProps {
  todo: any;
  setTodo: any;
  addTodo: any;
}

const TodoInput = ({ todo, setTodo, addTodo }: TodoInputProps) => {
  return (
    <form
      className="mx-20 flex rounded-lg bg-white text-lg  "
      onSubmit={(e) => {
        e.preventDefault();
        addTodo();
      }}
    >
      <input
        type="text"
        name="todo"
        placeholder="put in a new todo"
        className="placeholder-offset h-10 w-full rounded-lg pl-4"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      ></input>
      <div className="flex h-10 items-center justify-end">
        <button
          onClick={addTodo}
          className=" mr-6 h-6 w-12 rounded-md bg-blue-400 text-sm text-white hover:bg-blue-300"
        >
          ADD
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
