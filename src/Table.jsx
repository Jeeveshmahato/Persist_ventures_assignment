import React, { useState } from "react";
import img1 from "./assets/Pic.png";
import img2 from "./assets/Ellipse 14.png";
import img3 from "./assets/Ellipse 146.png";

const Test = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const newCheckedItems = {};
    items.forEach((item) => {
      newCheckedItems[item.id] = !selectAll;
    });
    setCheckedItems(newCheckedItems);
  };

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const items = [
    { id: 1, img: img1, name: "Neil Sims", email: "neil.sims@gmail.com", location: "India", subscribers: "3.5K", engagementRate: "4.98%", commercials: "$10.00" },
    { id: 2, img: img2, name: "Ashley Cooper", email: "ashley.cooper@gmail.com", location: "Africa", subscribers: "41.5K", engagementRate: "6.98%", commercials: "$20.00" },
    { id: 3, img: img3, name: "Angel Mango", email: "angel.mango@gmail.com", location: "France", subscribers: "51.5K", engagementRate: "8.98%", commercials: "$50.00" },
    { id: 4, img: img1, name: "Randy Levin", email: "randy.levin@gmail.com", location: "USA", subscribers: "11.5K", engagementRate: "23.98%", commercials: "$27.00" },
    { id: 5, img: img2, name: "Ashley Cooper", email: "ashley.cooper@gmail.com", location: "China", subscribers: "3K", engagementRate: "7.98%", commercials: "$15.00" },
  ];

  return (
    <div className="relative overflow-x-auto shadow-md rounded-[16px] sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Creator Name
            </th>
            <th scope="col" className="px-6 py-3">
              Influencer Location
            </th>
            <th scope="col" className="px-6 py-3">
              Subscribers
            </th>
            <th scope="col" className="px-6 py-3">
              Engagement Rate
            </th>
            <th scope="col" className="px-6 py-3">
              Commercials
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id={`checkbox-table-search-${item.id}`}
                    type="checkbox"
                    checked={checkedItems[item.id] || false}
                    onChange={() => handleCheckboxChange(item.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor={`checkbox-table-search-${item.id}`} className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <img className="w-10 h-10 rounded-full" src={item.img} alt={item.name} />
                <div className="ps-3">
                  <div className="text-base font-semibold">{item.name}</div>
                  <div className="font-normal text-gray-500">{item.email}</div>
                </div>
              </th>
              <td className="px-6 py-4">{item.location}</td>
              <td className="px-6 py-4">{item.subscribers}</td>
              <td className="px-6 py-4">{item.engagementRate}</td>
              <td className="px-6 py-4">{item.commercials}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Test;
