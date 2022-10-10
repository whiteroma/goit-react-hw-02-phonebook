import React from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Form from './Form/Form';
import { Container } from './App.styled';

export class App extends React.Component {
  state = {
    contacts: [],
  };

  formHandler = data => {
    this.setState({
      contacts: [data]
    });
  }



  render() {
    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          
          <Form onSubmit={this.formHandler}/>

          <h2>Contacts</h2>
          {/* <Filter/>
    <ContactList/> */}
        </Container>
      </>
    );
  }
}
