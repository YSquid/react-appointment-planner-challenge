import React from "react";
import './ContactForm.css'

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
      </label>

      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="^1?\s?[(]?[0-9]{3}[)]?[ ,-]?[0-9]{3}[ ,-]?[0-9]{4}$" //NA phone number regex, allowing for leading 1 and for parenthesis on area code
          required
        ></input>
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
      </label>

        <input type="submit" id="submitBtn"></input>
    </form>
  );
};
