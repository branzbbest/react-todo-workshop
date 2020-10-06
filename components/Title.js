import React from "react";

function Title({ children }) {
  return (
    <div className="title-container">
      <h1>{children}</h1>
    </div>
  );
}

export default Title;

// import React from "react";

// function Title({ children }) {
//   return (
//     <div>
//       <div className="title-container">
//         <h1>{children}</h1>
//       </div>
//     </div>
//   );
// }
// export default Title;
