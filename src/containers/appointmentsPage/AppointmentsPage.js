import React, { useState } from "react";
import {AppointmentForm} from './../../components/appointmentForm/AppointmentForm'
import {TileList} from './../../components/tileList/TileList'

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 const [currentTitle, setCurrentTitle] = useState('');
 const [contact, setContact] = useState('');
 const [date, setDate] = useState('');
 const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   props.addAppointment(currentTitle, contact, date, time);
   setCurrentTitle('');
   setContact('');
   setDate('');
   setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
        currentTitle={currentTitle}
        setCurrentTitle={setCurrentTitle}
        contact={contact}
        setContact={setContact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={props.appointments} />
      </section>
    </div>
  );
};
