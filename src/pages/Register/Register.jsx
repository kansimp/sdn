// src/components/Register.js
import React, { useState, useEffect } from 'react';
import InputField from '../../atom/fields/InputField';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { useSidebar } from '../../context/SidebarContext';
import registerApi from '../../api/registerApi'; // Adjust the path according to your folder structure

export default function Register() {
    const { setShowSidebar } = useSidebar();

    useEffect(() => {
        setShowSidebar(false); // Hide the sidebar

        return () => {
            setShowSidebar(true); // Show the sidebar when leaving the component
        };
    }, [setShowSidebar]);

    const [formValues, setFormValues] = useState({
        name: '',
        yob: '',
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        yob: '',
        username: '',
        password: '',
    });

    const validateField = (id, value) => {
        let error = '';
        if (id === 'name' && !value) {
            error = 'Name is required';
        } else if (id === 'yob' && (!value || isNaN(value))) {
            error = 'Year of birth is required and should be a number';
        } else if (id === 'username' && !value) {
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
            name: '',
            yob: '',
            username: '',
            password: '',
        });

        // Check for empty fields before submitting
        let hasError = false;
        Object.keys(formValues).forEach((key) => {
            if (!formValues[key]) {
                validateField(key, formValues[key]);
                hasError = true;
            }
        });

        if (hasError) {
            return;
        }

        try {
            const response = await registerApi(
                formValues.name,
                formValues.yob,
                formValues.username,
                formValues.password,
            );

            if (response.message == 'register successfully') {
                // Handle successful registration
                navigate('/login');
            } else {
                // Handle registration failure
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    ...parseErrorMessages(response.message),
                }));
            }
        } catch (error) {
            console.error('Registration failed:', error);
            setErrors({
                name: error.message || 'Unknown error',
                yob: error.message || 'Unknown error',
                username: error.message || 'Unknown error',
                password: error.message || 'Unknown error',
            });
        }
    };

    const parseErrorMessages = (message) => {
        const errorMessages = {};
        if (message.includes('Username already exists')) {
            errorMessages.username = 'Username already exists!';
        } else if (message.includes('Please enter all required fields')) {
            errorMessages.name = 'Name is required';
            errorMessages.yob = 'Year of birth is required and should be a number';
            errorMessages.username = 'Username is required';
            errorMessages.password = 'Password is required';
        }
        return errorMessages;
    };

    return (
        <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-center">
            {/* Register section */}
            <div
                className="mt-[10vh] w-full max-w-full border rounded-xl p-5 flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px] shadow-lg shadow-indigo-700/50"
                style={{ paddingLeft: '20px' }}
            >
                <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">Register</h4>
                <p className="mb-9 ml-1 text-base text-gray-600">
                    Enter your information based on the fields required!
                </p>
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
                        <div className="sm:col-span-3">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Name*
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    id="name"
                                    className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
                                        errors.name ? 'border-red-500' : 'border-gray-200'
                                    } dark:!border-white/10 dark:text-white`}
                                    value={formValues.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="yob" className="block text-sm font-medium leading-6 text-gray-900">
                                Year of Birth*
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    id="yob"
                                    className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
                                        errors.yob ? 'border-red-500' : 'border-gray-200'
                                    } dark:!border-white/10 dark:text-white`}
                                    value={formValues.yob}
                                    onChange={handleChange}
                                />
                                {errors.yob && <p className="text-red-500 text-sm mt-1">{errors.yob}</p>}
                            </div>
                        </div>
                    </div>

                    <InputField
                        variant="auth"
                        extra="mb-5"
                        label="Username*"
                        placeholder="username"
                        id="username"
                        type="text"
                        error={errors.username}
                        value={formValues.username}
                        onChange={handleChange}
                    />

                    <InputField
                        variant="auth"
                        extra="mb-3"
                        label="Password*"
                        placeholder="Min. 8 characters"
                        id="password"
                        type="password"
                        error={errors.password}
                        value={formValues.password}
                        onChange={handleChange}
                    />

                    <div className="mb-4 flex items-center justify-between px-2"></div>
                    <button className="linear mt-1 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                        Submit
                    </button>
                </form>
                <div className="mt-4">
                    <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
                        Already have an account?
                    </span>

                    <Link
                        to={'/login'}
                        className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                    >
                        <strong>Login</strong>
                    </Link>
                </div>
            </div>
        </div>
    );
}
