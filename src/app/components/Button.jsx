import Link from 'next/link';
import React from 'react';

const Button = ({href,children, className}) => {
    return (
        <Link href={href} className={`text-[white] lg:text-sm lg:px-12  lg:py-2 p-2  bg-primary shadow-md  inline-block ${className}`}>{children}</Link>
    );
};

export default Button;