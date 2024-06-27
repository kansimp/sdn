import React, { useState, useEffect } from 'react';
import { useSidebar } from '../../context/SidebarContext';
import axios from 'axios';

export default function UserProfile() {
    const { setShowSidebar } = useSidebar();
    const [isEditable, setIsEditable] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    const [name, setName] = useState(user.name);
    const [YOB, setYOB] = useState(user.YOB);

    useEffect(() => {
        setShowSidebar(false); // Hide the sidebar

        return () => {
            setShowSidebar(true); // Show the sidebar when leaving the component
        };
    }, [setShowSidebar]);

    const handleEditProfileClick = () => {
        setName(user.name);
        setYOB(user.YOB);
        setIsEditable(!isEditable);
    };
    const submitEdit = async () => {
        const res = await axios.put('http://localhost:5000/users/changeInfo', {
            userid: user._id,
            name,
            YOB,
        });
        localStorage.setItem('user', JSON.stringify(res.data.data));
        setIsEditable(false);
    };

    return (
        <div
            className={`mx-auto w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg ${
                isEditable ? 'h-auto' : 'mb-[10vh]'
            }`}
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                <button className="underline text-blue-500 cursor-pointer" onClick={handleEditProfileClick}>
                    {isEditable ? 'Cancel' : 'Edit Profile'}
                </button>
            </div>
            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                    </label>
                    <div className="mt-2">
                        <input
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            value={name}
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            disabled={!isEditable}
                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        YOB
                    </label>
                    <div className="mt-2">
                        <input
                            onChange={(e) => {
                                setYOB(e.target.value);
                            }}
                            value={YOB}
                            type="number"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            disabled={!isEditable}
                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                    </div>
                </div>

                <div className="sm:col-span-6">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Username
                    </label>
                    <div className="mt-2">
                        <input
                            value={user.membername}
                            id="email"
                            name="email"
                            type="text"
                            autoComplete="email"
                            disabled={true}
                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                    </div>
                </div>

                {isEditable && (
                    <div className="col-span-full flex justify-end my-4">
                        <button
                            onClick={submitEdit}
                            className=" mr-3 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                        >
                            Submit
                        </button>
                        <button
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-gray-500 border border-2 border-gray-500 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-primary-900 hover:bg-gray-300"
                            onClick={handleEditProfileClick}
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
