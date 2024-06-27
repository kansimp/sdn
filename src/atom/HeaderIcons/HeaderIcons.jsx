import React from 'react';
import { UserIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function HeaderIcons() {
    const navigate = useNavigate();
    var name = '';
    if (JSON.parse(localStorage.getItem('user'))) {
        name = JSON.parse(localStorage.getItem('user')).name;
    }
    return (
        <div className="flex space-x-4 items-center">
            <div className="flex items-center space-x-2">
                {name ? (
                    <div className="flex" style={{ alignItems: 'center' }}>
                        <button
                            onClick={() => {
                                navigate('/login');
                            }}
                            type="button"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-8 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                            Log out
                        </button>
                        <Link to={'/info'}>
                            <div class="flex items-center justify-center w-12 h-12 bg-pink-500 rounded-full">
                                <span class="text-white font-bold">{name.charAt(0).toUpperCase()}</span>
                            </div>
                        </Link>
                    </div>
                ) : (
                    <Link to={'/login'} className="flex items-center space-x-2">
                        <UserIcon className="h-6 w-6 text-black" />
                        <span className="text-black">Sign in</span>
                    </Link>
                )}
            </div>
            {/* <HeartIcon className="h-6 w-6 text-black" />
      <ShoppingBagIcon className="h-6 w-6 text-black" /> */}
        </div>
    );
}
