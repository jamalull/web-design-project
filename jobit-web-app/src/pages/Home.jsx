import React from 'react'
import { Link } from 'react-router-dom'
import DummyJobList from "../components/clients/DummyJobList"

export default function Home() {
  return (
    <>
    {/* =========== Banner Home ============ */}
      <section className="relative bg-[url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r" />
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let's find your dream
              <strong className="block font-extrabold text-blue-600">
              Job and Company.
              </strong>
            </h1>
            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            JobIT is a start-up company engaged in outsourcing & job portals to help all of you get jobs and dream companies.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to={"/explore-job"}
              > 
                <button className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
                    Find A Job
                </button>
              </Link>
              <Link
                to={"/dashboard"}
              >
                <button className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto">
                  Post a Job
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========== Section Category Job ============ */}
      <section className="mt-16">
        <div className="m-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Find your career path
              </h2>
              <p className="mt-4 text-gray-600">
                Explore our web job portal, and you will find a wide range of 
                companies and job types to suit your needs. We have worked with 
                various companies to find between the best candidates and the best 
                companies to reach a mutual agreement. Exploration immediately 
                and discover your future.
                
              </p>
              <Link
                to={"/explore-job"}
                className="mt-8 inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-blue-400"
              >
                Lest's Explore Now
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 15 15"
                    height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="currentColor" d="M10 12h3v-1h-3v1z" />
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M9.5 0A1.5 1.5 0 008 1.5V3H1.5A1.5 1.5 0 000 4.5v6A1.5 1.5 0 001.5 12H6v2H4v1h9.5a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0013.5 0h-4zM8.085 14H7v-2h1v1.5c0 .175.03.344.085.5zM9.5 14h4a.5.5 0 00.5-.5V6H9v7.5a.5.5 0 00.5.5zM9 5h5V1.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <h2 className="mt-2 font-bold">Software</h2>
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>
              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.84 2.998v17.999a2.983 2.983 0 01-2.967 2.998 2.98 2.98 0 01-.368-.02 3.06 3.06 0 01-2.61-3.1V3.12A3.06 3.06 0 0119.51.02a2.983 2.983 0 013.329 2.978zM4.133 18.055a2.973 2.973 0 100 5.945 2.973 2.973 0 000-5.945zm7.872-9.01h-.05a3.06 3.06 0 00-2.892 3.126v7.985c0 2.167.954 3.482 2.35 3.763a2.978 2.978 0 003.57-2.927v-8.959a2.983 2.983 0 00-2.978-2.988z" />
    
                  </svg>
                </span>
                <h2 className="mt-2 font-bold">Digital Marketing</h2>
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>
              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    stroke="currentColor"
                    viewBox="0 0 22 22"
                    height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.9 9.6c-.2-.5-.8-.7-1.3-.5l-2.9 1.4-2.1-2.1-2.1-2.1 1.4-2.9c.2-.5 0-1.1-.5-1.3-.5-.2-1.1 0-1.3.5l-1.5 3.1-6.4 1c-.4.1-.7.4-.8.8L2 19.1c-.1.3 0 .7.3.9L4 21.7c.2.2.5.3.7.3h.2l11.6-2.4c.4-.1.7-.4.8-.8l1-6.4 3.1-1.5c.5-.2.7-.8.5-1.3zm-6.5 8.2l-9.8 2 3.7-3.7c1.5.7 3.3.1 4-1.4s.1-3.3-1.4-4c-1.1-.5-2.5-.3-3.4.6-.9.9-1.1 2.3-.6 3.4l-3.7 3.7 2-9.8 5.8-1 2.2 2.2 2.2 2.2-1 5.8zm-5.8-4.4c0-.3.1-.5.3-.7.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4-.4.4-1 .4-1.4 0-.2-.2-.3-.5-.3-.7z" />

                  </svg>
                </span>
                <h2 className="mt-2 font-bold">Graphic Design</h2>
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>
              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    stroke="currentColor"
                    viewBox="0 0 22 22"
                    height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 16.5l-3 2.94V11h3m5 3.66l-1.57-1.34L8 14.64V7h3m5 6l-3 3V3h3m2.81 9.81L17 11h5v5l-1.79-1.79L13 21.36l-3.47-3.02L5.75 22H3l6.47-6.34L13 18.64" />
    
                  </svg>
                </span>
                <h2 className="mt-2 font-bold">Finance</h2>
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>
              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    
                    <path d="M21 8a2 2 0 012 2v4a2 2 0 01-2 2h-1.062A8.001 8.001 0 0112 23v-2a6 6 0 006-6V9A6 6 0 106 9v7H3a2 2 0 01-2-2v-4a2 2 0 012-2h1.062a8.001 8.001 0 0115.876 0H21zM7.76 15.785l1.06-1.696A5.972 5.972 0 0012 15a5.972 5.972 0 003.18-.911l1.06 1.696A7.963 7.963 0 0112 17a7.963 7.963 0 01-4.24-1.215z" />
    
                  </svg>
                </span>
                <h2 className="mt-2 font-bold">Customer Service</h2>
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>
              <a
                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
              >
                <span className="inline-block rounded-lg bg-gray-50 p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 16 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M0 2v12h16V2H0zm3 11H1v-2h2v2zm0-4H1V7h2v2zm0-4H1V3h2v2zm9 8H4V3h8v10zm3 0h-2v-2h2v2zm0-4h-2V7h2v2zm0-4h-2V3h2v2zM6 5v6l4-3z"
                    />
                  </svg>
                </span>
                <h2 className="mt-2 font-bold">Video Editor</h2>
                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========== Section CTA ============ */}
      <section className="mt-36 mb-36 overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              <span className="text-gray-500">Millions Of Jobs. </span> <br />
              Find The One That's <span className="text-blue-700">Right</span> For You
            </h2>
            <p className="hidden text-gray-500 md:mt-4 md:block">
            Search all open positions on the web. Get your own personal salary estimate. 
            Read reviews on more than 600,000 companies worldwide. The right job is out 
            there waiting to apply from you. <br /><br /> See also testimonials from users of the JobIT 
            platform who are already working in their dream place, now it's your turn to wait,
            let alone look for your job right now.
            </p>
            {/* <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
              >
                Search Job
              </a>
            </div> */}
          </div>
        </div>
        <img
          alt="Student"
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          className="h-56 w-full object-cover sm:h-full"
        />
      </section>
      
      <DummyJobList/>
      
      {/* =========== Section Quote From CEO ============ */}
      <div className="mx-auto mb-32 max-w-5xl px-4 py-8">
        <section className="rounded-lg bg-gray-100 p-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
            <img
              alt="Man"
              src="https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg"
              className="aspect-square w-full rounded-lg object-cover"
            />
            <blockquote className="sm:col-span-2">
              <p className="text-xl font-medium sm:text-2xl">
                Successful people are not always smart people, but successful people
                are persistent and never give up. Lets's to register yourself
                and find your dream job and company right here.
              </p>
              <cite className="mt-8 inline-flex items-center not-italic">
                <span className="hidden h-px w-6 bg-gray-400 sm:inline-block" />
                <p className="text-sm uppercase text-gray-500 sm:ms-3">
                  <strong>Justin Harrison</strong>, JobIT Inc.
                </p>
              </cite>
            </blockquote>
          </div>
        </section>
      </div>

      {/* =========== Section Newsletter ============ */}
      <section className="bg-gray-50">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            New Things Will Always <br /> Update Regularly
            </h2>
            <p className="hidden text-gray-500 sm:mt-4 sm:block">
            Don't make yourself feel left behind with the latest information regarding 
            the latest job announcements, the best companies and many other information, 
            stay updated and follow our newsletter right now.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-xl">
            <form action="#" className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-blue-400 sm:mt-0 sm:w-auto"
              >
                <span className="text-sm font-medium"> Submit </span>
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      
    </>

  )
}
