import Image from "next/image";
import Container from "@/components/Container";
import { Sling as Hamburger } from 'hamburger-react'

export default function Home() {
  return (
    <Container>
      <div id="header" className="relative col-start-1 col-end-7 row-span-4 bg-ghost card">
        <h1 className="font-bold text-[50px] leading-[60px]">Making Your Business Online Through Web Development</h1>
        <a href="/" className="px-8 py-3 bg-primary text-white rounded-lg absolute right-4 bottom-4 text-[18px] font-bold">Hire me 👋</a>
      </div>
      <div id="navbar" className="col-start-7 col-span-full row-span-1 bg-ghost rounded-lg flex justify-between py-0 font-bold text-[19px] items-center px-8">
        <h1>FIZZ</h1>
        <Hamburger />
      </div>
      <div id="photo" className="col-start-7 col-end-11 row-span-6 bg-primary object-cover bg-[url('/l0xa1.png')] card" />
      <div id="name" className="col-start-11 col-span-full row-span-1 bg-ghost flex justify-between items-center px-8 rounded-lg">
        <h1 className="text-gray">Name:</h1>
        <h1 className="font-bold">l0xa1</h1>
      </div>
      <div id="location" className="col-start-11 col-span-full row-span-4 bg-ghost flex justify-between items-start py-5 px-8 rounded-lg">
        <h1 className="text-gray">Based In:</h1>
        <h1 className="font-bold">KZ, Petropavlovsk</h1>
      </div>
      <div id="socials" className="col-start-11 col-span-full row-span-1 bg-ghost gap-3  flex justify-between items-center px-8 rounded-lg">
        <div className="bg-pink rounded-[100%] w-full  aspect-square"></div>
        <div className="bg-yellow rounded-[100%] w-full  aspect-square"></div>

        <div className="bg-green rounded-[100%] w-full  aspect-square"></div>
        <div className="bg-white rounded-[100%] w-full  aspect-square"></div>

      </div>
      <div id="card1" className="col-start-1 col-end-3 row-start-5 row-span-3 bg-green card flex flex-col justify-center gap-2 text-center items-center">
        <h1 className="text-[60px] font-bold">2+</h1>
        <p className="text-[17px]">Years Experience</p>
      </div>
      <div id="card2" className="col-start-3 col-end-5 row-start-5 row-span-3 bg-yellow card flex flex-col justify-center gap-2 text-center items-center text-black">
        <h1 className="text-[60px] font-bold">54+</h1>
        <p className="text-[17px]">Handled Projects</p>
      </div>
      <div id="card3" className="col-start-5 col-end-7 row-start-5 row-span-3 bg-pink card flex flex-col justify-center gap-2 text-center items-center">
        <h1 className="text-[60px] font-bold">40+</h1>
        <p className="text-[17px]">Clients</p>
      </div>
      <div id="portfolio" className="col-start-1 col-end-8 row-start-8 row-span-5 bg-ghost card flex flex-col gap-4 items-center">
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold text-[24px]">Web Portfolio</h1>
          <h1 className="text-gray text-[24px]">See All</h1>
        </div>
        <div className="flex justify-between w-full h-full items-center gap-4">
          <div className="bg-[url('/job1.png')] bg-cover bg-center rounded-lg aspect-square w-[33%]"></div>
          <div className="bg-[url('/job2.png')] bg-cover bg-center rounded-lg aspect-square w-[33%]"></div>
          <div className="bg-[url('/job3.png')] bg-cover bg-center rounded-lg aspect-square w-[33%]"></div>
        </div>
      </div>
      <div id="news" className="col-start-8 col-span-full row-start-8 row-span-5 bg-ghost card flex flex-col gap-14 items-center">
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold text-[24px]">About</h1>
          <h1 className="text-gray text-[24px]">Resume</h1>
        </div>
        <p className="text-gray ">As a web developer, I have experience in creating and maintaining websites using HTML, CSS, and JavaScript. I am proficient in several programming languages and have knowledge of various content management systems, including WordPress, Drupal, and Joomla. I am skilled in front-end and back-end development and have experience in developing responsive websites that work well on both desktop and mobile devices. I possess strong problem-solving abilities and can work well independently or as part of a team to deliver high-quality results.</p>
      </div>


    </Container>
  );
}
