import React from "react";
import ListItem from "./ListItem";

function Content({ title, list }) {
  return (
    <div className="lane-content">
      <div className="lane-title">{title}</div>
      <ul className="list-container">
        {list.map((item) => (
          <ListItem key={item.id} id={item.id} type={item.type}>
            {item.content}
          </ListItem>
        ))}
      </ul>
    </div>
  );
}

export default Content;

// import React from "react";
// import ListItem from "./ListItem";

// function Content({
//   title,
//   list,
//   onDoClick = () => {},
//   onDoneClick = () => {}
// }) {
//   return (
//     <div className="lane-content">
//       <div className="lane-title">{title}</div>
//       <ul className="list-container">
//         {list.map((item, index) => (
//           <ListItem
//             key={item.id}
//             id={item.id}
//             type={item.type}
//             // onDoClick={() => onDoClick(index)}
//             // onDoneClick={() => onDoneClick(index)}
//           >
//             {item.content}
//           </ListItem>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default Content;
