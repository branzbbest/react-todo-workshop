import React, { useState } from "react";

function Input({ onSubmit = () => null }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
    setValue("");
  };

  const handleInputChange = (event) => setValue(event.target.value);

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <input
        value={value}
        onChange={handleInputChange}
        placeholder="Create new task"
      />
    </form>
  );
}

export default Input;

// import React, { useState } from "react";

// function Input({ onSubmit = () => null }) {
//   const [value, setValue] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit(value);
//     setValue("");
//   };

//   const handleInputChanage = (event) => setValue(event.target.value);

//   return (
//     <form onSubmit={handleSubmit} className="input-container">
//       <input
//         value={value}
//         onChange={handleInputChanage}
//         placeholder="Crate new task"
//       />
//     </form>
//   );
// }
// export default Input;
