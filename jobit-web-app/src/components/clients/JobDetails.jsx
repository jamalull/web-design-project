import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useParams } from "react-router";

export default function JobDetails() {
  const { state, handleFunction } = useContext(GlobalContext);
  const { data } = state;
  const { convertRupiah } = handleFunction;
  let { idData } = useParams();

  return (
    <>
      {data !== null &&
        data.map((res) => {
          if (res.id == idData) {
            return (
              <>
                <section className="bg-slate-100 py-16">
                  <img
                    className="mx-auto rounded-md mb-12"
                    src={res.company_image_url}
                    width="150px"
                    alt="company-logo"
                  />

                  <div>
                    <h2 className="text-center text-xl font-bold text-gray-900">
                      {res.title}
                    </h2>
                    <p className="mb-5 text-sm text-center text-gray-500">
                      {res.company_name}
                    </p>
                    <div className="flex justify-center gap-3">
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
                        <p className="mt-1 mb-1 text-sm text-gray-500">
                          {res.company_city}
                        </p>
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
                        <p className="mb-1 text-sm text-gray-500">
                          {res.job_type}
                        </p>
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          viewBox="0 0 640 512"
                          fill="#64748b"
                          height="1em"
                          width="1em"
                        >
                          <path d="M184 48h144c4.4 0 8 3.6 8 8v40H176V56c0-4.4 3.6-8 8-8zm-56 8v40H64c-35.3 0-64 28.7-64 64v96h360.2c32.3-39.1 81.1-64 135.8-64 5.4 0 10.7.2 16 .7V160c0-35.3-28.7-64-64-64h-64V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zm192 296h-96c-17.7 0-32-14.3-32-32v-32H0v128c0 35.3 28.7 64 64 64h296.2c-25.1-30.4-40.2-69.5-40.2-112 0-5.4.2-10.7.7-16h-.7zm320 16c0-79.5-64.5-144-144-144s-144 64.5-144 144 64.5 144 144 144 144-64.5 144-144zm-144-80c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16z" />
                        </svg>
                        <p className="mt-1 mb-1 text-sm text-gray-500">
                          {res.job_tenure}
                        </p>
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
                          {convertRupiah(res.salary_min)} - {convertRupiah(res.salary_max)}
                        </p>
                      </span>
                    </div>
                    <div className="flex justify-center gap-3">
                      <span className="flex items-center gap-1">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                          <path d="M13 7h-2v6h6v-2h-4z" />
                        </svg>
                        <p className="mb-1 text-sm text-gray-500">
                          Published at {res.created_at}
                        </p>
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1a6.887 6.887 0 000 9.8c2.73 2.7 7.15 2.7 9.88 0 1.36-1.35 2.04-2.92 2.04-4.9h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58a8.987 8.987 0 0112.65 0L21 3v7.12M12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z" />
                        </svg>
                        <p className="mb-1 text-sm text-gray-500">
                          Updated at {res.updated_at}
                        </p>
                      </span>
                    </div>
                    {res.job_status == 1 ? (
                      <p className="w-32 mt-2 mb-10 mx-auto text-center whitespace-nowrap rounded-full px-3.5 py-1 bg-green-200  text-sm text-green-700">
                        Open Hiring
                      </p>
                    ) : (
                      <p className="w-32 mt-2 mb-10 mx-auto text-center whitespace-nowrap rounded-full px-3.5 py-1 bg-red-200  text-sm text-red-700">
                        Closed Hiring
                      </p>
                    )}
                  </div>

                  <div className="flex w-52 mx-auto">
                    <button
                      type="submit"
                      className="group mx-auto mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-blue-400 sm:mt-0 sm:w-auto"
                    >
                      <span className="text-sm font-medium"> Apply Job </span>
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
                  <div className="w-1/2 mx-auto mt-10">
                    <h1 className="font-bold mb-3">Job Description</h1>
                    <p>{res.job_description}</p>
                  </div>
                  <div className="w-1/2 mx-auto mt-10">
                    <h1 className="font-bold mb-3">Qualification</h1>
                    <p>{res.job_qualification}</p>
                  </div>
                  <div className="w-1/2 mx-auto mt-10 mb-32 flex gap-3 items-center">
                    <h1 className="font-bold mb-3">Share This Job : </h1>

                    {/* <!-- Twitter --> */}

                    <a
                      className="inline-flex items-center gap-2 rounded border-2 border-[#55acee] bg-[#55acee] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#55acee] focus:outline-none focus:ring active:opacity-75"
                      href="/twitter"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Twitter
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>

                    {/* <!-- Facebook --> */}

                    <a
                      className="inline-flex items-center gap-2 rounded border-2 border-[#3b5998] bg-[#3b5998] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#3b5998] focus:outline-none focus:ring active:opacity-75"
                      href="/facebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Facebook
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                      </svg>
                    </a>

                    {/* <!-- LinkedIn --> */}

                    <a
                      className="inline-flex items-center gap-2 rounded border-2 border-[#0077b5] bg-[#0077b5] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#0077b5] focus:outline-none focus:ring active:opacity-75"
                      href="/linkedin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                      </svg>
                    </a>
                  </div>
                </section>
              </>
            );
          }
        })}
    </>
  );
}
