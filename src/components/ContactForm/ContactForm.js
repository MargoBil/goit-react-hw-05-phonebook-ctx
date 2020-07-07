import React, {Component} from 'react';
import InputMask from 'react-input-mask';

import withTheme from '../../hoc/withTheme ';

import s from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddName(this.state);
    this.setState({
      ...INITIAL_STATE,
    });
  };

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  };

  render() {
    const {name, number} = this.state;
    const {theme} = this.props.auth;
  
    return (
      <form
        className={s[`form${theme}`]}
        onSubmit={this.handleSubmit}
      >
        <label className={s[`label${theme}`]}>
          Name
          <input
            className={s.input}
            type="text"
            value={name}
            name="name"
            onChange={this.handleChange}
          />
        </label>
        <label className={s[`label${theme}`]}>
          Number
          <InputMask
            className={s.input}
            mask="999-99-99"
            maskChar=" "
            value={number}
            name="number"
            onChange={this.handleChange}
          />
        </label>
        <button
          className={s[`btnForm${theme}`]}
          type="submit"
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default withTheme(ContactForm);
