import React from 'react'
import { Link} from 'react-router-dom'

function Sidebar() {

  return (
        <div className="fixed flex flex-col left-0 w-9 hover:w-40 md:w-10 bg-gray-700 h-full text-gray-600 transition-all duration-300 border-none z-10 sidebar">
            <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
                <li>
                <Link to='/' className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-900 text-white border-l-4 border-transparent">
                    <span className="inline-flex justify-center items-center ml-1">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"/>
                        </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">Contact</span>
                </Link>
                </li>
                <li>
                <Link to='/charts' className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-900 text-white border-l-4 border-transparent">
                    <span className="inline-flex justify-center items-center ml-1">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z"/>
                        </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate flex-wrap">Charts and Map</span>
                </Link>
                </li>
            </ul>
            </div>
        </div>
  )
}

export default Sidebar