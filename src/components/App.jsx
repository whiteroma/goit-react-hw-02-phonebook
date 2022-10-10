import React from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import { Container } from './App.styled';
import { Formik } from 'formik';

export class App extends React.Component {
  state = {
    contacts: [],
  };

  formHandler = data => {
    console.log(data);
    this.setState(prevState => ({
      contacts: [prevState, ...data],
    }));

  }



  render() {
    const { contacts } = this.state
    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          
          <ContactForm onSubmit={this.formHandler}/>

          <h2>Contacts</h2>
          {/* <Filter/> */}
    <ContactList contacts={contacts}/>
        </Container>
      </>
    );
  }
}
