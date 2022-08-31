import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Employees from './Employees'


export default function Edit() {

  let history = useNavigate();


  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')




  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Employees.find(e => e.id == localStorage.getItem("Id"));

    a.id = id;
    a.name = name;
    a.age = age;
    a.address = address;

    history('/')
  }
  useEffect(() => {
    setId(localStorage.getItem('Id'))
    setName(localStorage.getItem('Name'))
    setAge(localStorage.getItem('Age'))
    setAddress(localStorage.getItem('Address'))


  }, [])


  return (
    <div className='container'>
      <form className='mt-5 mx-auto w-50'>
        <div className="mb-3">
          <input type="number" className="form-control" id="id" placeholder='Enter Id' value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="name" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="age" placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="address" placeholder='Enter Address' value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>

        <button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  )
}
