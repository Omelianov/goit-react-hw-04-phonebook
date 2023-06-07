import { ContactItem } from '../ContactItem/ContactItem';
import css from './ContactList.module.css'
import PropTypes from 'prop-types';


export const ContactList = ({ contactList, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contactList.map(a => {
        return (
          <li key={a.id}>
            <ContactItem
              name={a.name}
              number={String(a.number)}
              itemKey={a.id}
              deleteContact={deleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};



ContactList.propTypes = {
  contactList: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
}