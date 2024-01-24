import { useEffect, useState } from "react";
import data from "../data.json";
import { nanoid } from "nanoid";
import { Container } from "./App.styled";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

export const App = () => {
const [contacts, setContacts] = 
useState(JSON.parse(window.localStorage.getItem('contacts')) ?? data);
const [filter, setFilter] = useState('');
    
useEffect(() => {
  window.localStorage.setItem('contacts', JSON.stringify(contacts))
}, [contacts])

const changeFilter = e => {
  const {value} = e.target;
  setFilter(value);
};

const addContact = (formData) => {
  const {name} = formData;
if(contacts.find(el => el.name === name)) {
  alert(`${name} is alredy in contacts`);
  return;
}
  setContacts([{
      id: nanoid(),
      ...formData,
    },...contacts]);
  };
  
  function visibleContacts() {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const deleteContact = contactId => {
      setContacts(contacts.filter(contact => contact.id !== contactId))
    };
  
  return ( 

<Container>
<h1>Phonebook</h1>
<ContactForm addContact = {addContact}/>
<h2>Contacts</h2>

{contacts.length > 0 ? (
  <>
  <Filter value={filter} onChange={changeFilter} />
  <ContactList
          contacts={visibleContacts()}
          onDeleteContact={deleteContact} />
          </>) :
          (<p>No contacts yet.</p>)}
</Container>
      );
    };

