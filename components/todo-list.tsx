import React from "react";
import { TodoProps } from "@/types/todo";
import { FaConciergeBell } from "react-icons/fa";

const TodoList: React.FC<TodoProps> = ({ todoData = [] }) => {
  return (
    <div className="grid gap-2">
      <h1 className="text-xl font-semibold">List</h1>
      <ul>
        {todoData.map((todo: string, key: number) => {
          return (
            <li
              className="text-sm font-normal ml-4 flex items-center gap-2"
              key={key}
              data-testid={todo}
            >
              <span>
                <FaConciergeBell />
              </span>
              <span className="capitalize">{todo}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
