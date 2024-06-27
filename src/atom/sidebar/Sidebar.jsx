import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        getBrands();
    }, []);
    const getBrands = async () => {
        const res = await axios.get('http://localhost:5000/brands');
        if (res && res.data && res.data.data) {
            setBrands(res.data.data);
        }
    };
    return (
        <section className="bg-white dark:bg-gray-900 space-y-3 lg:w-[30%] lg:px-2 lg:space-y-4 border-r-2 border-gray-200 my-2">
            <div className="container px-6 py-8">
                {brands.length > 0 ? (
                    brands.map((b) => {
                        return (
                            <div className="lg:flex lg:-mx-2">
                                <div className="w-full">
                                    <div className="flex w-full justify-between">
                                        <Link
                                            to={`/brand/${b.brandName}`}
                                            className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                                        >
                                            {b.brandName}
                                        </Link>
                                        <MdOutlineKeyboardArrowRight />
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <></>
                )}
            </div>
        </section>
    );
}
