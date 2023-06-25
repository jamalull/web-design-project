import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function AllJobList() {
  const {state, handleFunction} = useContext(GlobalContext);
  const {data} = state;
  const {handleDeleteJob,handleEditJob, breakString} = handleFunction;

  return (
    <>
      <div className="w-5/6 ml-10 mt-10 mb-10 relative overflow-x-auto shadow-md sm:rounded-lg">
        
        <table className="text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-blue-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Job Description
              </th>
              <th scope="col" className="px-6 py-3">
                Job Qualification
              </th>
              <th scope="col" className="px-6 py-3">
                Job Type
              </th>
              <th scope="col" className="px-6 py-3">
                Job Tenure
              </th>
              <th scope="col" className="px-6 py-3">
                Job Status
              </th>
              <th scope="col" className="px-6 py-3">
                Company Name
              </th>
              <th scope="col" className="px-6 py-3">
                Company Image
              </th>
              <th scope="col" className="px-6 py-3">
                Company City
              </th>
              <th scope="col" className="px-6 py-3">
                Salary
              </th>
              <th scope="col" className="px-6 py-3">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {data !== null &&
              data.map((res, index) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </td>
                    <td className="px-6 py-4">{res.title}</td>
                    <td className="px-6 py-4">{breakString(res.job_description)}</td>
                    <td className="px-6 py-4">{breakString(res.job_qualification)}</td>
                    <td className="px-6 py-4">{res.job_type}</td>
                    <td className="px-6 py-4">{res.job_tenure}</td>
                    <td className="px-6 py-4">{res.job_status}</td>
                    <td className="px-6 py-4">{res.company_name}</td>
                    <td className="px-6 py-4">
                      <img src={res.company_image_url} alt="Logo-company"/>
                    </td>
                    <td className="px-6 py-4">{res.company_city}</td>
                    <td className="px-6 py-4">{res.salary_min} s/d {res.salary_max}</td>
                    <td className="px-6 py-4 flex">
                      <button
                        onClick={handleEditJob}
                        value={res.id}
                        className="bg-slate-500 text-center text-white p-2 rounded-md"
                      >
                        Edit
                      </button>
                      <button
                        onClick={handleDeleteJob}
                        value={res.id}
                        className="bg-red-500 text-center text-white p-2 ml-2 rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
