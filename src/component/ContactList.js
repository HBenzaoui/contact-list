import React, { Component } from 'react';
import Contact from './Contact';

export class ContactList extends Component {
  state = {
    contactList: [
      {
        id: 1,
        name: 'Hamza',
        email: 'Hamzapdd@gmail.com',
        phone: '0661 45 81 97'
      },
      {
        id: 2,
        name: 'Bilal',
        email: 'bilal@gmail.com',
        phone: '0770 75 41 47'
      },
      {
        id: 3,
        name: 'Moha',
        email: 'info@yahoo.com',
        phone: '0550 00 00 00'
      }
    ]
  };

  render() {
    const { contactList } = this.state;
    return (
      <React.Fragment>
        {contactList.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default ContactList;