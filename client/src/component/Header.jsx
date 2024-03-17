import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const Header = () => {
  return (
    
                <header className="App-header">

                    <nav className="bg-slate-700 p-4">
                        <div className="max-w-7xl mx-auto flex justify-between items-center">
                            <Link to="/" 
                                    className="text-white px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-400 transition duration-300">
                                New Entry
                            </Link>
                            <div>
                                <Link
                                    to="/cruds"
                                    className="text-white px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-400 transition duration-300">
                                    Entries
                                </Link>
                            </div>
                          
                        </div>
                    </nav>
                </header>
  )
}

export default Header;