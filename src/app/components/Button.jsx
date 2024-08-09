import Link from 'next/link';
import React from 'react';

const Button = ({href,children, className}) => {
    return (
        <Link href={href} className={`text-[white] lg:text-sm lg:px-12  lg:py-2 p-2 text-base  bg-primary shadow-md md:w-[214px] md:h-[50px] w-[150px] flex justify-center items-center ${className}`}>{children}</Link>
    );
};

export default Button;