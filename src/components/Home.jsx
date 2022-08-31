import React from 'react'
import Employees from './Employees'
import { Link, useNavigate } from 'react-router-dom'



export default function Home() {
    let history = useNavigate()

    const handleEdit =(id , name , age ,address)=>{
        localStorage.setItem("Id",id)
        localStorage.setItem("Name",name)
        localStorage.setItem("Age",age)
        localStorage.setItem("Address",address)
    }



    const handleDelete = (id) => {
        let index = Employees.map((e) => {
            return e.id
        }).indexOf(id)

        console.log(index);

        Employees.splice(index, 1)

        history('/')



    }
    console.log(Employees);

    return (
        <div className='mt-5 container'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Employees && Employees.length > 0 ?
                            Employees.map((employee) => {
                                return (
                                    <tr key={employee.id}>
                                        <th>{employee.id}</th>
                                        <th>{employee.name}</th>
                                        <th>{employee.age}</th>
                                        <th>{employee.address}</th>
                                        <th>

                                            <Link to={'/edit'} >
                                                <button className='btn btn-primary mx-2' onClick={()=> handleEdit(employee.id , employee.name ,employee.age ,employee.address)}>Edit</button>
                                            </Link>
                                            <button className='btn btn-danger mx-2' onClick={() => handleDelete(employee.id)}>Delete</button>
                                        </th>
                                    </tr>
                                )
                            })
                            : <h2 className='text-center'> No Avaliable Data</h2>
                    }

                </tbody>
            </table>
            <Link to={'/create'}>
                <button className='btn btn-outline-primary mx-auto my-3 w-25'>Create</button>
            </Link>


        </div>
    )
}

