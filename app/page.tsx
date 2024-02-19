"use client";

import React, { useState } from "react";
import Image from "next/image";
import coffee from "@/public/coffee.png";
import dynamic from "next/dynamic";


export default function Home() {
  
  return (
    <main>
      <h1>Hello World</h1>
      <button

      
        onClick={async () => {
          const _ =  (await import('lodash')).default;
          const users = [
            {name: 'c'},
            {name: 'b'},
            {name: 'a'}
          ];

         const sorted =  _.orderBy(users, ['name']);
         console.log(sorted)
        }}
      >
        Show
      </button>
    </main>
  );
}
