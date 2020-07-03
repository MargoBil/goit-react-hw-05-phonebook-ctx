import React from 'react';

import withTheme from '../../hoc/withTheme ';

import s from './ContactItem.module.css';

const ContactItem = ({contact, number, onDeleteContact, id, ...props}) => {
  const {theme} = props.auth;
  const isThemeLight = theme === 'light';
  return (
    <li className={isThemeLight ? s.itemLight : s.itemDark}>
      <p>
        {contact}: {number}
      </p>
      <button
        className={isThemeLight ? s.btnLight : s.btnDark}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default withTheme(ContactItem);
