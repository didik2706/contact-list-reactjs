import React from 'react'

const ListContacts = ({ id, name, number, updateContact, deleteContact }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{ name }</h5>
        <h6 className="card-subtitle mb-2 text-muted">{ number }</h6>
        <a href='/' className="card-link" onClick={event => updateContact(id, event)}>Edit</a>
        <a href='/' className="card-link" onClick={event => deleteContact(id, event)}>Delete</a>
      </div>
    </div>
  )
}

export default ListContacts