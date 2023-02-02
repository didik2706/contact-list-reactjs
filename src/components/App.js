import React, { Component } from 'react'
import Form from './Form'
import ListContacts from './ListContacts'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       contacts: [],
       id: 0,
       name: "",
       number: ""
    }
  }

  onChangeField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  updateContact = (id, event) => {
    event.preventDefault();
    const data = this.state.contacts.filter(d => d.id === id)[0];

    this.setState({
      id: data.id,
      name: data.name,
      number: data.number,
    })
  }

  deleteContact = (id, event) => {
    event.preventDefault();
    const data = this.state.contacts.filter(d => d.id !== id);

    this.setState({
      contacts: [...data]
    })
  }

  submitContact = event => {
    event.preventDefault();

    if (this.state.id === 0) {
      this.setState({
        contacts: [...this.state.contacts, {
          id: this.state.contacts.length + 1,
          name: this.state.name,
          number: this.state.number
        }]
      });
    } else {
      const data = this.state.contacts.filter(d => d.id !== this.state.id);

      this.setState({
        contacts: [...data, {
          id: this.state.id,
          name: this.state.name,
          number: this.state.number,
        }]
      })
    }

    this.setState({
      id: 0,
      number: "",
      name: ""
    })
  }

  render() {
    return (
      <div>
        <div className='container mt-5 w-75'>
          <h2>Contact List</h2>
          <Form id={this.state.id} name={this.state.name} number={this.state.number} onChangeField={this.onChangeField} submitContact={this.submitContact}/>
          {
            this.state.contacts.length !== 0 && this.state.contacts.map((d, i) => <ListContacts key={i} deleteContact={this.deleteContact} updateContact={this.updateContact} id={d.id} name={d.name} number={d.number} />)
          }
        </div>
      </div>
    )
  }
}
