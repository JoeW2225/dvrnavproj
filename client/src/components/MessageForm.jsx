import { useState } from "react";

export function MessageForm({ addMessage }) {
  const [formValues, setFormValues] = useState({
    name: "",
    message: "",
  }); //inital values

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await fetch(`http://localhost:8080/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    const messages = await res.json(mes);
    addMessage(formValues);
  }

  function handleInputChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your name here"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <label htmlFor="message">Message</label>
      <input
        type="text"
        id="message"
        name="message"
        placeholder="Enter message"
        value={formValues.message}
        onChange={handleInputChange}
      />
      <p>Current value is: {formValues.name}</p>
      <p>Current value is: {formValues.message}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MessageForm;
