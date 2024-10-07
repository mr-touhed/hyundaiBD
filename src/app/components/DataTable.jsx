"use client"

import React from 'react';
import { handle_Download_XLSheet } from '../utils/tools';

const DataTable = ({ data, type }) => {
  return (
    <div className="w-auto ">
      <div className="inline-block min-w-8xl align-middle">
        <div className="overflow-hidden border-b border-gray-200 shadow rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 text-base">
            <thead className="bg-gray-100 sticky top-0">
              <tr>
               
               
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comments</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <button onClick={()=> handle_Download_XLSheet(data, type)}>download</button>
                </th>
                
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 overflow-y-auto ">
              {data.map((row) => (
                <tr key={row._id}>
                 
                
                  <td className="px-6 py-4 whitespace-nowrap">{row.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.mobile}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.model}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.state}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{row.city}</td>
                  <td className="px-6 py-4 ">{row.comments}</td>
                  <td className="px-6 py-4 ">{new Date(row.createdAt).toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap"> <button>{row?.status}</button></td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
