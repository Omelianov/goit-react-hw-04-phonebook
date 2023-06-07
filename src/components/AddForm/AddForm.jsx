import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './AddForm.module.css';
import { useState } from 'react';

const AddForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a name and a number.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    addContact(newContact);

    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        <span className={css.name}>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChangeName}
          required
        />
      </label>

      <label className={css.label}>
        <span className={css.number}>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChangeNumber}
          required
        />
      </label>
      <button className={css.button} type="submit">Add contact</button>
    </form>
  );
};

AddForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default AddForm;
