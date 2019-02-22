import React, { Component } from 'react';
import axios from 'axios';

// Creates a Context object:
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts] //add on new contact
      };
    default:
      return state;
  }
}

export class Provider extends Component {
  //global state, aka application level state
  state = {
    contacts: [],
    // With dispatch, we can now call an action from anywhere.
    dispatch: action => this.setState(state => reducer(state, action))
  }

  async componentDidMount() {
    // waits for get request to finish, then puts it in this variable res
    const res = await axios
      .get('http://jsonplaceholder.typicode.com/users');

    this.setState({ contacts: res.data });
  }

  render() {
    return (
      // Pass in entire state 
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;