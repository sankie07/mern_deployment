import axios from 'axios';
import React, {useState} from 'react';

const CreateBook = () => {
    const [crudData, setCrudData] = useState(
        {'crud_name': '', 'crud_autor': '', 'crud_budget': ''}
    );

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
            const response = await axios.post(
                'https://crud-app-api-five.vercel.app/addcrud',
                crudData
            );
            console.log(response.data);
            setCrudData({'crud_name': '', 'crud_autor': '', 'crud_budget': ''});
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex justify-center bg-red-200 h-dvh">
            <fieldset className="w-72 p-4 m-4 bg-red rounded-lg shadow-md">
                <legend className="text-lg font-semibold text-center">Add Crud</legend>
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
                        Add Crud
                    </button>
                </div>
            </fieldset>
        </div>
    );
}

export default CreateBook;
/////////////////npm r
