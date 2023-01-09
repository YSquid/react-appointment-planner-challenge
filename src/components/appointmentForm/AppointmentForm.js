import React from "react";
import './AppointmentForm.css'
import { ContactPicker } from "./../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => contacts.map((contact) => contact.name);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>
      </label>

      <label>
        Date:
        <input
          type="date"
          name="date"
          min={getTodayString()}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        ></input>
      </label>

      <label>
        Time:
        <input
          type="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        ></input>
      </label>

      <ContactPicker
        contacts={getContactNames()}
        name="contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />

      <input type="submit" id="submitBtn"></input>
    </form>
  );
};
