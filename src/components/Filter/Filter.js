import React from 'react';

import withTheme from '../../hoc/withTheme ';

import s from './Filter.module.css';

const Filter = ({value, onChange, ...props}) => {
  const {theme} = props.auth;
  return (
    <div className={s.box}>
      <label className={s[`label${theme}`]}>
        Find contacts by name
        <input value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default withTheme(Filter);
