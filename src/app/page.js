"use client"
import Image from "next/image";
import User from "./pics/User.png"
import UserFooter from "./pics/user-footer.png"
import people from "./pics/people.png"
import icon from "./pics/icon.png"
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex p-[2vh] bg-[#131619]">
      <Left/>
      <div className="flex flex-col">
        <Top/>
        <Center/>
        <Bottom/>
      </div>
    </main>
  );
}

function Left(){
  return(
    <div className="w-[30vw] bg-[#0D0F10] rounded-[10px]">
      <div className="flex flex-row p-[5vh] justify-between items-center">
        <Image src={User} width={100} height={100}/>
        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="white" width={20} height={20} viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
      </div>

      <div className="w-[30vw] h-[0.2px] bg-[#686B6E] mb-[1vh]"></div>

      <div className="flex flex-col gap-6 p-[5vh]">
        <div className="text-[#686B6E] text-[0.8rem]">GENERAL</div>
        <div className="flex flex-row gap-4 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#686B6E" width={15} height={15} viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          <div className="text-[white] text-[0.7rem]">Search</div>
        </div>
        <div className="flex flex-row gap-4 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#686B6E" width={15} height={15} viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"/></svg>
          <div className="text-[white] text-[0.7rem]">Billing</div>
        </div>
      </div>

      <div className="w-[30vw] h-[0.2px] bg-[#686B6E] mb-[1.5vh]"></div>

      <div className="flex flex-col gap-6 p-[5vh] pb-[50vh]">
        <div className="text-[#686B6E] text-[0.8rem]">PROJECTS</div>
        <div className="flex flex-row gap-4 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="#B6F09C" viewBox="0 0 448 512"><path d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
          <div className="cursor-pointer text-[white] text-[0.7rem]">Orbital Oddysey</div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Image width={15} height={15} src={icon}/>
          <div className="cursor-pointer text-[white] text-[0.7rem]">Digital Product Launch</div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="#E26F20" viewBox="0 0 448 512"><path d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
          <div className="cursor-pointer text-[white] text-[0.7rem]">Brand refresh</div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="#82DBF7" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
          <div className="cursor-pointer text-[white] text-[0.7rem]">Social media Strategy</div>
        </div>
        <div className="flex flex-row gap-4 items-center mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="#363A3D" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
          <div className="cursor-pointer text-[#363A3D] text-[0.7rem]">Add New Project</div>
        </div>
      </div>

      <div className="pb-[3vh]">
        <div className="flex flex-row p-[3vh] m-[1vh] items-center justify-between bg-gradient-to-b from-[#d7eded26] to-[#ccebeb00] rounded-[15px]">
          <Image src={UserFooter} width={100} height={100}/>
          <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="#686B6E" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
        </div>
      </div>

    </div>
  );
}

function Top(){
  return(
    <div className="flex flex-col w-[65vw] h-[25vh] ml-3 bg-[#0D0F10] rounded-[10px]">
      <div className=" p-5 flex flex-row items-center justify-between">
        <div className="">
          <div className="text-white text-[1rem]">Orbital Oddysey</div>
          <div className="text-[#9B9C9E] text-[0.7rem]">Marketing Campaign for a new TV series Launch</div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Image className="mr-6" src={people} width={100} height={100}/>
          <svg className="mr-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" height={15} width={15} fill="#686B6E" viewBox="0 0 448 512"><path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/></svg>
          <div className="cursor-pointer text-[#686B6E] text-[0.6rem] mr-5">Share</div>
            <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height={15} width={15} fill="white" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>
        </div>
      </div>

      <div className="h-[0.2px] bg-[#686B6E]"></div>

      <div className="flex flex-row p-5 gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-3 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" height={15} width={15} fill="#B6F09C" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
            <div className="text-[white] text-[0.7rem]">Artificium</div>
          </div>
          <div className="bg-[#B6F09C] h-[3px] rounded-[15px]"></div>
        </div>
        <div className="flex flex-row gap-3 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" height={15} width={15} fill="#686B6E" viewBox="0 0 512 512"><path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"/></svg>
          <div className="text-[#686B6E] text-[0.7rem]">Chat</div>
        </div>
        <div className="flex flex-row gap-3 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" height={15} width={15} fill="#686B6E" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H289.9L247 53.1C233.5 39.6 215.2 32 196.1 32H64zM48 96c0-8.8 7.2-16 16-16H196.1c6.4 0 12.5 2.5 17 7l45.3 45.3c7.5 7.5 17.7 11.7 28.3 11.7H448c8.8 0 16 7.2 16 16v32H48V96zm0 144H464V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V240z"/></svg>
          <div className="text-[#686B6E] text-[0.7rem]">Library</div>
        </div>
      </div>
    </div>
  );
}

function Center(){
  return(
    <div id="content-main" className="flex flex-row m-3 bg-[#131619] items-center rounded-[10px] w-[65vw] h-[55vh] h-[10vh]p-5">
      
    </div>
  );
}

function Bottom(){
  const [name, setName] = useState("");
  return(
    <div className="flex flex-row ml-3 bg-[#0D0F10] items-center rounded-[10px] w-[65vw] h-[10vh] fixed bottom-2 p-5">
      <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height={15} width={15} fill="#686B6E" viewBox="0 0 384 512"><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/></svg>
      <input value={name} onChange={(e) => setName(e.target.value)} className="w-[60vw] bg-[#0D0F10] border-0 outline-none text-[#363A3D] text-[0.8rem] ml-3" placeholder="You can ask me anything! I am here to help."/>
      <svg className="cursor-pointer mr-3" xmlns="http://www.w3.org/2000/svg" height={15} width={15} fill="#686B6E" viewBox="0 0 448 512"><path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"/></svg>
      <svg id="submit" className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height={15} width={15} fill="#686B6E" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
    </div>
  );
}
