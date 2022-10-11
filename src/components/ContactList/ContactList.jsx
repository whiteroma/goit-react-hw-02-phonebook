// import PropTypes from 'prop-types';
import { List, ListItem, ListSpan } from './ContactList.styled';
const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ name, number, id }) => (
      <ListItem key={id}>
        {name}
        <ListSpan>:</ListSpan>
        {number}
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </ListItem>
    ))}
  </List>
);

export default ContactList;
