import React from "react";
import Title from "../components/Title";
import Input from "../components/Input";
import Lane from "../components/Lane";
import { useTodo } from "../contexts/ActionContext";
import "./main.css";

function App() {
  const [, { handleAddTodo }] = useTodo();
  // const [todos, setTodos] = useState([]);

  // const handleAddTodo = (todoInput) =>
  //   setTodos([...todos, { id: Date.now(), content: todoInput, type: "todo" }]);

  return (
    <div className="container">
      <Title>Simple Kanban Board</Title>
      <Input onSubmit={handleAddTodo} />
      <Lane />
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import Title from "../components/Title";
// import Input from "../components/Input";
// import Lane from "../components/Lane";
// import "./styles.css";

// export default function App() {
//   // const [todoInput, setTodoInput] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [dones, setDones] = useState([]);

//   const handleAddToDo = (todoInput) => {
//     setTodos([...todos, { id: Date.now(), content: todoInput, type: "todo" }]);
//   };

//   return (
//     <div className="container">
//       <Title>Simple Kanban Board</Title>
//       <Input
//         onSubmit={handleAddToDo}
//         // value={todoInput}
//         // setValue={setTodoInput}
//       />
//       <Lane
//         todos={todos}
//         setTodos={setTodos}
//         todones={dones}
//         setTodones={setDones}
//       />
//     </div>
//   );
// }
