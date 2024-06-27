import React from 'react';
import { Link, useParams } from 'react-router-dom';
import getAllWatch from '../../api/getAllWatch';
import FilterBar from '../../atom/filterBar/FilterBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function BrandListWatch() {
    const { brandName } = useParams();
    const [watchesList, setWatchList] = useState([]);

    const fetchApi = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/watches/filter?brandName=${brandName}`);
            setWatchList(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchApi();
    }, [brandName]);

    return (
        <div className="lg:mt-0 lg:px-2 lg:w-5/5 ">
            <FilterBar />
            {watchesList.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {watchesList.map((watch) => {
                        return (
                            <div
                                className="flex flex-col items-center justify-center w-full max-w-lg mx-auto"
                                // style={{ border: '1px solid black', borderRadius: '8px' }}
                            >
                                <Link
                                    to={`/product/${watch._id}`}
                                    className="flex flex-col items-center justify-center w-full max-w-lg mx-auto"
                                >
                                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                        <img
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                borderRadius: '0.375rem',
                                            }}
                                            src={watch.image}
                                            alt={watch.watchName}
                                        />
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                                borderRadius: '0.375rem',
                                            }}
                                        ></div>
                                    </div>

                                    <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                                        {watch.watchName}
                                    </h4>
                                    <p className="text-blue-500">{watch.price}</p>

                                    <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 mx-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                        </svg>
                                        <span className="mx-1">View Details</span>
                                    </button>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
