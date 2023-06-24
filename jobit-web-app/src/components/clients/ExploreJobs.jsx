import React from "react";
import JobList from "./JobList";

export default function EploreJobs() {
  return (
    <>
      <section className="bg-slate-100 py-16">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Explore and Find Your Dream Job, Now
          </h2>
          <p className="mt-4 mb-5 w-1/2 mx-auto text-gray-500">
            Explore our web job portal, and you will find a wide range of companies and job types to suit your needs. We have worked with various companies to find between the best candidates and the best companies to reach a mutual agreement. Exploration immediately and discover your future.
          </p>
        </div>

        <div className="flex w-52 mx-auto">
          <button
            type="submit"
            className="group mx-auto mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
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
            type="submit"
            className="group mx-auto mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-slate-400 px-5 py-3 text-white transition hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 sm:mt-0 sm:w-auto"
          >
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M128 80V64a48.14 48.14 0 0148-48h224a48.14 48.14 0 0148 48v368l-80-64"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M320 96H112a48.14 48.14 0 00-48 48v352l152-128 152 128V144a48.14 48.14 0 00-48-48z"
              />
            </svg>
          </button>
        </div>
      </section>

      <section>
        <JobList/>
      </section>
    </>
  );
}
