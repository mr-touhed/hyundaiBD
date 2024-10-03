// components/MenuBar.js
import React from 'react';

const MobileMenu = ({ serviceMenuItems, storyMenuItems, contactUsMenuItems }) => {
    return (
        <div className="p-4 max-w-lg mx-auto ">
            {/* Service Menu */}
            <details className="mb-2">
                <summary className="bg-gray-200 p-1 rounded-lg cursor-pointer shadow-md mb-4">
                    <span className="font-semibold">Service Menu</span>
                </summary>
                <ul className="ml-8 space-y-2">
                    {serviceMenuItems.map((item, index) => (
                        <li key={index}>
                            <details className="mb-2">
                                <summary className="bg-gray-100 p-1 rounded-lg cursor-pointer shadow">
                                    <span className="font-semibold">{item.menu}</span>
                                </summary>
                                <div className="bg-white p-4">
                                    {item.sub ? (
                                        item.sub.map((subItem, subIndex) => (
                                            <a 
                                                key={subIndex} 
                                                href={subItem.link} 
                                                className="text-gray-800 block"
                                            >
                                                {subItem.menu}
                                            </a>
                                        ))
                                    ) : (
                                        <a 
                                            href={item.link} 
                                            className="text-gray-800 block"
                                        >
                                            {item.menu}
                                        </a>
                                    )}
                                </div>
                            </details>
                        </li>
                    ))}
                </ul>
            </details>

            {/* Story Menu */}
            <details className="mb-2">
                <summary className="bg-gray-200 p-1 rounded-lg cursor-pointer shadow-md mb-4">
                    <span className="font-semibold">Story Menu</span>
                </summary>
                <ul className="ml-8 space-y-4">
                    {storyMenuItems.map((item, index) => (
                        <li key={index}>
                            <a 
                                href={item.link} 
                                className="bg-gray-100 p-3 rounded-lg block cursor-pointer shadow"
                            >
                                {item.menu}
                            </a>
                        </li>
                    ))}
                </ul>
            </details>

            {/* Contact Us Menu */}
            <details className="mb-2">
                <summary className="bg-gray-200 p-1 rounded-lg cursor-pointer shadow-md mb-4">
                    <span className="font-semibold">Contact Us Menu</span>
                </summary>
                <ul className="ml-8 space-y-4">
                    {contactUsMenuItems.map((item, index) => (
                        <li key={index}>
                            <a 
                                href={item.link} 
                                className="bg-gray-100 p-3 rounded-lg block cursor-pointer shadow"
                            >
                                {item.menu}
                            </a>
                        </li>
                    ))}
                </ul>
            </details>
        </div>
    );
};


export default MobileMenu;