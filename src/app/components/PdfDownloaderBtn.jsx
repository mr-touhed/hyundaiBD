"use client"
import { useEffect, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
const PdfDownloaderBtn = ({file, name}) => {


    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = file; // Replace with your PDF file path
        link.download = `${name}.pdf`; // Set the default file name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
     
    return (
        <li onClick={handleDownload} className="cursor-pointer flex gap-2 items-center"><MdOutlineFileDownload className="w-4 h-4"/> <span className="font-semibold text-nowrap">e-brochure</span></li>
    );
};

export default PdfDownloaderBtn;