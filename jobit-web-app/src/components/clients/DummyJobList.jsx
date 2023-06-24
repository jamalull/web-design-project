import React from 'react'
import { Link } from 'react-router-dom'

//This DummyJobList only for displayed list job on the landing page home. Dynamic JobList can you look at the section Explore Jobs
export default function DummyJobList() {
  return (
    <>
      {/* =========== Section Cateogry Company ============ */}
      <section className=" text-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Find Your Dream Job
            </h2>
            <p className="mt-4 text-gray-500">
              Explore our web job portal, and you will find a wide range of companies and job types to suit your needs. We have worked with various companies to find between the best candidates and the best companies to reach a mutual agreement. Exploration immediately and discover your future.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            <Link
              to={"/explore-job"}
              className="flex gap-5 rounded-xl border border-gray-400 p-5 shadow-xl transition hover:border-black-500/10 hover:shadow-blue-500/10"
              href="/services/digital-campaigns"
            >
              <img
                className="rounded"
                src="https://www.akun.biz/tips-bisnis/wp-content/uploads/2020/04/tokopedia-wishlist-640x640.jpg"
                width="150px"
                alt="company-logo"
              />
              <div>
                <h2 className=" text-xl font-bold text-gray-900">
                  Software Engineer
                </h2>
                <p className="mb-1 text-sm text-gray-500">Tokopedia Inc</p>
                <div className="flex gap-3">
                  <div>
                    <span className="flex items-center gap-1">
                      <svg
                        viewBox="0 0 18 19"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <g
                          fill="none"
                          fillrule="evenodd"
                          stroke="currentColor"
                          strokelinecap="round"
                          strokelinejoin="round"
                          transform="translate(4 2)"
                        >
                          <path d="M6.5 16.54l.631-.711c.716-.82 1.36-1.598 1.933-2.338l.473-.624c1.975-2.661 2.963-4.773 2.963-6.334C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033c0 1.561.988 3.673 2.963 6.334l.473.624a54.84 54.84 0 002.564 3.05z" />
                          <path d="M9 6.5 A2.5 2.5 0 0 1 6.5 9 A2.5 2.5 0 0 1 4 6.5 A2.5 2.5 0 0 1 9 6.5 z" />
                        </g>
                      </svg>
                      <p className="mt-1 mb-1 text-sm text-gray-500">Jakarta Barat</p>
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                      >
                        <path
                          fillrule="evenodd"
                          d="M14.763.075A.5.5 0 0115 .5v15a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V14h-1v1.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V10a.5.5 0 01.342-.474L6 7.64V4.5a.5.5 0 01.276-.447l8-4a.5.5 0 01.487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V15h2V1.309l-7 3.5V15z"
                        />
                        <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                      </svg>
                      <p className="mb-1 text-sm text-gray-500">Remote Work</p>
                    </span>
                    <p className="mt-2 whitespace-nowrap rounded-full px-3.5 py-1 bg-green-100  text-sm text-green-700">
                      Open Hiring
                    </p>
                  </div>
                  <div>
                    <span className="flex items-center gap-1">
                      <svg
                        viewBox="0 0 640 512"
                        fill="#64748b"
                        height="1em"
                        width="1em"
                      >
                        <path d="M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8zm-56 8v40H64c-35.3 0-64 28.7-64 64v96h360.2c32.3-39.1 81.1-64 135.8-64 5.4 0 10.7.2 16 .7V160c0-35.3-28.7-64-64-64h-64V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zm192 296h-96c-17.7 0-32-14.3-32-32v-32H0v128c0 35.3 28.7 64 64 64h296.2c-25.1-30.4-40.2-69.5-40.2-112 0-5.4.2-10.7.7-16h-.7zm320 16c0-79.5-64.5-144-144-144s-144 64.5-144 144 64.5 144 144 144 144-64.5 144-144zm-144-80c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16z" />
                      </svg>
                      <p className="mt-1 mb-1 text-sm text-gray-500">Contract</p>
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                      >
                        <path
                          fillrule="evenodd"
                          d="M11 15a4 4 0 100-8 4 4 0 000 8zm5-4a5 5 0 11-10 0 5 5 0 0110 0z"
                        />
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                        <path d="M1 0a1 1 0 00-1 1v8a1 1 0 001 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 00-2-2V3a2 2 0 002-2h10a2 2 0 002 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 00-1-1H1z" />
                        <path d="M9.998 5.083L10 5a2 2 0 10-3.132 1.65 5.982 5.982 0 013.13-1.567z" />
                      </svg>
                      <p className="mb-1 text-sm text-gray-500">
                        Rp 6.000.000 - Rp 10.000.000
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link
              to={"/explore-job"}
              className="flex gap-5 rounded-xl border border-gray-400 p-5 shadow-xl transition hover:border-black-500/10 hover:shadow-blue-500/10"
              href="/services/digital-campaigns"
            >
              <img
                className="rounded"
                src="https://www.teknovidia.com/wp-content/uploads/2022/04/Logo-Shopee.jpg"
                width="150px"
                alt="company-logo"
              />
              <div>
                <h2 className=" text-xl font-bold text-gray-900">
                  Database Administrator
                </h2>
                <p className="mb-1 text-sm text-gray-500">Shopee Inc</p>
                <div className="flex gap-3">
                  <div>
                    <span className="flex items-center gap-1">
                      <svg
                        viewBox="0 0 18 19"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <g
                          fill="none"
                          fillrule="evenodd"
                          stroke="currentColor"
                          strokelinecap="round"
                          strokelinejoin="round"
                          transform="translate(4 2)"
                        >
                          <path d="M6.5 16.54l.631-.711c.716-.82 1.36-1.598 1.933-2.338l.473-.624c1.975-2.661 2.963-4.773 2.963-6.334C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033c0 1.561.988 3.673 2.963 6.334l.473.624a54.84 54.84 0 002.564 3.05z" />
                          <path d="M9 6.5 A2.5 2.5 0 0 1 6.5 9 A2.5 2.5 0 0 1 4 6.5 A2.5 2.5 0 0 1 9 6.5 z" />
                        </g>
                      </svg>
                      <p className="mt-1 mb-1 text-sm text-gray-500">Jakarta Barat</p>
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                      >
                        <path
                          fillrule="evenodd"
                          d="M14.763.075A.5.5 0 0115 .5v15a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V14h-1v1.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V10a.5.5 0 01.342-.474L6 7.64V4.5a.5.5 0 01.276-.447l8-4a.5.5 0 01.487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V15h2V1.309l-7 3.5V15z"
                        />
                        <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                      </svg>
                      <p className="mb-1 text-sm text-gray-500">Remote Work</p>
                    </span>
                    <p className="mt-2 whitespace-nowrap rounded-full px-3.5 py-1 bg-green-100  text-sm text-green-700">
                      Open Hiring
                    </p>
                  </div>
                  <div>
                    <span className="flex items-center gap-1">
                      <svg
                        viewBox="0 0 640 512"
                        fill="#64748b"
                        height="1em"
                        width="1em"
                      >
                        <path d="M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8zm-56 8v40H64c-35.3 0-64 28.7-64 64v96h360.2c32.3-39.1 81.1-64 135.8-64 5.4 0 10.7.2 16 .7V160c0-35.3-28.7-64-64-64h-64V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zm192 296h-96c-17.7 0-32-14.3-32-32v-32H0v128c0 35.3 28.7 64 64 64h296.2c-25.1-30.4-40.2-69.5-40.2-112 0-5.4.2-10.7.7-16h-.7zm320 16c0-79.5-64.5-144-144-144s-144 64.5-144 144 64.5 144 144 144 144-64.5 144-144zm-144-80c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16z" />
                      </svg>
                      <p className="mt-1 mb-1 text-sm text-gray-500">Contract</p>
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                      >
                        <path
                          fillrule="evenodd"
                          d="M11 15a4 4 0 100-8 4 4 0 000 8zm5-4a5 5 0 11-10 0 5 5 0 0110 0z"
                        />
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                        <path d="M1 0a1 1 0 00-1 1v8a1 1 0 001 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 00-2-2V3a2 2 0 002-2h10a2 2 0 002 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 00-1-1H1z" />
                        <path d="M9.998 5.083L10 5a2 2 0 10-3.132 1.65 5.982 5.982 0 013.13-1.567z" />
                      </svg>
                      <p className="mb-1 text-sm text-gray-500">
                        Rp 6.000.000 - Rp 10.000.000
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link
              to={"/explore-job"}
              className="flex gap-5 rounded-xl border border-gray-400 p-5 shadow-xl transition hover:border-black-500/10 hover:shadow-blue-500/10"
              href="/services/digital-campaigns"
            >
              <img
                className="rounded"
                src="https://www.goodscoop.id/wp-content/uploads/2021/04/Logo-Lazada.jpg"
                width="150px"
                alt="company-logo"
              />
              <div>
                <h2 className=" text-xl font-bold text-gray-900">
                  Digital Marketing
                </h2>
                <p className="mb-1 text-sm text-gray-500">Lazada Inc</p>
                <div className="flex gap-3">
                  <div>
                    <span className="flex items-center gap-1">
                      <svg
                        viewBox="0 0 18 19"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <g
                          fill="none"
                          fillrule="evenodd"
                          stroke="currentColor"
                          strokelinecap="round"
                          strokelinejoin="round"
                          transform="translate(4 2)"
                        >
                          <path d="M6.5 16.54l.631-.711c.716-.82 1.36-1.598 1.933-2.338l.473-.624c1.975-2.661 2.963-4.773 2.963-6.334C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033c0 1.561.988 3.673 2.963 6.334l.473.624a54.84 54.84 0 002.564 3.05z" />
                          <path d="M9 6.5 A2.5 2.5 0 0 1 6.5 9 A2.5 2.5 0 0 1 4 6.5 A2.5 2.5 0 0 1 9 6.5 z" />
                        </g>
                      </svg>
                      <p className="mt-1 mb-1 text-sm text-gray-500">Jakarta Barat</p>
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                      >
                        <path
                          fillrule="evenodd"
                          d="M14.763.075A.5.5 0 0115 .5v15a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V14h-1v1.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V10a.5.5 0 01.342-.474L6 7.64V4.5a.5.5 0 01.276-.447l8-4a.5.5 0 01.487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V15h2V1.309l-7 3.5V15z"
                        />
                        <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                      </svg>
                      <p className="mb-1 text-sm text-gray-500">Remote Work</p>
                    </span>
                    <p className="mt-2 whitespace-nowrap rounded-full px-3.5 py-1 bg-green-100  text-sm text-green-700">
                      Open Hiring
                    </p>
                  </div>
                  <div>
                    <span className="flex items-center gap-1">
                      <svg
                        viewBox="0 0 640 512"
                        fill="#64748b"
                        height="1em"
                        width="1em"
                      >
                        <path d="M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8zm-56 8v40H64c-35.3 0-64 28.7-64 64v96h360.2c32.3-39.1 81.1-64 135.8-64 5.4 0 10.7.2 16 .7V160c0-35.3-28.7-64-64-64h-64V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zm192 296h-96c-17.7 0-32-14.3-32-32v-32H0v128c0 35.3 28.7 64 64 64h296.2c-25.1-30.4-40.2-69.5-40.2-112 0-5.4.2-10.7.7-16h-.7zm320 16c0-79.5-64.5-144-144-144s-144 64.5-144 144 64.5 144 144 144 144-64.5 144-144zm-144-80c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16z" />
                      </svg>
                      <p className="mt-1 mb-1 text-sm text-gray-500">Contract</p>
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                      >
                        <path
                          fillrule="evenodd"
                          d="M11 15a4 4 0 100-8 4 4 0 000 8zm5-4a5 5 0 11-10 0 5 5 0 0110 0z"
                        />
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                        <path d="M1 0a1 1 0 00-1 1v8a1 1 0 001 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 00-2-2V3a2 2 0 002-2h10a2 2 0 002 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 00-1-1H1z" />
                        <path d="M9.998 5.083L10 5a2 2 0 10-3.132 1.65 5.982 5.982 0 013.13-1.567z" />
                      </svg>
                      <p className="mb-1 text-sm text-gray-500">
                        Rp 6.000.000 - Rp 10.000.000
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link
              to={"/explore-job"}
              className="flex gap-5 rounded-xl border border-gray-400 p-5 shadow-xl transition hover:border-black-500/10 hover:shadow-blue-500/10"
              href="/services/digital-campaigns"
            >
              <img
                className="rounded"
                src="https://www.pranataprinting.com/wp-content/uploads/2021/04/Sejarah-Singkat-Perusahaan-Bukalapak-Dan-Perkembangannya.jpg"
                width="150px"
                alt="company-logo"
              />
              <div>
                <h2 className=" text-xl font-bold text-gray-900">
                  Data Analytics
                </h2>
                <p className="mb-1 text-sm text-gray-500">Bukalapak Inc</p>
                <div className="flex gap-3">
                  <div>
                    <span className="flex items-center gap-1">
                      <svg
                        viewBox="0 0 18 19"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <g
                          fill="none"
                          fillrule="evenodd"
                          stroke="currentColor"
                          strokelinecap="round"
                          strokelinejoin="round"
                          transform="translate(4 2)"
                        >
                          <path d="M6.5 16.54l.631-.711c.716-.82 1.36-1.598 1.933-2.338l.473-.624c1.975-2.661 2.963-4.773 2.963-6.334C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033c0 1.561.988 3.673 2.963 6.334l.473.624a54.84 54.84 0 002.564 3.05z" />
                          <path d="M9 6.5 A2.5 2.5 0 0 1 6.5 9 A2.5 2.5 0 0 1 4 6.5 A2.5 2.5 0 0 1 9 6.5 z" />
                        </g>
                      </svg>
                      <p className="mt-1 mb-1 text-sm text-gray-500">Jakarta Barat</p>
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                      >
                        <path
                          fillrule="evenodd"
                          d="M14.763.075A.5.5 0 0115 .5v15a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V14h-1v1.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V10a.5.5 0 01.342-.474L6 7.64V4.5a.5.5 0 01.276-.447l8-4a.5.5 0 01.487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V15h2V1.309l-7 3.5V15z"
                        />
                        <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                      </svg>
                      <p className="mb-1 text-sm text-gray-500">Remote Work</p>
                    </span>
                    <p className="mt-2 whitespace-nowrap rounded-full px-3.5 py-1 bg-green-100  text-sm text-green-700">
                      Open Hiring
                    </p>
                  </div>
                  <div>
                    <span className="flex items-center gap-1">
                      <svg
                        viewBox="0 0 640 512"
                        fill="#64748b"
                        height="1em"
                        width="1em"
                      >
                        <path d="M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8zm-56 8v40H64c-35.3 0-64 28.7-64 64v96h360.2c32.3-39.1 81.1-64 135.8-64 5.4 0 10.7.2 16 .7V160c0-35.3-28.7-64-64-64h-64V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zm192 296h-96c-17.7 0-32-14.3-32-32v-32H0v128c0 35.3 28.7 64 64 64h296.2c-25.1-30.4-40.2-69.5-40.2-112 0-5.4.2-10.7.7-16h-.7zm320 16c0-79.5-64.5-144-144-144s-144 64.5-144 144 64.5 144 144 144 144-64.5 144-144zm-144-80c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16z" />
                      </svg>
                      <p className="mt-1 mb-1 text-sm text-gray-500">Contract</p>
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                      >
                        <path
                          fillrule="evenodd"
                          d="M11 15a4 4 0 100-8 4 4 0 000 8zm5-4a5 5 0 11-10 0 5 5 0 0110 0z"
                        />
                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                        <path d="M1 0a1 1 0 00-1 1v8a1 1 0 001 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 00-2-2V3a2 2 0 002-2h10a2 2 0 002 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 00-1-1H1z" />
                        <path d="M9.998 5.083L10 5a2 2 0 10-3.132 1.65 5.982 5.982 0 013.13-1.567z" />
                      </svg>
                      <p className="mb-1 text-sm text-gray-500">
                        Rp 6.000.000 - Rp 10.000.000
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            
          </div>
          <div className="mt-12 text-center">
            <Link
              to={"explore-job"}
              className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
            >
              Load More Company
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
