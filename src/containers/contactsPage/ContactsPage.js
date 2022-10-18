import React, { useState, useEffect } from "react";
import { ContactForm } from "./../../components/contactForm/ContactForm";
import {TileList} from "./../../components/tileList/TileList"

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicateName, setDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicateName) {
      props.addContact(e.target.name, e.target.phone, e.target.email);
    }
    setName("");
    setPhone("");
    setEmail("");
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    const matches = props.contacts.filter((contact) => contact.name === name);
    if (matches.length > 0) {
      setDuplicateName(true);
    }
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPnone={setPhone}
          email={email}
          setEmail={setEmail}
          duplicateName={duplicateName}
          setDuplicateName={setDuplicateName}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts} />
      </section>
    </div>
  );
};
