import React from 'react';
import css from './PhoneBook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'Redux/contactSlise';
import { nanoid } from 'nanoid';
import { getContacts } from 'Redux/selector';

const PhoneBook = () => {
  const dispatch = useDispatch();

  const contactsValue = useSelector(getContacts);

  const hendleCenge = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    const contacts = { id: nanoid(6), name: name.value, number: number.value };
    if (contactsValue.some(contact => contact.name === name.value)) {
      alert(`Sorry, ${name.value} is already in contacts.`);
      name.value = '';
      number.value = '';
      return;
    }
    dispatch(addContacts(contacts));
    name.value = '';
    number.value = '';
  };

  return (
    <form className={css.wrapper} onSubmit={hendleCenge}>
      <label className={css.wrapper__name}>
        Name
        <input
          className={css.input__name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.wrapper__name}>
        Number
        <input
          className={css.input__namber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default PhoneBook;
