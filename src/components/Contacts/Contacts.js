import React from 'react';
import css from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'Redux/selector';
import { useDispatch } from 'react-redux';
import { deleteContakts } from 'Redux/contactSlise';

const Contacts = () => {
    const contacts = useSelector(getFilteredContacts)
    const dispatch = useDispatch();
    return(<ul className={css.box}>
        {contacts.map(({ id, name, number, }) => (
            <li className={css.list} key={id}>
                <p>{name}</p>
                <p>{number}</p>
                <button className={css.button} type='button' onClick={() => {
                    dispatch(deleteContakts(id))
                }}>Delete</button>
            </li>
        ))}
    </ul>
)};

export default Contacts;