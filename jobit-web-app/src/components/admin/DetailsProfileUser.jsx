import React from 'react'

export default function DetailsProfileUser() {
  return (
    <>
      <div className="w-1/2 ml-10 mt-10">
        <article className="group">
          <img
            alt="Lava"
            src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-56 w-1/2 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
          />
          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Name : Jamalul Ikhsan
              </h3>
            </a>
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Email : jamalulikhsan@gmail.com
              </h3>
            </a>
            <p className="mt-2 line-clamp-7 text-sm/relaxed text-gray-500">
              <b className="text-gray-900">My Describe : </b> <br />
              I am a fresh graduate from bachelor of computer science. I am enthusiastic, reliable, 
              responsible and hardworking person.    I  am a team worker and adapt easily to all 
              challenging situations. I am able to work well both in a team and individual environment. 
              The last activity is currently active as a job seeker and while studying programming 
              languages such as JavaScript, Python, PHP, and others. Currently I'm looking for job 
              opportunities that can provide opportunities for further development.
            </p>
          </div>
        </article>
      </div>

    </>
  )
}
