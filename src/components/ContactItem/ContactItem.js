import React from 'react';

import withTheme from '../../hoc/withTheme ';

import s from './ContactItem.module.css';

const ContactItem = ({contact, number, onDeleteContact, id, ...props}) => {
  const {theme} = props.auth;
  return (
    <li className={s[`item${theme}`]}>
      <p>
        {contact}: {number}
      </p>
      <button className={s[`btn${theme}`]} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default withTheme(ContactItem);
