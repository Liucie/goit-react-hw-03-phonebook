import './App.css';
import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { ContactForm } from './components/Form/ContactForm';
import { Filter } from './components/Filter/Filter';
import { Contacts } from './components/Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const localContacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(localContacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  componentWillUnmount() {}
  addNewContact = contact => {
    this.setState(prevState => {
      if (prevState.contacts.some(item => item.name.includes(contact.name))) {
        return alert(`${contact.name} is already in contacts`);
      }
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  filterChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return (
      <div className="App">
        <h1 className="title">Phonebook</h1>
        <ContactForm addNewContact={this.addNewContact}></ContactForm>
        <h2 className="title">Contacts</h2>
        <Filter onChange={this.filterChange} value={this.state.filter}></Filter>
        <Contacts
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        ></Contacts>
      </div>
    );
  }
}

export default App;
