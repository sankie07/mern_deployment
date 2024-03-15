import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const UpdateCrud = () => {
    const {bid} = useParams();
    const [crudData, setCrudData] = useState(
        {'crud_name': '', 'crud_autor': '', 'crud_budget': ''}
    );
    const navigate = useNavigate()
    const handleInput = (e) => {
        const {name, value} = e.target;
        setCrudData({
            ...crudData,
            [name]: value
        });
    }

    const handleSumit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `https://crud-app-api-five.vercel.app/${bid}`,
                crudData
            );
            console.log(response.data);
            setCrudData({'crud_name': '', 'crud_autor': '', 'crud_budget': ''});
            navigate('/cruds');
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        axios
            .get(`https://crud-app-api-five.vercel.app/viewcrud/${bid}`)
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
        }, [])

    return (
        <div className="flex justify-center bg-red-200 h-dvh">
            <fieldset className="w-72 p-4 m-4 bg-red rounded-lg shadow-md">
                <legend className="text-lg font-semibold text-center">Update Crud</legend>
                <div className="mt-4">
                    <label htmlFor="crud_name" className="block mb-2">Crud Name</label>
                    <input
                        type="text"
                        id="crud_name"
                        name="crud_name"
                        value={crudData.crud_name}
                        onChange={handleInput}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"/>
                </div>
                <div className="mt-4">
                    <label htmlFor="crud_autor" className="block mb-2">Crud Author</label>
                    <input
                        type="text"
                        id="crud_autor"
                        name="crud_autor"
                        value={crudData.crud_autor}
                        onChange={handleInput}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"/>
                </div>
                <div className="mt-4">
                    <label htmlFor="crud_budget" className="block mb-2">Crud Budget</label>
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
                        update Crud
                    </button>
                </div>
            </fieldset>
        </div>
    )
}

export default UpdateCrud;
