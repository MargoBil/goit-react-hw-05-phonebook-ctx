import React from 'react';

import withTheme from '../../hoc/withTheme ';

import s from './Section.module.css';

const Section = ({title, children, ...props}) => {
  const {theme} = props.auth;
  const isThemeLight = theme === 'light';
  return (
    <section className={s.section}>
      <h2 className={isThemeLight ? s.nameLight : s.nameDark}>{title}</h2>
      {children}
    </section>
  );
};

export default withTheme(Section);
