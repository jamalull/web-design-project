import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useParams } from "react-router";
import axios from "axios";

export default function AddNewJob() {
  const { state, handleFunction } = useContext(GlobalContext);
  const { inputJob, setInputJob } = state;
  const { handleInputJob, handleSubmitJob } = handleFunction;

  //catch idData for displayed on the form input.
  let { idData } = useParams();

  useEffect(() => {
    if (idData !== undefined) {
      axios
        .get(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`
        )
        .then((res) => {
          let data = res.data;

          setInputJob({
            title: data.title,
            job_description: data.job_description,
            job_qualification : data.job_qualification,
            job_type  : data.job_type,
            job_tenure  : data.job_tenure,
            job_status  : data.job_status,
            company_name  : data.company_name,
            company_image_url  : data.company_image_url,
            company_city  : data.company_city,
            salary_min  : data.salary_min,
            salary_max  : data.salary_max
          });
        });
    }
  }, []);

  return (
    <>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-6">
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <a className="block text-blue-600" href="/">
                <span className="sr-only">Home</span>
                <svg
                  viewBox="0 0 22 22"
                  fill="currentColor"
                  height="3em"
                  width="3em"
                >
                  <path d="M19 6h-3V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1H5C3.3 6 2 7.3 2 9v9c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3zm-9-1h4v1h-4V5zm10 13c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-5.6L8.7 14H15c.1 0 .2 0 .3-.1l4.7-1.6V18z" />
                </svg>
              </a>
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Post A New Job
              </h1>
              <p className="mt-4 leading-relaxed text-gray-500">
                Let's create a new job and we will assist you to finding the
                best candidate for your company.
              </p>
              <form
                onSubmit={handleSubmitJob}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    onChange={handleInputJob}
                    value={inputJob.title}
                    type="text"
                    id="title"
                    name="title"
                    required
                    placeholder="Enter Title Job"
                    className="mt-1 w-full rounded-md border-2 p-2 border-gray-200 bg-white text-md text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="job_description "
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Description
                  </label>
                  <input
                    onChange={handleInputJob}
                    value={inputJob.job_description}
                    type="text"
                    id="job_description"
                    name="job_description"
                    required
                    placeholder="Enter Job Description"
                    className="mt-1 w-full rounded-md border-2 p-2 border-gray-200 bg-white text-md text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="job_qualification"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Qualification
                  </label>
                  <input
                    onChange={handleInputJob}
                    value={inputJob.job_qualification}
                    type="text"
                    id="job_qualification"
                    name="job_qualification"
                    required
                    placeholder="Enter Job Qualification"
                    className="mt-1 w-full rounded-md border-2 p-2 border-gray-200 bg-white text-md text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="job_type"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Type
                  </label>
                  <input
                    onChange={handleInputJob}
                    value={inputJob.job_type}
                    type="text"
                    id="job_type"
                    name="job_type"
                    required
                    placeholder="Enter Job Type (Onsite/WFH/Hybrid)"
                    className="mt-1 w-full rounded-md border-2 p-2 border-gray-200 bg-white text-md text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="job_statu "
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Status
                  </label>
                  <input
                    onChange={handleInputJob}
                    value={inputJob.job_status}
                    type="number"
                    id="job_status"
                    name="job_status"
                    required
                    placeholder="Enter Status (1:Open Hiring or 0:Close Hiring)"
                    className="mt-1 w-full rounded-md border-2 p-2 border-gray-200 bg-white text-md text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="job_tenure"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Tenure
                  </label>
                  <input
                    onChange={handleInputJob}
                    value={inputJob.job_tenure}
                    type="text"
                    id="job_tenure"
                    name="job_tenure"
                    required
                    placeholder="Enter Job Tenure (Fulltime or Contract)"
                    className="mt-1 w-full rounded-md border-2 p-2 border-gray-200 bg-white text-md text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="company_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company Name
                  </label>
                  <input
                    onChange={handleInputJob}
                    value={inputJob.company_name}
                    type="text"
                    id="company_name"
                    name="company_name"
                    required
                    placeholder="Enter Company Name"
                    className="mt-1 w-full rounded-md border-2 p-2 border-gray-200 bg-white text-md text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="company_image_url"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company Image Url
                  </label>
                  <input
                    onChange={handleInputJob}
                    value={inputJob.company_image_url}
                    type="text"
                    id="company_image_url"
                    name="company_image_url"
                    required
                    placeholder="Enter Link Image Url"
                    className="mt-1 w-full rounded-md border-2 p-2 border-gray-200 bg-white text-md text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="company_city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company City
                  </label>
                  <input
                    onChange={handleInputJob}
                    value={inputJob.company_city}
                    type="text"
                    id="company_city"
                    name="company_city"
                    required
                    placeholder="Enter Company City"
                    className="mt-1 w-full rounded-md border-2 p-2 border-gray-200 bg-white text-md text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="salary_min"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Salary (Min)
                  </label>
                  <input
                    onChange={handleInputJob}
                    value={inputJob.salary_min}
                    type="number"
                    id="salary_min"
                    name="salary_min"
                    required
                    placeholder="Enter Minimum Salary"
                    className="mt-1 w-full rounded-md border-2 p-2 border-gray-200 bg-white text-md text-gray-700 shadow-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="salary_max"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Salary (Max)
                  </label>
                  <input
                    onChange={handleInputJob}
                    value={inputJob.salary_max}
                    type="number"
                    id="salary_max"
                    name="salary_max"
                    required
                    placeholder="Enter Maximum Salary"
                    className="mt-1 w-full rounded-md border-2 p-2 border-gray-200 bg-white text-md text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-black checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-black checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="checkbox"
                      name="terms"
                      value=""
                      id="checkboxDefault"
                      required
                    />
                    <p className="text-sm text-gray-500">
                      By creating a post job, you agree to ensure that what you
                      fill in this form is correct and finall.
                    </p>
                  </div>
                </div>
                <div className="sm:flex sm:items-center sm:gap-4">
                  <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 hover:text-white focus:outline-none focus:ring active:text-blue-500">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
