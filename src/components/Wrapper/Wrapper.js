import React from 'react';

import withTheme from '../../hoc/withTheme ';

const Wrapper = ({children, ...props}) => {
  const {theme} = props.auth;
  const isThemeLigth = theme === 'Light';
  isThemeLigth
    ? (document.body.style.backgroundColor = '#ffffff')
    : (document.body.style.backgroundColor = '#0a4658');
  return <div>{children}</div>;
};

export default withTheme(Wrapper);
