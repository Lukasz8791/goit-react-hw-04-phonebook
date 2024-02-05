import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  const addContact = updatedContacts => {
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const deleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDelete={deleteContact}
      />
    </div>
  );
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  addContact: PropTypes.func,
};

export default App;
