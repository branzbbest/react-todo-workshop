import React from "react";
import { useTodo } from "../../contexts/ActionContext";

function ListItem({ children, id, type }) {
  const [, { handleTodoClick, handleDoClick, handleDoneClick }] = useTodo();

  return (
    <li className="list-item">
      <span className="list-content">{children}</span>
      {type !== "todo" && (
        <button className="btn" onClick={() => handleTodoClick(id)}>
          Todo
        </button>
      )}
      {type !== "doing" && (
        <button className="btn" onClick={() => handleDoClick(id)}>
          Do
        </button>
      )}
      {type !== "done" && (
        <button className="btn" onClick={() => handleDoneClick(id)}>
          Done
        </button>
      )}
    </li>
  );
}

export default ListItem;

// import React from "react";
// import ActionContext from "../../contexts/ActionContext";

// function ListItem({ children, id, type }) {
//   return (
//     <li className="list-item">
//       <span className="list-content">{children}</span>
//       <button className="btn" onClick={id}>
//         Do
//       </button>
//       <button className="btn" onClick={id}>
//         Done
//       </button>
//     </li>
//   );
// }
// export default ListItem;
