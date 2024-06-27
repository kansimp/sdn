import React, { useEffect } from 'react';
import { useSidebar } from '../../context/SidebarContext';
import { FaStar } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
import GRise1111 from '../../assets/img/GRise1111.png';
import DisplayField from '../../atom/fields/DisplayField';
import { CiDeliveryTruck } from 'react-icons/ci';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { GiRecycle } from 'react-icons/gi';
import { CiShoppingBasket } from 'react-icons/ci';

export default function InforProduct({ watch }) {
    console.log('kkk', watch);
    const name = [
        { label: 'Size*', value: '41mm' },
        { label: 'Color*', value: ['green ', 'yellow', ' black ', 'white'] },
    ];
    return (
        <div className="z-0 col-span-6 lg:!mb-0 w-full lg:w-5/6">
            <div className="w-full flex justify-between">
                <h2 className="text-xl font-bold">{watch.watchName}</h2>
                <div className="flex items-center justify-center">
                    <div className="flex text-xl">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <CiStar />
                        <CiStar />
                    </div>
                    <span className="mx-5 font-bold underline text-gray-300">1 review</span>
                </div>
            </div>
            <div>
                <p className="text-gray-700 mb-2">
                    <strong>Item No</strong>.12345656
                </p>
                <span className="bg-green-200 border rounded-md py-1 text-[13px] font-bold px-2">IN STOCK</span>
                <hr className="w-full my-5 border-gray-900 " />
                <div>
                    {name.map((item, index) => (
                        <div key={index}>
                            <DisplayField label={item.label} value={item.value} />
                        </div>
                    ))}
                </div>
                <hr className="w-full my-5 border-gray-900 " />
                <div>
                    <h1 className="text-[#787878] mt-2 font-medium text-xl">Retail</h1>
                    <span className="text-[40px] font-semibold">${watch.price}</span>
                    <div className="flex gap-4 my-2">
                        <button className="flex items-center justify-center w-3/6 px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                            <CiShoppingBasket className="text-[25px]" />
                            <span className="mx-1">Buy Now</span>
                        </button>
                        <button className="flex items-center border-2 border-black justify-center w-3/6 px-2 py-2 mt-4 font-medium tracking-wide text-black capitalize transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 mx-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                            <span className="mx-1">Add to cart</span>
                        </button>
                    </div>
                    <div>
                        <div className="flex">
                            <GiRecycle className="text-[20px] text-gray-700" />{' '}
                            <p className="text-center my-auto mx-2 text-md text-gray-500">
                                FREE RETURNS within 3 days (For manufacturer defects)
                            </p>
                        </div>
                        <div className="flex">
                            <AiOutlineSafetyCertificate className="text-[20px] text-gray-700" />
                            <p className="text-center my-auto mx-2 text-md text-gray-500">
                                WARRANTY for 10 years on Watch products (tested by technicians)
                            </p>
                        </div>
                        <div className="flex">
                            <CiDeliveryTruck className="text-[25px] text-gray-700" />{' '}
                            <p className="text-center my-auto mx-2 text-md text-gray-500">
                                FREE SHIPPING for orders 500K
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="w-full my-5 border-gray-900 " />
                <span className="font-bold">Description</span>
                <hr className="w-full my-5 border-gray-900 " />
                <div className="w-full">
                    <p>
                        Stainless steel case with a stainless steel bracelet with yellow gold-plated accents. Fixed
                        yellow gold-plated bezel. Ivory dial with yellow gold-tone hands and index hour markers. Minute
                        markers around the outer rim. Dial Type: Analog. Date display at the 3 o'clock position. Tissot
                        Calibre Powermatic 80 (C07.111) automatic movement with an 80-hour power reserve. Scratch
                        resistant sapphire crystal. Pull / push crown. Skeleton case back. Round case shape. Case size:
                        41 mm. Case thickness: 9.75 mm. Band width: 20 mm. Deployment clasp with a push button release.
                        Water resistant at 50 meters / 165 feet. Functions: date,
                    </p>
                </div>
            </div>
            <hr className="w-full my-5 border-gray-900 " />
            <div>
                <span className="font-bold">Shipment</span>
                <p>Delivery fee:</p>
                <ul className="list-disc leading-loose ml-5">
                    <li>
                        <span>
                            <strong>MIỄN PHÍ VẬN CHUYỂN</strong> với đơn hàng từ 499,000đ trở lên
                        </span>
                    </li>
                    <li>
                        <span className="text-center">
                            <strong>30,000đ</strong> với đơn hàng có giá trị thấp hơn 499,000đ
                        </span>
                    </li>
                </ul>

                <p>Time Shipment</p>
                <ul className="list-disc ml-5">
                    <li>
                        <span>Hanoi inner city: 1-2 days</span>
                    </li>
                    <li>
                        <span className="text-center">Miền Trung: 3 – 5 ngày</span>
                    </li>
                    <li>
                        <span className="text-center">Miền Nam: 5 – 7 ngày</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
