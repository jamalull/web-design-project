import React from 'react'
import { Link } from "react-router-dom"

export default function RestrictedPage() {
  return (
    <>
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">404</h1>
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>
        <p className="mt-4 text-gray-500">Sorry you can't enter this page.</p>
        <p className="mt-4 text-gray-500">Only Admin can access this page.</p>
        <Link to={"/"}
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>

  </>
  )
}
