import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import "./App.css";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  /*Testing contact and appoinment data - release with empty useState initializations */
  const testContacts = [
    { name: "Ahmad", phone: "306-153-7498", email: "ahmad1008@gmail.com" },
    { name: "Sam", phone: "306-401-7981", email: "sam123@gmail.com" },
    { name: "Emma Sampson", phone: "306-897-0549", email: "emmasews20@gmail.com" },
    { name: "Eluid", phone: "306-178-0058", email: "taxpros20@gmail.com" }
  ];

  const testAppointments = [
    {title: 'Ahmad intake', contact: 'Ahmad', date: '2023-01-11', time: '12:45pm'},
    {title: 'Sam renewal', contact: 'Sam', date: '2023-02-14', time: '7:30am'},
    {title: 'Emma prospect', contact: 'Emma', date: '2023-01-21', time: '3:45pm'}, 
    {title: 'Sam renewal', contact: 'Sam', date: '2023-02-14', time: '1:00pm'}
  ]

  const [contacts, setContacts] = useState(testContacts);
  const [appointments, setAppointments] = useState(testAppointments);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (name, phone, email) => {
    setContacts([...contacts, { name: name, phone: phone, email: email }]);
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments([
      ...appointments,
      { title: title, contact: contact, date: date, time: time },
    ]);
  };

  return (
    <div className="App">
      <header>
      <nav>
        <NavLink
          to={ROUTES.CONTACTS}
          activeClassName="active"
          className="navLink"
        >
          <h2>Contacts</h2>
        </NavLink>
        <NavLink
          to={ROUTES.APPOINTMENTS}
          activeClassName="active"
          className="navLink"
        >
          <h2>Appointments</h2>
        </NavLink>
      </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route exact path="/appointments">
            <Redirect to={ROUTES.APPOINTMENTS} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              contacts={contacts}
              appointments={appointments}
              addAppointment={addAppointment}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
