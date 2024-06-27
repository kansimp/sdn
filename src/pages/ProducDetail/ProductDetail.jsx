import React, { useEffect, useState } from 'react';
import { useSidebar } from '../../context/SidebarContext';
import { FaStar } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
import GRise1111 from '../../assets/img/GRise1111.png';
import DisplayField from '../../atom/fields/DisplayField';
import { CiDeliveryTruck } from 'react-icons/ci';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { GiRecycle } from 'react-icons/gi';
import { CiShoppingBasket } from 'react-icons/ci';
import InforProduct from '../../atom/InforProduct.jsx/InforProduct';
import Review from '../../atom/Review/Review';
import Comment from '../../atom/Comments/Comment';
import { useParams } from 'react-router';
import axios from 'axios';

export default function ProductDetail() {
    const { setShowSidebar } = useSidebar();
    const [watch, setWatch] = useState({});
    const { id } = useParams();

    useEffect(() => {
        setShowSidebar(false); // Hide the sidebar
        getWatchDetail();
        return () => {
            setShowSidebar(true); // Show the sidebar when leaving the component
        };
    }, [setShowSidebar]);
    const getWatchDetail = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/watches/${id}`);
            if (res && res.data && res.data.data) {
                setWatch(res.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return watch._id ? (
        <div>
            <div className="flex justify-center w-full mb-5">
                <div className="w-full mt-3 flex flex-col lg:grid lg:grid-cols-12 lg:w-full">
                    <div className="z-0 col-span-6 lg:!mb-0 h-full lg:h-auto w-full flex justify-center">
                        <div className="w-full top-0  max-w-xs lg:max-w-none lg:w-[546px]">
                            <div className="sticky top-0">
                                <img
                                    className="object-cover w-full h-full rounded-md"
                                    src={watch.image}
                                    alt="T-Shirt"
                                />
                            </div>
                        </div>
                    </div>
                    <InforProduct watch={watch} />
                </div>
            </div>

            <div className="m-5">
                <Review watch={watch} />

                <Comment watch={watch} getWatchDetail={getWatchDetail} />
            </div>
        </div>
    ) : (
        <></>
    );
}
