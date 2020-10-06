import React, { useState, createContext, useEffect, useContext } from "react";

const ActionContext = createContext({});

export function Provider({ children }) {
  const [todos, setTodos] = useState([]);
  return (
    <ActionContext.Provider value={{ todos, setTodos }}>
      {children}
    </ActionContext.Provider>
  );
}
export function useTodo() {
  const { todos, setTodos } = useContext(ActionContext);

  const handleAddToDo = (todoInput) =>
    setTodos([...todos, { id: Date.now(), content: todoInput, type: "todo" }]);

  const handleTodoClick = (itemId) => {
    const cloneTodos = [...todos]; // clone with reference changed!
    const itemIndex = cloneTodos.findIndex((todo) => todo.id === itemId);
    if (cloneTodos[itemIndex]) {
      cloneTodos[itemIndex].type = "todo";
    }
    setTodos(cloneTodos);
  };

  const handleDoClick = (itemId) => {
    const cloneTodos = [...todos]; // clone with reference changed!
    const itemIndex = cloneTodos.findIndex((todo) => todo.id === itemId);
    if (cloneTodos[itemIndex]) {
      cloneTodos[itemIndex].type = "doing";
    }
    setTodos(cloneTodos);
  };

  const handleDoneClick = (itemId) => {
    const cloneTodos = [...todos]; // clone with reference changed!
    const itemIndex = cloneTodos.findIndex((todo) => todo.id === itemId);
    if (cloneTodos[itemIndex]) {
      cloneTodos[itemIndex].type = "done";
    }
    setTodos(cloneTodos);
  };

  useEffect(() => {
    if (!todos.length) {
      setTodos(JSON.parse(window.localStorage.getItem("todos")) || []);
    }
  }, [setTodos]);
  if (todos.length) {
    window.localStorage.setItem("todos", JSON.stringify(todos)),
      [setTodos, todos];
  }

  return [
    {
      todos: todos.filter((todo) => todo.type === "todo"),
      doings: todos.filter((todo) => todo.type === "doing"),
      dones: todos.filter((todo) => todo.type === "done")
    },
    { handleAddToDo, handleDoClick, handleTodoClick, handleDoneClick }
  ];
}

export default ActionContext;
