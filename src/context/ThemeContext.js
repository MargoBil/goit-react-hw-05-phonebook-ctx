import React, {Component, createContext} from 'react';

const {Provider, Consumer} = createContext();

class ThemeContext extends Component {
  static Consumer = Consumer;
  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  };
  state = {
    theme: 'light',
    toggleTheme: this.toggleTheme,
  };
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
export default ThemeContext;
