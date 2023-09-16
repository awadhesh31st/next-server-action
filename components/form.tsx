"use client";

import React, { useRef, useTransition } from "react";

const FormComponent: React.FC<{
  addTodo: (newTodo: string) => Promise<void>;
}> = ({ addTodo }) => {
  const [pending, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="grid gap-2">
      <h1 className="text-xl font-semibold">Form</h1>
      <div className="flex gap-3">
        <input
          ref={inputRef}
          className="border-2 px-4 py-1 text-base rounded-md"
          type="text"
          placeholder="Enter new todo"
        />
        <button
          className={`px-8 py-2 font-medium text-base rounded-md ${
            pending ? "bg-slate-500" : "bg-teal-500"
          }`}
          disabled={pending}
          onClick={async () => {
            startTransition(async () => {
              if (inputRef.current!.value) {
                await addTodo(inputRef.current!.value);
                inputRef.current!.value = "";
              }
            });
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
