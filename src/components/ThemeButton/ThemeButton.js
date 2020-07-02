import React, {Component} from 'react';

import withTheme from './../../hoc/withTheme ';

class ThemeButton extends Component {
  render() {
    const {toggleTheme, theme} = this.props.auth;
    return (
      <button type="button" onClick={toggleTheme}>
        Theme: {theme}
      </button>
    );
  }
}

export default withTheme(ThemeButton);
