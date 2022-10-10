import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

const nameId = nanoid();
const ContactList = ({ contacts }) => <ul>{contacts.map(({name, number, nameId}) => <li key={nameId}>{name}:{number}</li>)}</ul>;

export default ContactList;