// import PropTypes from 'prop-types';
const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ name, number, id, onDeleteContact }) => (
      <li key={id}>
        {name}:{number}
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
