// components/MenuBar.js
import Link from 'next/link';
import React from 'react';
import CarMenu from './CarMenu';

const MobileMenu = ({ serviceMenuItems, storyMenuItems, contactUsMenuItems,handel_close }) => {
    return (
        <div className="p-4 max-w-lg mx-auto ">
            <details className="mb-2">
                    <summary className="bg-gray-200 p-1 rounded-lg cursor-pointer  mb-4">
                            <span className="font-semibold">Find A Car</span>
                     </summary>
                    <CarMenu handel_close={handel_close}/>
            </details>
            {/* Service Menu */}
            <details className="mb-2">
                <summary className="bg-gray-200 p-1 rounded-lg cursor-pointer  mb-4">
                    <span className="font-semibold">Service Menu</span>
                </summary>
                <ul className="ml-8 space-y-2">
                    {serviceMenuItems.map((item, index) => (
                        <li key={index}>
                            <details className="mb-2">
                                <summary className="bg-gray-100 p-1 rounded-lg cursor-pointer ">
                                    <span className="font-semibold">{item.menu}</span>
                                </summary>
                                <div className="bg-white p-4 space-y-3">
                                    {item.sub ? (
                                        item.sub.map((subItem, subIndex) => (
                                            <Link 
                                                onTouchStart={handel_close}
                                                key={subIndex} 
                                                href={subItem.link} 
                                                className="text-gray-800 block "
                                            >
                                                {subItem.menu}
                                            </Link>
                                        ))
                                    ) : (
                                        <Link 
                                        onTouchStart={handel_close}
                                            href={item.link} 
                                            className="text-gray-800 block"
                                        >
                                            {item.menu}
                                        </Link>
                                    )}
                                </div>
                            </details>
                        </li>
                    ))}
                </ul>
            </details>

            {/* Story Menu */}
            <details className="mb-2">
                <summary className="bg-gray-200 p-1 rounded-lg cursor-pointer  mb-4">
                    <span className="font-semibold">Story Menu</span>
                </summary>
                <ul className="ml-8 space-y-4">
                    {storyMenuItems.map((item, index) => (
                        <li key={index}>
                            <Link 
                            onTouchStart={handel_close}
                                href={item.link} 
                                className="bg-gray-100 rounded-lg block cursor-pointer "
                            >
                                {item.menu}
                            </Link>
                        </li>
                    ))}
                </ul>
            </details>

            {/* Contact Us Menu */}
            <details className="mb-2">
                <summary className="bg-gray-200 p-1 rounded-lg cursor-pointer  mb-4">
                    <span className="font-semibold">Contact Us Menu</span>
                </summary>
                <ul className="ml-8 space-y-4">
                    {contactUsMenuItems.map((item, index) => (
                        <li key={index}>
                            <Link 
                            onTouchStart={handel_close}
                                href={item.link} 
                                className="bg-gray-100  rounded-lg block cursor-pointer "
                            >
                                {item.menu}
                            </Link>
                        </li>
                    ))}
                </ul>
            </details>
        </div>
    );
};


export default MobileMenu;