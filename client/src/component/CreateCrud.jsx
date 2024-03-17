import axios from 'axios';
import React, {useState} from 'react';
import Header from './Header';

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
                'https://ms-rust.vercel.app/api/addcrud',
                crudData
            );
            console.log(response.data);
            setCrudData({'crud_name': '', 'crud_autor': '', 'crud_budget': ''});
        } catch (error) {
            console.error(error);
        }
    }

    return (
        
       <div className='bg-gradient-to-b from-slate-800  to-gray-900 '>
        < Header />
         <div className="flex justify-center  items-center  custom-height">
            
            <fieldset className="w-72 p-4 m-4 bg-slate-700 rounded-lg shadow-md ">
                <legend className="text-2xl text-gray-50 font-semibold text-center">Add Entry</legend>
                {/* <div className="mt-4">
                    <label htmlFor="crud_name" className="block mb-2 text-gray-50 text-center">Crud Name</label>
                    <input
                        type="text"
                        id="crud_name"
                        name="crud_name"
                        value={crudData.crud_name}
                        onChange={handleInput}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"/>
                </div> */}
                <div className="mt-4">
    <input
        type="text"
        id="crud_name"
        name="crud_name"
        placeholder="Entry Name"
        value={crudData.crud_name}
        onChange={handleInput}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
    />
</div>
                <div className="mt-4">
                    {/* <label htmlFor="crud_autor" className="block mb-2 text-gray-50 text-center">Crud Author</label> */}
                    <input
                        type="text"
                        id="crud_autor"
                        name="crud_autor"
                        placeholder="Entry author"
                        value={crudData.crud_autor}
                        onChange={handleInput}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"/>
                </div>
                <div className="mt-4">
                    {/* <label htmlFor="crud_budget" className="block mb-2 text-gray-50 text-center">Crud Budget</label> */}
                    <input
                        type="text"
                        id="crud_budget"
                        name="crud_budget"
                        placeholder='Entry price'
                        value={crudData.crud_budget}
                        onChange={handleInput}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"/>
                </div>
                <div className="mt-4">
                    <button
                        type="button"
                        onClick={handleSumit}
                        className="w-full p-2 bg-indigo-700 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500">
                        Add Entry
                    </button>
                </div>
            </fieldset>
        </div>
       </div>
    );
}

export default CreateBook;
