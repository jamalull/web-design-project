import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"

export default function SignUp() {
  const {state, handleFunction} = useContext(GlobalContext);
  const {inputSignUp} = state;
  const {handleInputSignUp, handleSubmitSignUp} = handleFunction;

  return (
    <>
      <div className=" mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Register Account</h1>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
            eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form onSubmit={handleSubmitSignUp} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="name">
              Fullname *
            </label>
            <div className="relative">
              <input
                onChange={handleInputSignUp}
                value={inputSignUp.name}
                name="name"
                type="text"
                className="w-full rounded-lg border-2 border-gray-200 p-4 pe-12 text-sm shadow-sm bg-transparent"
                placeholder="Enter Your Fullname"
                required
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 25 20"
                  stroke="currentColor"
                >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
                      clipRule="evenodd"
                    />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="photo">
              Photo *
            </label>
            <div className="relative">
              <input
                onChange={handleInputSignUp}
                value={inputSignUp.image_url}
                name="image_url"
                type="text"
                className="w-full rounded-lg border-2 border-gray-200 p-4 pe-12 text-sm shadow-sm bg-transparent"
                placeholder="Upload Your Photo here"
                required
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="#9ca3af"
                    viewBox="0 0 512 512"
                    stroke="currentColor"
                  >
                      <path d="M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm323.8 106.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6-26.5-33.1c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4S78.8 416 88 416h336c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z" />
                  </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="email">
              Email Address *
            </label>
            <div className="relative">
              <input
                onChange={handleInputSignUp}
                value={inputSignUp.email}
                name="email"
                type="email"
                className="w-full rounded-lg border-2 border-gray-200 p-4 pe-12 text-sm shadow-sm bg-transparent"
                placeholder="Enter email"
                required
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" >
              Password *
            </label>
            <div className="relative">
              <input
                onChange={handleInputSignUp}
                value={inputSignUp.password}
                name="password"
                type="password"
                className="w-full rounded-lg border-2 border-gray-200 p-4 pe-12 text-sm shadow-sm bg-transparent"
                placeholder="Enter password"
                minlength="8"
                required
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            
          </div>
            
            <button
              type="submit"
              className="w-full inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Submit & Register
            </button>
            <p className="text-sm text-gray-500">
              Already Have an Account ?
              <Link to={"/SignIn"} className="underline" href="">
                Sign in here
              </Link>
            </p>

        </form>
      </div>

      <img className='ml-36' src='https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-2.svg' alt="" />

    </>
  )
}
