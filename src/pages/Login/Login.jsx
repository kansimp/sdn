// src/components/Login.js
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import loginApi from '../../api/loginApi'; // Adjust the path according to your folder structure

export default function Login() {
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const validateField = (id, value) => {
        let error = '';
        if (id === 'username' && !value) {
            error = 'Username is required';
        } else if (id === 'password' && !value) {
            error = 'Password is required';
        }
        setErrors((prevErrors) => ({
            ...prevErrors,
            [id]: error,
        }));
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id && value !== undefined) {
            setFormValues((prevValues) => ({
                ...prevValues,
                [id]: value?.trim(), // Trim the value
            }));
            validateField(id, value?.trim()); // Validate trimmed value
        }
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset errors
        setErrors({
            username: '',
            password: '',
        });

        try {
            localStorage.clear();
            const response = await loginApi(formValues.username, formValues.password);
            if (response.status == 'success') {
                localStorage.setItem('user', JSON.stringify(response?.data));
                if (response.data.isAdmin) navigate('/admin/brands');
                else navigate('/home');
            } else {
                // Handle login failure
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    username: response.message === 'Username không tồn tại' ? response.message : '',
                    password: response.message === 'Sai mật khẩu!' ? response.message : '',
                }));
            }
        } catch (error) {
            console.error('Login failed:', error);
            setErrors({
                username: error.message || 'Unknown error',
                password: error.message || 'Unknown error',
            });
        }
    };

    return (
        <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-center">
            {/* Login section */}
            <div
                className="mt-[10vh] w-full max-w-full border rounded-xl p-5 flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px] shadow-lg shadow-indigo-700/50"
                style={{ paddingLeft: '20px' }}
            >
                <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">Sign In</h4>
                <p className="mb-9 ml-1 text-base text-gray-600">Enter your email and password to sign in!</p>
                <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
                    <div className="rounded-full text-xl">
                        <FcGoogle />
                    </div>
                    <h5 className="text-sm font-medium text-navy-700 dark:text-white">Sign In with Google</h5>
                </div>
                <div className="mb-6 flex items-center gap-3">
                    <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
                    <p className="text-base text-gray-600 dark:text-white"> or </p>
                    <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Username*
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    id="username"
                                    className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
                                        errors.username ? 'border-red-500' : 'border-gray-200 dark:!border-white/10'
                                    } dark:text-white`}
                                    value={formValues.username}
                                    onChange={handleChange}
                                />
                                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password*
                            </label>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    id="password"
                                    className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
                                        errors.password ? 'border-red-500' : 'border-gray-200 dark:!border-white/10'
                                    } dark:text-white`}
                                    value={formValues.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="mb-4 flex items-center justify-between px-2"></div>
                    <button className="linear mt-1 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                        Sign In
                    </button>
                </form>
                <div className="mt-4">
                    <span className="text-sm font-medium text-navy-700 dark:text-gray-600">Not registered yet?</span>

                    <Link
                        to={'/register'}
                        className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                    >
                        <strong>Create an account</strong>
                    </Link>
                </div>
            </div>
        </div>
    );
}
