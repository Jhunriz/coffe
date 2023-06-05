import { Button } from "flowbite-react";
import React from "react";
import { Slide } from "react-awesome-reveal";

export default function Homepage() {
  return (
    <>
      <Slide>
        <div className="flex flex-col items-start gap-5 justify-start py-10 px-6 md:flex-col md:items-start md:justify-start lg:py-20 lg:px-12 xl:py-48 xl:px-24">
          <p className="text-3xl md:text-5xl">Bukangliwayway</p>
          <p className="md:text-lg xl:text-sm">
            "Bukang-liwayway" is a Tagalog word that can be translated into
            English as "dawn"
          </p>
          <p className="text-sm">"daybreak", or "break of day".</p>
          <Button gradientDuoTone="tealToLime">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Button>
        </div>
      </Slide>
    </>
  );
}
