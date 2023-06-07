import React from "react";
import { Slide } from "react-awesome-reveal";

export default function About() {
  return (
    <Slide>
      <div className="my-48 flex flex-col md:flex-row md:justify-start md:items-center md:gap-5 mx-4 md:mx-96">
        <img
          className="h-96 w-96 md:h-96 md:w-96"
          src="https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/340763553_937654450717223_3773237026733644694_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG5gjOoDxTuDKJY4GYnCXYeU17ugjPkJzdTXu6CM-QnN_BG6Q10TrMGtWheegls3QR7-tEtercCYnIJAscWNSTL&_nc_ohc=e0ru8EY0OWsAX-FhZ3V&_nc_ht=scontent.fmnl17-4.fna&oh=00_AfAs0bKjU7OigGyepTk3mXI692rRdEX6tmXP5rAgJnWx8Q&oe=6485FDAF"
          alt="image description"
        />

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          cum vitae eaque iure consectetur. Porro officiis ipsa quo nulla
          consequatur, totam cumque assumenda distinctio odio magnam libero
          molestiae commodi facilis?
        </p>
      </div>
    </Slide>
  );
}
