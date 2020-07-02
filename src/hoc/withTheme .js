import React from 'react';
import ThemeContext from '../context/ThemeContext';

const withTheme = WrappedComponent => {
  return function WithTheme(props) {
    return (
      <ThemeContext.Consumer>
        {context => <WrappedComponent {...props} auth={context} />}
      </ThemeContext.Consumer>
    );
  };
};

export default withTheme;
