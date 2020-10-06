import React, { useEffect } from "react";
import Content from "./Content";
import { useTodo } from "../../contexts/ActionContext";

function Lane() {
  const [{ todos, doings, dones }] = useTodo();

  return (
    <div className="lane-container">
      <Content title="Todo" list={todos} />
      <Content title="Doing" list={doings} />
      <Content title="Done" list={dones} />
    </div>
  );
}

export default Lane;

// import React, { useEffect, useState } from "react";
// import ActionContext from "../../contexts/ActionContext";
// import Content from "./Content";

// function Lane({ todos, setTodos, todones, setTodones }) {
//   // const [doings, setDoings] = useState([]);
//   // const [dones, setDones] = useState([]);

//   const handleDoClick = () => {
//     const cloneTodos = [...todos];
//     const itemIndex = cloneTodos.findIndex((todo) => todo.id === itemID);
//     if (cloneTodos[itemIndex]) {
//       cloneTodos[itemIndex].type = "doing";
//     }
//     setTodos(cloneTodos);
//   };
//   const handleDoneClick = (type) => (itemIndex) => {
//     const cloneTodos = [...todos];
//     if (cloneTodos[itemIndex]) {
//       cloneTodos[itemIndex].type = "done";
//     }
//     setTodos(cloneTodos);
//   };

//   useEffect(() => {
//     setTodos(JSON.parse(window.localStorage.getItem("todos")));
//   }, [setTodos]);
//   useEffect(() => {
//     if (todos.length)
//       window.localStorage.setItem("todos", JSON.stringify(todos));
//   }, [setTodos, todos]);
//   return (
//     <ActionContext.Provider
//       value={{ onDoClick: handleDoClick, onDoneClick: handleDoneClick }}
//     >
//       <div className="lane-container">
//         <Content
//           title="Todo"
//           list={todos.filter((todo) => todo.type === "todo")}
//         />
//         <Content
//           title="Doing"
//           list={todos.filter((todo) => todo.type === "doing")}
//         />
//         <Content
//           title="Done"
//           list={todos.filter((todo) => todo.type === "done")}
//         />
//       </div>
//     </ActionContext.Provider>
//   );
// }
// export default Lane;
