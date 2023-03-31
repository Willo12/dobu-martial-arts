import { useState } from "react";
import { BsXCircleFill } from "react-icons/bs";
import {
  HiOutlineCheckCircle,
  HiOutlineDotsCircleHorizontal,
  HiOutlineXCircle,
} from "react-icons/hi";

interface ToDoListProps {
  list: string[];
  remove: (text: string) => void;
  edit: (index: number, text: string) => void;
  setTodo: (list: string[]) => void;
}

const TodoList = ({ list, remove, edit, setTodo }: ToDoListProps) => {
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState("");

  const handleEdit = (index: number, value: string) => {
    setEditIndex(index);
    setEditValue(value);
  };

  const handleCancelEdit = () => {
    setEditIndex(-1);
    setEditValue("");
  };

  const handleSaveEdit = (index: number, value: string) => {
    const updatedList = [...list];
    updatedList[index] = value;
    setTodo(updatedList);
    handleCancelEdit();
  };

  return (
    <>
      {list?.length > 0 ? (
        <ul>
          {list.map((entry, index) => (
            // eslint-disable-next-line react/jsx-key
            <div
              key={index}
              className=" flex h-10 w-full justify-between justify-items-center rounded-sm bg-gray-100 px-10"
            >
              {editIndex === index ? (
                <div className="flex w-full items-center">
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-2 py-1 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <div className="flex justify-center space-x-5">
                    <button
                      onClick={() => handleSaveEdit(index, editValue)}
                      className="text-green-600 hover:text-green-700"
                    >
                      <HiOutlineCheckCircle size={30} />
                    </button>

                    <button
                      onClick={handleCancelEdit}
                      className="text-red-600 hover:text-red-700"
                    >
                      <HiOutlineXCircle size={30} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex w-full items-center">
                  <div className="flex items-center">
                    <li key={index}>{entry}</li>
                  </div>
                  <div className="flex justify-center space-x-5">
                    <button onClick={() => handleEdit(index, entry)}>
                      <HiOutlineDotsCircleHorizontal size={30} />
                    </button>
                    <button onClick={() => remove(entry)}>
                      <BsXCircleFill size={25} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </ul>
      ) : (
        <div className="mt-6 flex w-full justify-center bg-red-500 px-10">
          <p>no tasks </p>
        </div>
      )}
    </>
  );
};

export default TodoList;
