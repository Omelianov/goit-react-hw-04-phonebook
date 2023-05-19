import { useEffect, useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import AddForm from './AddForm/AddForm';
import css from './App.module.css';

const App = () => {
  const [phonebook, setPhonebook] = useState(() => {
    const savedData = localStorage.getItem('contacts');
    return savedData ? JSON.parse(savedData) : {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(phonebook));
  }, [phonebook]);

  useEffect(() => {
    const savedData = localStorage.getItem('contacts');
    if (savedData!==null) {
      setPhonebook(JSON.parse(savedData));
    }
  }, []);


  const addContact = newContact => {
    const findContact = phonebook.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (findContact) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setPhonebook(prevState => ({
        ...prevState,
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  const handleFilter = event => {
    setPhonebook({ ...phonebook, filter: event.target.value });
  };

  const renderContacts = () => {
    const { contacts, filter } = phonebook;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  };

  const deleteContact = id => {
    setPhonebook(prevState => ({
      ...prevState,
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  const { contacts, filter } = phonebook;

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