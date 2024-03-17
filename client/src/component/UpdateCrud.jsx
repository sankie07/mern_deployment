import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Header from './Header';

const UpdateCrud = () => {
    const {bid} = useParams();
    const [crudData, setCrudData] = useState(
        {'crud_name': '', 'crud_autor': '', 'crud_budget': ''}
    );
    const navigate = useNavigate()
    

    const handleSumit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `https://m-alpha-bay.vercel.app/api/updatecrud/${bid}`,
                crudData
            );
            console.log(response.data);
            setCrudData({'crud_name': '', 'crud_autor': '', 'crud_budget': ''});
            navigate('/cruds');
        } catch (error) {
            console.error(error);
        }
    }
    const handleInput = (e) => {
        const { name, value } = e.target;
        setCrudData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    


    useEffect(() => {
        axios
            .get(`https://m-alpha-bay.vercel.app/api/viewcrud/${bid}`)
            .then(response => {
                setCrudData({
                    ...crudData,
                    'crud_name': response.data.crud_name,
                    'crud_autor': response.data.crud_autor,
                    'crud_budget': response.data.crud_budget
                })
            })
            .catch(error => {
                console.error(error)
            })
        }, [bid])

    return (
       <div className='bg-gradient-to-b from-slate-800  to-gray-900'>
        <Header />
        <div className="flex justify-center  items-center  custom-height">
            <fieldset className="w-72 p-4 m-4 bg-slate-700 rounded-lg shadow-md ">
                <legend className="text-lg font-semibold  text-gray-50 text-center">Update Entry</legend>
                <div className="mt-4">
                    {/* <label htmlFor="crud_name" className="block mb-2">Entry Name</label> */}
                    <input
                        type="text"
                        id="crud_name"
                        name="crud_name"
                        value={crudData.crud_name}
                        onChange={handleInput}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"/>
                </div>
                <div className="mt-4">
                    {/* <label htmlFor="crud_autor" className="block mb-2">Entry Author</label> */}
                    <input
                        type="text"
                        id="crud_autor"
                        name="crud_autor"
                        value={crudData.crud_autor}
                        onChange={handleInput}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"/>
                </div>
                <div className="mt-4">
                    {/* <label htmlFor="crud_budget" className="block mb-2">Entry Budget</label> */}
                    <input
                        type="text"
                        id="crud_budget"
                        name="crud_budget"
                        value={crudData.crud_budget}
                        onChange={handleInput}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"/>
                </div>
                <div className="mt-4">
                    <button
                        type="button"
                        onClick={handleSumit}
                        className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500">
                        update Entry
                    </button>
                </div>
            </fieldset>
        </div>
       </div> 
    )
}

export default UpdateCrud;
