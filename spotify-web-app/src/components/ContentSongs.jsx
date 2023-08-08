import React from 'react'
import {dataSongs} from '../data/dataSongs'
import { Button } from "./radix-components/button"
import { Card } from "../components/Card";

function ContentSongs() {
  return (
    <>
      <div className="mt-8 mb-8 px-8">
        {dataSongs.map((data) => (
          <section key={data.section.id} className="mt-9 first:mt-0">
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-stone-100 font-bold text-2xl">
                {data.section.title}
              </h2>
              <Button variant="link" className="font-semibold">
                Show all
              </Button>
            </div>
            <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(180px,_1fr))] overflow-hidden grid-rows-[1fr_0_0_0_0_0] items-stretch justify-start gap-x-6">
              {data.section.content.map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

export default ContentSongs