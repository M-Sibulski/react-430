import { React, useState } from "react";

export default function App() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [contact, setContact] = useState({ fName: "", lName: "", email: "" });

  function handleChange(event) {
    const { value, name } = event.target;
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleHover() {
    setIsMouseOver(true);
  }
  function handleOutHover() {
    setIsMouseOver(false);
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <input
        name="fName"
        placeholder="First Name"
        onChange={handleChange}
        value={contact.fName}
      />
      <input
        name="lName"
        placeholder="Last Name"
        onChange={handleChange}
        value={contact.lName}
      />
      <input
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
        value={contact.email}
      />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleHover}
        onMouseOut={handleOutHover}
      >
        Submit
      </button>
    </div>
  );
}
