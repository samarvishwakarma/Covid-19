import React from 'react'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';

export const Home = () => {

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser({id: id}))
    }

  return (
    <div className=' min-h-screen bg-gray-500 text-white grid grid-flow-col justify-center gap-6'>
        <div>
            <Sidebar/>
        </div>
        <div>
            <h2 className='p-5 text-center font-bold text-5xl '>Contact Page</h2>
            <div className='items-center text-center grid justify-evenly p-10 gap-5'>
                <Link to='/create' className="rounded-lg border-gray-600 border p-2 bg-gray-700 hover:bg-blue-900">Create Contact</Link> 
                {users.length>0 ?
                <div className=" grid justify-evenly grid-cols-2 max-lg:grid-flow-row max-lg:grid-cols-1">
                    {users && users.map((user, index)=> (
                            <div key={index} className="block max-w-sm p-5 m-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.firstName} {user.lastName}</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">{user.status == 1 && <div>Active</div>}{user.status == 0 && <div>Inactive</div>}</p>
                                <div className="grid grid-flow-col p-5 gap-1">
                                    <Link to={`/edit/${user.id}`} className="w-20 rounded-lg border-gray-600 border p-2 hover:bg-green-900">Edit</Link>
                                    <button onClick={() => handleDelete(user.id)} className="w-20 rounded-lg border-gray-600 border p-2 hover:bg-red-900">Delete</button>
                                </div>
                            </div>
                    ))}   
                </div>
                :
                <div className="flex items-center max-w-sm p-5 m-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                        <path fillRule="evenodd" d="M6.72 5.66l11.62 11.62A8.25 8.25 0 006.72 5.66zm10.56 12.68L5.66 6.72a8.25 8.25 0 0011.62 11.62zM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788z" clipRule="evenodd" />
                    </svg>
                    <div className="grid grid-flow-row p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            No Contact Found
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Please add contact from</p>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Create Contact Button</p>
                    </div>                    
                </div>     
            }
        </div>
        </div>
    </div>
  )
}
