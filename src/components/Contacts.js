import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from '../context';

class Contacts extends Component {
  render() {
    // Consumer tag contains value with the state from Context.Provider
    // The expression in Consumer gives a value from Context.Provider
    // Context.Provider has the entire state.
    // From value, return the JSX that maps through the contacts array.
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            // React.Fragment replaces an unnecessary div with no classes or styling
            <React.Fragment>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact} //pass in contact prop
                />
              ))}
            </React.Fragment>
          )
        }}
      </Consumer>
    )


  }
}

export default Contacts;
