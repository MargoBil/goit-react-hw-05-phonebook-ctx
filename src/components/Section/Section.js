import React from 'react';

import withTheme from '../../hoc/withTheme ';

import s from './Section.module.css';

const Section = ({title, children, ...props}) => {
  const {theme} = props.auth;
  return (
    <section className={s.section}>
      <h2 className={s[`name${theme}`]}>{title}</h2>
      {children}
    </section>
  );
};

export default withTheme(Section);
