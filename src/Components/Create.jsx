import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { addContact } from './UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [status, setStatus] = useState(0);
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(users.length === 0){
            dispatch(addContact({id: 0, firstName, lastName, status}))
        }
        else {
            dispatch(addContact({id: users[users.length - 1].id + 1, firstName, lastName, status}))
        }
           
        navigate('/')     
    }

    const onOptionChange = e => {
        setStatus(e.target.value)
      }

  return (
    <div className='h-screen bg-gray-500 text-white grid grid-flow-col justify-center gap-6'>
        <div>
            <Sidebar/>
        </div>
        <div>
            <h2 className='p-5 text-center font-bold text-5xl '>Create Contact Page</h2>
            <div className='items-center text-center grid justify-evenly p-10 gap-5'>
                <div className="overflow-hidden">
                    <form onSubmit={handleSubmit} className="grid gap-5 max-w-sm p-10 m-5 max-lg:m-0 bg-white border font-normal text-white border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800">
                        <div>
                            <label htmlFor="firstName">First Name: </label>
                            <input type="text" name='firstName' placeholder='First Name' className='form-control bg-transparent border border-gray-500 rounded-lg p-1' 
                            onChange={e => setFirstName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name: </label>
                            <input type="text" name='lastName' placeholder='Last Name' className='form-control bg-transparent border border-gray-500 rounded-lg p-1' 
                            onChange={e => setLastName(e.target.value)}/>
                        </div>
                        <div className='grid grid-flow-col'>
                            <label htmlFor="status">Status: </label>
                            <div className='grid'>
                                <div>
                                    <input type="radio" name='contact' id='1' value={1} onChange={onOptionChange}/>
                                    <label htmlFor="active" className='p-2'>Active</label>
                                </div>
                                <div>
                                    <input type="radio" name='contact' id='0' value={0} onChange={onOptionChange}/>
                                    <label htmlFor="inactive" className='p-2'>Inactive</label>
                                </div>                                
                            </div>                            
                        </div>
                        <div className="grid grid-flow-col p-5 gap-1">
                            <button className="rounded-lg border-gray-600 border p-2 hover:bg-blue-900">Save Contact</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Create