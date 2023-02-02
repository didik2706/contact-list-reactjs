import React from 'react'

const Form = ({ id, name, number, submitContact, onChangeField, }) => {
  return (
    <form onSubmit={submitContact} className="mb-3">
      <div className="mb-3">
        <label className="form-label">Contact Name</label>
        <input type="text" name='name' onChange={event => onChangeField(event)} value={name} className="form-control" placeholder="Enter contact name"/>
      </div>
      <div className="mb-3">
        <label className="form-label">Contact Number</label>
        <input type="text" name='number' onChange={event => onChangeField(event)} value={number} className='form-control' placeholder='Enter contact number'/>
      </div>
      <button className='btn btn-primary' type='submit'>{ id !== 0 ? 'Edit': 'Add' } Contact</button>
    </form>
  )
}

export default Form