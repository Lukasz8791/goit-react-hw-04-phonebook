import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, filter, onDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.ul}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={styles.li}>
          {contact.name} - {contact.number}
          <button
            type="button"
            className={styles['delete-button']}
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  onDelete: PropTypes.func,
};

export default ContactList;
