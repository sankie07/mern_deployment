import axios from 'axios';
import React, {useState, useEffect} from 'react';

const ViewCrud = () => {
    const [crudData, setCrudData] = useState([]);

    useEffect(() => {
        getcrud();
    }, []);
    const getcrud = async () => {
        axios
            .get('https://crud-app-api-five.vercel.app/viewcrud')
            .then(response => {
                setCrudData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }
    const deletecrud = async (id) => {
        axios.delete(`https://crud-app-api-five.vercel.app/deletecrud/${id}`)
        getcrud();
    }

    return (
        <div className=' bg-gradient-to-r from-amber-900 to-blue-900 '>
            <div className='h-dvh '>

                <h1 className='text-lg text-center pt-4 pb-5'>ViewCrud</h1>
                <div className='self-center'>

                    <table
                        className='mx-auto border-seperate  border-spacing-2 border border-grey-500 w-2/3 p-20'>
                        <thead>
                            <tr className='text-center '>
                                <td className='text-sm  border border-slate-600 p-4 m-4  '>Name</td>
                                <td className='text-sm border border-slate-600 p-4 m-4  '>Auther</td>
                                <td className='text-sm border border-slate-600  p-4 m-4 '>Price</td>
                                <td className='text-sm border border-slate-600  p-4 m-4 '>action</td>
                                <td className='text-sm border border-slate-600  p-4 m-4 '>delete</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                crudData.map((cruds, index) => (
                                    <tr className='text-center' key={index}>
                                        <td className='p-8 m-6 border border-slate-600 '>{cruds.crud_name}</td>
                                        <td className='p-8 m-6 border border-slate-600 '>{cruds.crud_autor}</td>
                                        <td className='p-8 m-6 border border-slate-600 '>{cruds.crud_budget}</td>
                                        <td>
                                            <a href={`updatecrud/${cruds._id}`}>edit</a>
                                        </td>
                                        <td>
                                            <a href='#' onClick={() => deletecrud(cruds._id)}>delete</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ViewCrud;
