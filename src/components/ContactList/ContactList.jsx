// import PropTypes from 'prop-types';
const ContactList = ({ contacts }) => <ul>{contacts.map(({name, number, id}) => <li key={id}>{name}:{number}</li>)}</ul>;

export default ContactList;