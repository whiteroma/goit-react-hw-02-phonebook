// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React from 'react';
import { FormContainer } from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends React.Component {
  nameId = nanoid();
  numberId = nanoid();
  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({...this.state, id: nanoid() });
    this.reset();
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {

    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            id={this.nameId}
            onChange={this.handleInputChange}
          />
        </label>
        <label htmlFor={this.numberId}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and should start with +"
            required
            value={this.state.number}
            id={this.numberId}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </FormContainer>
    );
  }
}

export default ContactForm;
