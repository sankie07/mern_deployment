import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateCrud from './component/CreateCrud'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import ViewCrud from './component/ViewCrud'
import UpdateCrud from './component/UpdateCrud'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/* <header className="App-header">

                    <nav className="bg-slate-700 p-4">
                        <div className="max-w-7xl mx-auto flex justify-between items-center">
                            <Link to="/" 
                                    className="text-white px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-400 transition duration-300">
                                Homepage
                            </Link>
                            <div>
                                <Link
                                    to="/cruds"
                                    className="text-white px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-400 transition duration-300">
                                    Cruds
                                </Link>
                            </div>
                        </div>
                    </nav>
                </header> */}
                <main>

                    <Routes>
                        <Route exact="exact" path="/" element={<CreateCrud />}/>
                        <Route exact="exact" path="/cruds" element={<ViewCrud />}/>
                        <Route exact="exact" path="/updatecrud/:bid" element={<UpdateCrud />}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
