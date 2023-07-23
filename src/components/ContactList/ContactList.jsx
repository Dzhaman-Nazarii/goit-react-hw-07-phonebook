import React from 'react';
import css from './ContactList.module.css'
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsSlice'

export default function ContactList() {
  const dispatch = useDispatch()

  const contacts = useSelector(state => state.contacts.data);
  const filtration = useSelector(state => state.filter);

  const handleDelete = (idValue) => { dispatch(deleteContact(idValue)) };

  const filterContact = contacts.filter(contact =>
    contact.nameValue.toLowerCase().includes(filtration.toLowerCase())
  );
  
  return (
      <ul>
        {filterContact.map(({nameValue, numberValue, idValue}) => (
          <li key={idValue}>
            {nameValue}: {numberValue}
            <button
              type="button"
              className={css.buttonList}
              id={idValue}
              onClick={() => {handleDelete(idValue)}}>
              Delete
            </button>
          </li>
        ))}
      </ul>
  )
}