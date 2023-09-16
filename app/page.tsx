import React from "react";
import FormComponent from "@/components/form";
import TodoList from "@/components/todo-list";
import { revalidatePath } from "next/cache";

const todoList: string[] = [];

const RootPage = () => {
  const addTodo = async (newTodo: string) => {
    "use server";
    await new Promise((resolve) => setTimeout(resolve, 200));
    todoList.push(newTodo);
    revalidatePath("/");
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <h1 className="text-2xl font-black">Todo List</h1>
      {todoList.length > 0 && <TodoList todoData={todoList} />}
      <FormComponent addTodo={addTodo} />
    </div>
  );
};

export default RootPage;
