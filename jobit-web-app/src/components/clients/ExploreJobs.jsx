import React, { useContext } from "react";
import JobList from "./JobList";
import { GlobalContext } from "../../context/GlobalContext";

export default function EploreJobs() {
  const { state, handleFunction } = useContext(GlobalContext);
  const { inputSearchData, setFetchStatus } = state;
  const { handleInputSearch, handleSubmitSearch } = handleFunction;

  return (
    <>
      <section className="bg-slate-100 py-16">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Explore and Find Your Dream Job, Now
          </h2>
          <p className="mt-4 mb-5 w-1/2 mx-auto text-gray-500">
            Explore our web job portal, and you will find a wide range of
            companies and job types to suit your needs. We have worked with
            various companies to find between the best candidates and the best
            companies to reach a mutual agreement. Exploration immediately and
            discover your future.
          </p>
        </div>

        <div className="flex max-w-md mx-auto max-[630px]:flex-col">
          <div>
            <div className="relative">
              <input
                onChange={handleInputSearch}
                value={inputSearchData.searchjob}
                name="searchjob"
                type="text"
                className="w-full rounded-lg border-2 border-blue-200 p-4 pe-12 text-sm shadow-sm bg-transparent"
                placeholder="Search job name here"
                required
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                </svg>
              </span>
            </div>
          </div>
          <button
            onClick={handleSubmitSearch}
            className="group mx-auto mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-blue-400 sm:mt-0 sm:w-auto"
          >
            <span className="text-sm font-medium"> Search Job </span>
            <svg
              viewBox="0 0 17 18"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9.5 13.5l3-3-3-3M12.5 10.5h-9" />
                <path d="M4.5 8.5V5.492a2 2 0 011.992-2l7.952-.032a2 2 0 012.008 1.993l.04 10.029A2 2 0 0114.5 17.49h-8a2 2 0 01-2-2V12.5" />
              </g>
            </svg>
          </button>
          <button
            onClick={() => setFetchStatus(true)}
            type="submit"
            className="group mx-auto mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-slate-400 px-5 py-3 text-white transition hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 sm:mt-0 sm:w-auto"
          >
            <svg
              viewBox="0 0 19 19"
              fill="currentColor"
              height="2em"
              width="2em"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3.578 6.487A8 8 0 112.5 10.5M7.5 6.5h-4v-4" />
              </g>
            </svg>
          </button>
        </div>
      </section>

      <section>
        <JobList />
      </section>
    </>
  );
}
