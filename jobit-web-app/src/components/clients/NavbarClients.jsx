
import Cookies from "js-cookie"
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NavbarClients() {
  let navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const handleNavbarClients = () => {setShowMenu(!showMenu)};
  
  return (
  <>
    {/* ================= NAVBAR ====================== */}
    <nav className="z-10 bg-slate-50 sticky top-0">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              onClick={handleNavbarClients}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/*
            Icon when menu is closed.
      
            Menu open: "hidden", Menu closed: "block"
          */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/*
            Icon when menu is open.
      
            Menu open: "block", Menu closed: "hidden"
          */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <svg width="124" height="34" viewBox="0 0 124 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.62939e-06 8.55499L14.5 0.204193V17.8168L7.62939e-06 25.4084V8.55499Z" fill="#91A9FF"/>
                <path d="M28.9241 8.55499L14.4241 0.204193V17.8168L28.9241 25.4084V8.55499Z" fill="#5E81FF"/>
                <path d="M14.4241 17.8168L28.9241 25.4084L14.4241 33L0 25.4084L14.4241 17.8168Z" fill="#3C65F5"/>
                <path d="M37.1702 29.8008C37.4397 29.8125 37.721 29.8242 38.014 29.8359C38.26 29.8477 38.5237 29.8594 38.805 29.8711C39.0862 29.8711 39.3558 29.8711 39.6136 29.8711C40.012 29.8711 40.3518 29.8535 40.6331 29.8184C40.9261 29.7832 41.1663 29.6895 41.3538 29.5371C41.5413 29.3848 41.6819 29.1562 41.7757 28.8516C41.8694 28.5352 41.9163 28.0957 41.9163 27.5332V7.91602H46.1526L46.1702 28.8164C46.1702 29.707 46.0647 30.4512 45.8538 31.0488C45.6546 31.6348 45.3499 32.1094 44.9397 32.4727C44.5413 32.8242 44.0433 33.0703 43.4456 33.2109C42.8479 33.3633 42.1565 33.4395 41.3714 33.4395C40.8089 33.4395 40.2757 33.4102 39.7718 33.3516C39.2679 33.293 38.8225 33.2227 38.4358 33.1406C37.9788 33.0469 37.5569 32.9414 37.1702 32.8242V29.8008ZM50.9866 23.7188C50.9866 22.1484 51.1565 20.7598 51.4964 19.5527C51.8362 18.334 52.3636 17.3086 53.0784 16.4766C53.805 15.6445 54.719 15.0117 55.8206 14.5781C56.9222 14.1445 58.2405 13.9277 59.7757 13.9277C61.3108 13.9277 62.6292 14.1445 63.7308 14.5781C64.844 15.0117 65.7581 15.6445 66.4729 16.4766C67.1878 17.3086 67.7151 18.334 68.055 19.5527C68.3948 20.7598 68.5647 22.1484 68.5647 23.7188C68.5647 25.2891 68.3948 26.6895 68.055 27.9199C67.7151 29.1387 67.1878 30.1641 66.4729 30.9961C65.7581 31.8281 64.844 32.4609 63.7308 32.8945C62.6292 33.3281 61.3108 33.5449 59.7757 33.5449C58.2405 33.5449 56.9222 33.3281 55.8206 32.8945C54.719 32.4609 53.805 31.8281 53.0784 30.9961C52.3636 30.1641 51.8362 29.1387 51.4964 27.9199C51.1565 26.6895 50.9866 25.2891 50.9866 23.7188ZM59.7757 30.0117C60.7015 30.0117 61.4515 29.877 62.0257 29.6074C62.5999 29.3262 63.0452 28.9219 63.3616 28.3945C63.678 27.8555 63.889 27.1992 63.9944 26.4258C64.1116 25.6406 64.1702 24.7383 64.1702 23.7188C64.1702 22.7109 64.1116 21.8203 63.9944 21.0469C63.889 20.2617 63.678 19.6055 63.3616 19.0781C63.0452 18.5391 62.5999 18.1348 62.0257 17.8652C61.4515 17.584 60.7015 17.4434 59.7757 17.4434C58.8616 17.4434 58.1175 17.584 57.5433 17.8652C56.969 18.1348 56.5179 18.5391 56.1897 19.0781C55.8733 19.6055 55.6565 20.2617 55.5393 21.0469C55.4339 21.8203 55.3811 22.7109 55.3811 23.7188C55.3811 24.7383 55.4339 25.6406 55.5393 26.4258C55.6565 27.1992 55.8733 27.8555 56.1897 28.3945C56.5179 28.9219 56.969 29.3262 57.5433 29.6074C58.1175 29.877 58.8616 30.0117 59.7757 30.0117ZM73.135 5.68359H77.3011V15.2461C77.8518 15.0117 78.4495 14.7949 79.094 14.5957C79.6565 14.4316 80.3128 14.2793 81.0628 14.1387C81.8128 13.998 82.6272 13.9277 83.5061 13.9277C84.7483 13.9277 85.7737 14.1504 86.5823 14.5957C87.4026 15.0293 88.053 15.668 88.5335 16.5117C89.014 17.3438 89.3479 18.3633 89.5354 19.5703C89.7347 20.7656 89.8343 22.125 89.8343 23.6484C89.8343 25.4766 89.6878 27.0176 89.3948 28.2715C89.1018 29.5254 88.68 30.5449 88.1292 31.3301C87.5784 32.1152 86.8929 32.6777 86.0725 33.0176C85.264 33.3691 84.344 33.5449 83.3128 33.5449C82.4222 33.5449 81.5901 33.4395 80.8167 33.2285C80.055 33.0293 79.387 32.8008 78.8128 32.543C78.1448 32.2383 77.5354 31.8984 76.9847 31.5234L76.7386 33H73.135V5.68359ZM77.3011 28.8164C77.6761 29.0039 78.1038 29.168 78.5843 29.3086C78.9944 29.4375 79.4866 29.5547 80.0608 29.6602C80.635 29.7539 81.2796 29.8008 81.9944 29.8008C82.6975 29.8008 83.2718 29.7012 83.7171 29.502C84.1624 29.291 84.5081 28.957 84.7542 28.5C85.012 28.0312 85.1878 27.4219 85.2815 26.6719C85.387 25.9102 85.4397 24.9727 85.4397 23.8594C85.4397 22.6172 85.3987 21.5977 85.3167 20.8008C85.2347 19.9922 85.0589 19.3535 84.7893 18.8848C84.5315 18.416 84.1448 18.0938 83.6292 17.918C83.1253 17.7305 82.4456 17.6367 81.5901 17.6367C81.0511 17.6367 80.5296 17.6719 80.0257 17.7422C79.5218 17.8125 79.0647 17.8887 78.6546 17.9707C78.1858 18.0762 77.7347 18.1875 77.3011 18.3047V28.8164ZM95.0022 7.91602H99.221V33H95.0022V7.91602ZM110.155 11.8008H102.631V7.91602H121.932V11.8008H114.338V33H110.155V11.8008Z" fill="black"/>
              </svg>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Link to={"/"}
                  className="hover:text-blue-700 px-3 py-2 text-md font-medium"
                  aria-current="page"
                >
                  Home
                </Link>
                {Cookies.get("token") &&
                <Link to={"/dashboard"}
                  className="hover:text-blue-700 px-3 py-2 text-md font-medium"
                >
                  Dashboard
                </Link>
                }
                <Link to={"/explore-job"}
                  className="hover:text-blue-700 px-3 py-2 text-md font-medium"
                >
                  Explore Jobs
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-2 max-[600px]:hidden sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {!Cookies.get("token") &&
              <Link to={"/signup"}>
                <button className="text-white bg-gray-400 hover:bg-blue-600 rounded px-6 py-2 text-sm font-medium">
                  Register
                </button>
              </Link>
              }
              {!Cookies.get("token") &&
              <Link to={"/signin"}>
                <button className="text-white bg-blue-600 hover:bg-blue-700 rounded px-6 py-2 text-sm font-medium">
                  Sign In
                </button>
              </Link>
              }
              {Cookies.get("token") &&
              <Link to={"/signin"}>
                <button onClick={() => {Cookies.remove("token"); navigate("/signin")}} className="text-white bg-blue-600 hover:bg-blue-700 rounded px-6 py-2 text-sm font-medium">
                  Sign Out
                </button>
              </Link> 
              }
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className={showMenu ? "hidden sm:hidden" : "sm:hidden"} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          {Cookies.get("token") &&
          <Link
            to={"/dashboard"}
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </Link>
          }
          <Link
            to={"/"}
            className="text-gray-300 hover:bg-blue-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Home
          </Link>
          <Link
            to={"/explore-job"}
            className="text-gray-300 hover:bg-blue-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Explore Job
          </Link>
          {!Cookies.get("token") &&
          <Link
            to={"/signup"}
            // text-white bg-blue-600 hover:bg-blue-700 rounded px-6 py-2 text-sm font-medium
            className="text-gray-300 hover:bg-blue-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Register
          </Link>
          }
          {!Cookies.get("token") &&
          <Link
            to={"/signin"}
            // text-white bg-blue-600 hover:bg-blue-700 rounded px-6 py-2 text-sm font-medium
            className="text-gray-300 hover:bg-blue-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Sign In
          </Link>
          }
          {Cookies.get("token") &&
          <Link
            to={"/signin"}
            onClick={() => {Cookies.remove("token"); navigate("/signin")}}
            // text-white bg-blue-600 hover:bg-blue-700 rounded px-6 py-2 text-sm font-medium
            className="text-gray-300 hover:bg-blue-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Sign Out
          </Link>
          }
        </div>
      </div>
    </nav>
  </>

  )
}
