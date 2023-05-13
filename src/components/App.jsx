
import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import {Filter} from './Filter/Filter'
import AddForm from './AddForm/AddForm';
import css from './App.module.css'

class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    
    filter: '',
  };


  addContact = newContact => {
    const findContact = this.state.contacts.find(contact => contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()) 
    if (findContact){
    
      alert (`${newContact.name} is already in contacts`)
    }
    else{
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));}
    this.setState({ name:''});
  };

  handleFilter=(event)=>{
    
    this.setState({filter: event.target.value})
    this.renderContacts()
  }
  
  renderContacts = () => {
    const renderedContacts = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.trim().toLowerCase());
    });
    return renderedContacts
    
  };
  deleteContact=(data)=>{
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== data),
    }));
    
}


  render() {
    const { contacts, filter } = this.state;
    return (
      <><div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <AddForm  contacts={contacts}
        addContact={this.addContact}
        name={this.state.name}
        number={this.state.number} 
        handleChange={this.handleChange}/>
      
        
        <h2 className={css.contacts}>Contacts</h2>
        
        <Filter contacts={contacts} filter={filter} onChange={this.handleFilter}/>
        
        <ContactList 
        
        contactList={this.renderContacts()}
        deleteContact={this.deleteContact}
         
        />
        </div>
      </>
    );
  }
}

export default App;