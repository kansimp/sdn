import React from 'react';

export default function FilterBar() {
    return (
        <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
            <p className="text-gray-500 dark:text-gray-300"></p>
            <div className="flex items-center">
                <p className="text-gray-500 dark:text-gray-300">Sort</p>
                <select className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                    <option value="#">Recommended</option>
                    <option value="#">Size</option>
                    <option value="#">Price</option>
                </select>
            </div>
        </div>
    );
}
