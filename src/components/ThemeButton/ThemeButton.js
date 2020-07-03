import React, {Component} from 'react';

import withTheme from './../../hoc/withTheme ';

import s from './ThemeButton.module.css';

class ThemeButton extends Component {
  render() {
    const {toggleTheme, theme} = this.props.auth;
    const isThemeLight = theme === 'light';
    return (
      <button
        className={isThemeLight ? s.lightBtn : s.darkBtn}
        type="button"
        onClick={toggleTheme}
      >
        Theme: {theme}
      </button>
    );
  }
}

export default withTheme(ThemeButton);
