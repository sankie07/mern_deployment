import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import UpdateCrud from './UpdateCrud';
const ViewCrud = () => {
    const [crudData, setCrudData] = useState([]);

    useEffect(() => {
        getcrud();
    }, []);
    const getcrud = async () => {
        axios
            .get('https://m-alpha-bay.vercel.app/api/viewcrud')
            .then(response => {
                setCrudData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }
    const deletecrud = async (id) => {
        axios.delete(`https://m-alpha-bay.vercel.app/api/deletecrud/${id}`)
        getcrud();
    }

    return (
        <div className='bg-gradient-to-b from-slate-800  to-gray-900 '>
            
            <div className='z-0'>
            <Header />
            </div>
            <div className='custom-height z-10'>

                <h1 className='text-2xl text-center text-gray-200 pt-4 pb-5'>Entries</h1>
                <div className='self-center  '>
                    <div className="overflow-x-auto">
                    <table
                        className='min-w-full mx-auto border-separate border-spacing-1 border bg-slate-800 rounded-lg border-slate-500 '>
                        <thead>
                            <tr className='text-center text-gray-50 '>
                                {/* <th className='text-xl  border border-slate-600 p-2 m-2 rounded-lg'>Entry</th>
                                <th className='text-xl border border-slate-600 p-2 m-2  rounded-lg'>Auther</th>
                                <th className='text-xl border border-slate-600  p-2 m-2 rounded-lg'>Price</th>
                                <th className='text-xl border border-slate-600  p-2 m-2 rounded-lg '>action</th> */}
                                    <th className='px-2 py-1 border border-slate-600 rounded-lg'>Entry</th>
                                    <th className='px-2 py-1 border border-slate-600 rounded-lg'>Author</th>
                                    <th className='px-2 py-1 border border-slate-600 rounded-lg'>Price</th>
                                    <th className='px-2 py-1 border border-slate-600 rounded-lg'>Actions</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                            {
                                crudData.map((cruds, index) => (
                                    <tr className='text-center text-gray-50' key={index}>
                                        <td className='p-8 m-6 border border-slate-600 rounded-lg'>{cruds.crud_name}</td>
                                        <td className='p-8 m-6 border border-slate-600 rounded-lg'>{cruds.crud_autor}</td>
                                        <td className='p-8 m-6 border border-slate-600 rounded-lg'>{cruds.crud_budget}</td>
                                       
                                        <td className='p-2 md:p-8 border border-slate-600 rounded-lg'>
                                            <div className='flex flex-col md:flex-row items-center justify-center'>
                                               
                                            <Link to={`/updatecrud/${cruds._id}`} className='mx-2 my-1 md:my-0 text-center md:text-left  hover:text-blue-500'>edit</Link>

                                                <button onClick={() => deletecrud(cruds._id)} className='mx-2 my-1 md:my-0 text-center md:text-left  hover:text-red-500'>
                                                Delete
                                                </button>
                                               
                                            </div>
                                        </td>
                                        
                                    </tr>
                                ))
                            }

                        </tbody> */}
                        <tbody>
                                {crudData.map((cruds, index) => (
                                    <tr className='text-center text-gray-50' key={index}>
                                        <td className='p-2 border border-slate-600 rounded-lg'>{cruds.crud_name}</td>
                                        <td className='p-2 border border-slate-600 rounded-lg'>{cruds.crud_autor}</td>
                                        <td className='p-2 border border-slate-600 rounded-lg'>{cruds.crud_budget}</td>
                                        <td className='p-2 border border-slate-600 rounded-lg'>
                                            <div className='flex justify-center'>
                                                <Link to={`/updatecrud/${cruds._id}`} className='mx-2 text-blue-500 hover:text-blue-700'>Edit</Link>
                                                <button onClick={() => deletecrud(cruds._id)} className='mx-2 text-red-500 hover:text-red-700'>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                    </table>
                    </div>
                   
                </div>
            </div>
            {/* <Routes>
                <Route path="/updatecrud/:bid">
                    <UpdateCrud />
                </Route>
            </Routes> */}
        </div>
    );
}

export default ViewCrud;
