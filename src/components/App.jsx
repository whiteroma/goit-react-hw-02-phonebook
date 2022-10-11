import React from 'react';
// import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import { Container } from './App.styled';
// import { Formik } from 'formik';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formHandler = data => {
    if (this.state.contacts.name === data.name) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, data],
      }));
    } else {
      alert(`${data.name} is already in a list`);
    }
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getFiltered = () => {
    const { contacts, filter } = this.state;

    const normalised = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalised)
    );
  };

  deleteButton = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFiltered()
    return (
      <>
        <Container>
          <h1>Phonebook</h1>

          <ContactForm onSubmit={this.formHandler} />

          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteButton}
          />
        </Container>
      </>
    );
  }
}
