import React from "react";
import {ContactPicker} from './../contactPicker/ContactPicker'

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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
      </label>

      <label>
        Date:
        <input type='date' name='date' min={getTodayString()} value={date} onChange={(e) => setDate(e.target.value)}></input>
      </label>

      <label>
        Time:
        <input type='time' name='time' value={time} onChange={(e) => setTime(e.target.value)}></input>
      </label>

      <ContactPicker contacts={contacts}/>

      <input type="submit"></input>
    </form>
  );
};
