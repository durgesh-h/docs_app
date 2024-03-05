"use client"
import React, { useRef, useState } from "react";
import Card from "./Card";
import Background from "./Background";


function Foreground() {

  const ref=useRef(null);
  const data = [
    {
      desc: "This is the first project of react which is animated by me.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is the first project of react which is animated by me.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      desc: "This is the first project of react which is animated by me.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "This is the first project of react which is animated by me.",
      filesize: "20mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is the first project of react which is animated by me.",
      filesize: ".4mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "green" },
    },
  ];

  return (
  
    <div ref={ref} className="top-0 left-0 z-[3] w-full h-full flex gap-10 bg-transparent  flex-wrap p-10">
     
      {data.map((item,index)=>(
      
        <Card data={item} reference={ref}/>
       
      ) )}
    </div>
    
  
  );
}

export default Foreground;
