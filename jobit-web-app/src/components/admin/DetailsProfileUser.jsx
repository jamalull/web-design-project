import Cookies from "js-cookie"
import React from 'react'

export default function DetailsProfileUser() {
  return (
    <>
      <div className="w-1/2 ml-10 mt-10">
        <article className="group">
          <img
            alt="Lava"
            src={Cookies.get("image")}
            className="h-56 w-1/2 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
          />
          <div>
            <h3 className="text-lg font-medium pt-3 text-gray-900">
              Account ID : {Cookies.get("id")}
            </h3>

            <h3 className="text-lg font-medium pt-3 text-gray-900">
              Name : {Cookies.get("name")}
            </h3>
            
            <h3 className="text-lg font-medium text-gray-900">
              Email : {Cookies.get("email")}
            </h3>
            <p className="mt-2 line-clamp-7 text-sm/relaxed text-gray-500">
              <b className="text-gray-900">About Me : </b> <br />
              I am a fresh graduate from bachelor of computer science. I am enthusiastic, reliable, 
              responsible and hardworking person.    I  am a team worker and adapt easily to all 
              challenging situations. I am able to work well both in a team and individual environment. 
              The last activity is currently active as a job seeker and while studying programming 
              languages such as JavaScript, Python, PHP, and others. Currently I'm looking for job 
              opportunities that can provide opportunities for further development.
            </p>

            <h3 className="text-md font-medium pt-5 text-gray-900">
              Created Profile Account : {Cookies.get("created")}
            </h3>
            <h3 className="text-md font-medium text-gray-900">
              Updated Profile Account : {Cookies.get("updated")}
            </h3>

          </div>
        </article>
      </div>

    </>
  )
}
