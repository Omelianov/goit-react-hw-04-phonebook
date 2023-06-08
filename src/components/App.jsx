import { useEffect, useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import AddForm from './AddForm/AddForm';
import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState(() => {
  const savedData = localStorage.getItem('contacts');
return savedData && savedData !== 'undefined'
  ? JSON.parse(savedData)
  : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
  const findContact = contacts.find(
    contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  );

  if (findContact) {
    alert(`${newContact.name} is already in contacts`);
    return;
  }

  setContacts(prevContacts => [...prevContacts, newContact]);
};

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const renderContacts = () => {
  if (!contacts) {
    return []; 
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );
};

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <AddForm contacts={contacts} addContact={addContact} />
      <h2 className={css.contacts}>Contacts</h2>
      <Filter filter={filter} onChange={handleFilter} />
      <ContactList contactList={renderContacts()} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
