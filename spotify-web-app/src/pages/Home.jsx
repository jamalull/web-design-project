import { useEffect, useState } from "react";
import { ScrollArea } from "../components/radix-components/scroll-area";
// import { Card } from "../components/Card";
import { Icons } from "../components/Icons";
import { Button } from "../components/radix-components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/radix-components/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/radix-components/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../components/radix-components/avatar";
import ContentSongs from "../components/ContentSongs";

// import {dataSongs } from "../data/dataSongs";
// import {getSonglists} from "../data/dataSongs2";

export function Home() {
  const [open, setOpen] = useState(false);
  const [dataSong, setdataSong] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/api/songs")
    if (!response.ok) {
      throw new Error('Data could not be fetched!')
    } else {
      return response.json()
    }
  }

  useEffect(() => {
    fetchData()
      .then((res) => {
        setdataSong(res)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])

  return (
    <ScrollArea className="relative bg-[#121212]">
      <div className="pb-4">
        <header className="sticky top-0 h-16 bg-black/80 flex flex-row items-center justify-between px-8 z-10">
          <div className="space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="inline-block relative h-8 w-8 p-3 rounded-full dark:bg-black/80 dark:hover:bg-black/80">
                    <Icons.chevronLeft className="absolute inset-0 m-auto h-4 w-4 text-white" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Go back</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="inline-block relative h-8 w-8 p-3 rounded-full dark:bg-black/80 dark:hover:bg-black/80">
                    <Icons.chevronRight className="absolute inset-0 m-auto h-4 w-4 text-white" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Go forward</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="rounded-full">
              <div className="relative transition-all flex flex-row items-center justify-center gap-x-2 bg-black p-[2px] rounded-full dark:hover:bg-stone-700/70">
                <span className="absolute flex h-5 w-5 animate-bounce items-center justify-center -right-2 top-0 z-10">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                </span>
                <Avatar className="h-7 w-7 shrink-0">
                  <AvatarImage src="https://github.com/jamalull.png" />
                  <AvatarFallback>EA</AvatarFallback>
                </Avatar>
                <span className="hidden lg:block font-semibold text-white leading-none">
                  Jamalul Ikhsan
                </span>
                <span className="hidden lg:block">
                  {open ? (
                    <Icons.caretUp className="h-4 w-4 text-white mr-1" />
                  ) : (
                    <Icons.caretDown className="h-4 w-4 text-white mr-1" />
                  )}
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={10}
              className="w-48 shadow-[rgba(0,_0,_0,_0.3)_0px_16px_24px_0px,_rgba(0,_0,_0,_0.2)_0px_6px_8px_0px]"
            >
              <DropdownMenuItem className="p-0">
                <a
                  href="https://github.com/jamalull"
                  className="flex flex-row items-center w-full justify-between py-2.5 px-3"
                  target="_blank"
                  rel="noopener"
                >
                  <span>Account</span>
                  <Icons.externalLink className="h-4 w-4" />
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem className="flex flex-row items-center justify-between">
                <span>Support</span>
                <Icons.externalLink className="h-4 w-4" />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-row items-center justify-between">
                <span>Download</span>
                <Icons.externalLink className="h-4 w-4" />
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <ContentSongs/>
        {/* {dataSong.map((item) => {console.log(item)})} */}
        {/* <div className="mt-8 mb-8 px-8">
          {dataSongs.map((data) => (
            <section key={data.songId} className="mt-9 first:mt-0">
              <div className="flex flex-row items-center justify-between">
                <h2 className="text-stone-100 font-bold text-2xl">
                  Recomendations
                </h2>
                <Button variant="link" className="font-semibold">
                  Show all
                </Button>
              </div>
              <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(180px,_1fr))] overflow-hidden grid-rows-[1fr_0_0_0_0_0] items-stretch justify-start gap-x-6">
                
                  <Card
                    key={data.songId}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    text={item.text}
                  />
              </div>
            </section>
          ))}
        </div> */}
      </div>
    </ScrollArea>
  );
}