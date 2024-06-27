import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function Review({ watch }) {
    const comments = watch.comments;
    const users = comments.map((cmt) => {
        return { name: cmt.author.name, comments: cmt.content, rating: cmt.rating };
    });

    // Function to get initials from the name
    const getInitials = (name) => {
        return name ? name?.charAt(0).toUpperCase() : '';
    };

    return (
        <div>
            <hr className="my-3" />
            <div className="underline font-medium text-[30px]">Reviews</div>
            <hr className="my-3" />
            <span className="font-medium">{users.length} reviews</span>
            {users.map((user, index) => (
                <div key={index} className="my-5">
                    <div className="p-4 bg-gray-200 rounded-xl">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                                <span className="text-white text-xl">{getInitials(user?.name)}</span>
                            </div>
                            <div className="ml-4">
                                <span className="font-medium text-[14px]">{user.name}</span>
                                <div className="flex mt-1">
                                    {Array.from({ length: user.rating }, (_, index) => (
                                        <FaStar key={index} className="mr-1" />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-700 mt-2">{user?.comments}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
