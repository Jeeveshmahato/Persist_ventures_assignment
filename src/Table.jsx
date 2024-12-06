import React from "react";
import img1 from "./assets/Pic.png";
import img2 from "./assets/Ellipse 14.png";
import img3 from "./assets/Ellipse 146.png";
const Test = () => {
  return (
    <>
      <div class="relative overflow-x-auto shadow-md rounded-[16px] sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                Creator Name
              </th>
              <th scope="col" class="px-6 py-3">
                Influencer Location
              </th>
              <th scope="col" class="px-6 py-3">
                Subscribers
              </th>
              <th scope="col" class="px-6 py-3">
                Engagement Rate
              </th>
              <th scope="col" class="px-6 py-3">
                Commercials
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  class="w-10 h-10 rounded-full"
                  src={img1}
                  alt="Jese image"
                />
                <div class="ps-3">
                  <div class="text-base font-semibold">Neil Sims</div>
                  <div class="font-normal text-gray-500">
                    neil.sims@gmail.com
                  </div>
                </div>
              </th>
              <td class="px-6 py-4">India</td>
              <td class="px-6 py-4">3.5K</td>
              <td class="px-6 py-4">4.98%</td>
              <td class="px-6 py-4">$10.00</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  class="w-10 h-10 rounded-full"
                  src={img2}
                  alt="Jese image"
                />
                <div class="ps-3">
                  <div class="text-base font-semibold">Ashley Cooper</div>
                  <div class="font-normal text-gray-500">
                  Ashley Cooper@gmail.com
                  </div>
                </div>
              </th>
              <td class="px-6 py-4">Africa</td>
              <td class="px-6 py-4">41.5K</td>
              <td class="px-6 py-4">6.98%</td>
              <td class="px-6 py-4">$20.00</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  class="w-10 h-10 rounded-full"
                  src={img3}
                  alt="Jese image"
                />
                <div class="ps-3">
                  <div class="text-base font-semibold">Angel Mango</div>
                  <div class="font-normal text-gray-500">
                  Angel Mango@gmail.com
                  </div>
                </div>
              </th>
              <td class="px-6 py-4">France</td>
              <td class="px-6 py-4">51.5K</td>
              <td class="px-6 py-4">8.98%</td>
              <td class="px-6 py-4">$50.00</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  class="w-10 h-10 rounded-full"
                  src={img1}
                  alt="Jese image"
                />
                <div class="ps-3">
                  <div class="text-base font-semibold">Randy Levin</div>
                  <div class="font-normal text-gray-500">
                  Randy Levin@gmail.com
                  </div>
                </div>
              </th>
              <td class="px-6 py-4">USA</td>
              <td class="px-6 py-4">11.5K</td>
              <td class="px-6 py-4">23.98%</td>
              <td class="px-6 py-4">$27.00</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-table-search-1" class="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  class="w-10 h-10 rounded-full"
                  src={img2}
                  alt="Jese image"
                />
                <div class="ps-3">
                  <div class="text-base font-semibold">Ashley Cooper</div>
                  <div class="font-normal text-gray-500">
                  Ashley Cooper@gmail.com
                  </div>
                </div>
              </th>
              <td class="px-6 py-4">China</td>
              <td class="px-6 py-4">3K</td>
              <td class="px-6 py-4">7.98%</td>
              <td class="px-6 py-4">$15.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Test;
