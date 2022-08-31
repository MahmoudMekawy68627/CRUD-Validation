import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Employees from './Employees'
import { useForm } from "react-hook-form";



export default function Create() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  let history = useNavigate()

  const [data, setData] = useState('')

  const onSubmit = (e) => {

    Employees.push(e);
    history('/')

    setData(JSON.stringify(e));
    console.log("e", e);


  }


  return (
    <div className='container'>
      <form onSubmit={handleSubmit((e) => onSubmit(e))} className='mt-5 mx-auto w-50'>
        <div className="mb-3">
          <input type="number" className="form-control" id="id" placeholder='Enter Id'  {...register("id", { required: true })} />
          {
            (errors.id && errors.id.type === "required")
            &&
            <p className='text-danger my-2'>Id Is Required</p>
          }
          <p>{data}</p>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="name" placeholder='Enter Name'  {...register("name", { required: true, maxLength: 10 })} />
          {
            (errors.name && errors.name.type === "required")
            &&
            <p className='text-danger my-2'>Name Is Required</p>
          }
          {
            (errors.name && errors.name.type === "maxLength")
            &&
            <p className='text-danger my-2'>Max Length Of Name is 10</p>
          }
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="age" placeholder='Enter Age'  {...register("age", { required: true, max: 60, min: 12 })} />
          {
            (errors.age && errors.age.type === "required")
            &&
            <p className='text-danger my-2'>Age Is Required</p>
          }
          {
            (errors.age && errors.age.type === "max")
            &&
            <p className='text-danger my-2'>Age Must Be Less Than 60</p>
          }
          {
            (errors.age && errors.age.type === "min")
            &&
            <p className='text-danger my-2'>Age Must Be Bigger Than 12</p>
          }
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="address" placeholder='Enter Address'  {...register("address", { required: true, maxLength: 60, minLength: 4 })} />
          {
            (errors.address && errors.address.type === "required")
            &&
            <p className='text-danger my-2'>Address Is Required</p>
          }
          {
            (errors.address && errors.address.type === "maxLength")
            &&
            <p className='text-danger my-2'>Max Length Of Address is 60</p>
          }
          {
            (errors.address && errors.address.type === "minLength")
            &&
            <p className='text-danger my-2'>Min Length Of Address is 4</p>
          }
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
