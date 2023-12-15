'use client';
import React, { useState,useEffect } from "react";
import "./newcss.css";
import Image from "next/image";
import Logo from "../../public/Logo.svg";
import Link from "next/link";
import Line from "../../public/Line.svg";
import arrow from "../../public/rightarow.svg";
import list1 from "../../public/Listings 1.svg";
import list2 from "../../public/Listings2.webp";
import list3 from "../../public/Listings3.webp";
import nature1 from "../../public/nature1.svg";
import nature2 from "../../public/nature2.svg";
import nature3 from "../../public/nature3.svg";
import man1 from "../../public/Rectangle 44.svg";
import man2 from "../../public/Rectangle 46.svg";
import man3 from "../../public/Rectangle 45.svg";
import man4 from "../../public/Rectangle 43.svg";
import man5 from "../../public/Rectangle 47.svg";
import face from "../../public/facebook.svg";
import insta from "../../public/instagram.svg";
import twit from "../../public/twitter.webp";
import instagram from '../../public/instagram.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

  const [sidenavWidth, setSidenavWidth] = useState(0);

  const openNav = () => {
    setSidenavWidth(114);
  };

  const closeNav = () => {
    setSidenavWidth(0);
  };


  useEffect(()=>{
  
  AOS.init({duration:1000});
  },[]);

  return (
    <>
      <section>
        <div className="container-fluid" id="mont">
          {/* ----------SECTION 1----------- */}
          <div
            id="main-bg"
            className="bg-cover"
          >
          <div className="block md:hidden text-white z-50 fixed  
                w-full top-1 left-1">
          <div id="mySidenav" className="sidenav relative" style={{ width: `${sidenavWidth}px` }}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <a href="#">HOME</a>
        <a href="#">SHOP</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT</a>
      </div>

      
      <span className="navicon"  onClick={openNav}>&#9776;</span>
          </div>
            {/* ------------Nav Bar---------- */}
            <div id="nav-top" className="flex flex-row items-center justify-between  lg:p-8 xl:p-10 px-4 sm:px-8 md:px-10 lg:px-24 2xl:px-52 xl:px-36 ">
            
              <div id="logo1">
                <Image src={Logo} className="2xl:w-30 xl:w-24 lg:w-16 md:w-16 sm:w-12 w-12" alt="Logoo" />
              </div>
              <div id="nav-text" className="hidden md:block  text-white text-[13px] md:text-xs lg:text-xs xl:text-lg ">
                <ul id="lis" className="flex flex-row 2xl:space-x-12 xl:space-x-8 lg:space-x-6 md:space-x-6 sm:space-x-2 space-x-2">
                  <li className="mb-4" id="lis">
                    <Link href="#" className="hover:underline">
                      HOME
                    </Link>
                  </li>

                  <li className="mb-4">
                    <Link href="#ronics" className="hover:underline">
                      SHOP
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      ABOUT
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* ---------------Middle Text-------------- */}
            <div className="2xl:pb-96 lg:pb-64 md:pb-40 sm:pb-36 pb-36 2xl:space-y-10 xl:space-y-7 lg:space-y-4 md:space-y-3 mt-16 sm:mt-20 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-40 pl-12 sm:pl-14 md:pl-16 lg:pl-48  xl:pl-60 2xl:pl-[350px] 2xl:pr-52 xl:pr-32 lg:pr-32 md:pr-8 sm:pr-8 pr-4 opacity-50" id="middle-full">
              <p className="text-[#76805F] font-medium 2xl:text-5xl xl:text-4xl lg:text-2xl md:text-4xl sm:text-3xl text-2xl md:px-14 xl:px-16 2xl:px-24" id="middle-the">THE</p>
              <div className="justify-between flex ult-exp">
                <p className="text-gray-500 2xl:text-8xl xl:text-6xl  lg:text-5xl md:text-5xl sm:text-4xl text-3xl font-medium" id="middle-ultimate">ULTIMATE</p>
                <p className="text-gray-500 2xl:text-8xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl text-3xl font-medium" id="middle-experience">
                  EXPERIENCE
                </p>
              </div>
              <p className="text-[#76805F] text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-4xl 2xl:text-5xl  text-right md:pr-12 xl:pr-28   font-medium" id="middle-hair">
                {" "}
                FOR HAIR
              </p>
            </div>
          </div>

          {/* ----------SECTION 2----------- */}
          <div id="section2" className="flex flex-col 2xl:mt-20 xl:mt-12 lg:mt-10 md:mt-8 sm:mt-8 mt-6 justify-center items-center sm:gap-y-2 md:gap-y-5">
            <Image src={Line} className="2xl:h-24 xl:h-20 lg:h-16 md:h-16 sm:h-14 h-12 " alt="line" />
            <div className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl" data-aos="fade-right">EXPLORE </div>
            <div className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl" data-aos="fade-left">PRODUCTS</div>
          </div>

          {/* ----------section 3---------- */}
          <div id="section3" className="2xl:px-52 xl:px-36 lg:px-24 md:px-10 sm:px-8 px-4 mt-10 2xl:mt-20  grid gap-y-8 sm:gap-y-14 lg:gap-y-0  grid-cols-1  md:grid-cols-2 md:gap-10 lg:gap-9 2xl:gap-14  ">
            <div id="shampoo" data-aos="fade-right">
              <div  id="shampoo1" className="sm:text-[32px] md:text-[18px] lg:text-[22px] xl:text-3xl 2xl:text-4xl font-medium mt-44 md:mt-[130px] sm:mt-44  sm:pt-5 md:pt-1 lg:pt-30 xl:pt-16  2xl:pt-28 pl-12 md:pl-5 lg:pl-6 xl:pl-12">SHAMPOO</div>
              <div className="flex pb-32 lg:pb-48 pt-4 viewpro">
                <div  className="text-[#76805F] font-medium md:text-[8px] lg:text-[11px] xl:text-[11px]  2xl:text-lg pr-3 pl-12 md:pl-5 lg:pl-6 xl:pl-12">
                  View Product
                </div>
                <Image id="view1"  src={arrow} alt="arrow" />
              </div>
            </div>  
            <div id="condition" data-aos="fade-left">
              <div id="condition1" className="sm:text-[32px] md:text-[18px] lg:text-[22px] xl:text-3xl 2xl:text-4xl font-medium mt-44 md:mt-[130px] sm:mt-44 sm:pt-5 md:pt-1 lg:pt-30 xl:pt-16  2xl:pt-28 pl-12 md:pl-5 lg:pl-6 xl:pl-12">CONDITIONER</div>
              <div className="flex pb-32 lg:pb-48 pt-4">
                <div id="view" className="text-[#76805F] font-medium md:text-[8px] lg:text-[11px] xl:text-sm 2xl:text-lg pr-3 pl-12 md:pl-5 lg:pl-6 xl:pl-12">
                  View Product
                </div>
                <Image id="view1" src={arrow} alt="arrow"/>
              </div>
            </div>
          </div>
          {/* --------section 4---------- */}
          <div  className="px-4 sm:px-8 md:px-10 lg:px-24 xl:px-36 2xl:px-52 sm:mt-20  md:space-y-0 sm:space-y-16 space-y-14 mt-10  md:mt-10 lg:mt-0 xl:mt-0 2xl:mt-20 grid md:grid-cols-3 md:gap-8  lg:gap-20 oil">
            <div data-aos="flip-left">
              <Image className="w-full" src={list1} alt="image"/>
              <div className="2xl:space-y-5 xl:space-y-3 lg:space-y-2 mt-4 justify-center items-center flex flex-col ">
                <div  className="lg:text-sm 2xl:text-lg xl:text-sm font-medium">TALH Shampoo</div>
                <div  id="anime" className="lg:text:xl 2xl:text-3xl xl:text-xl font-medium">$17.00</div>
                <button  className="2xl:px-[70px] xl:px-12 lg:px-6 px-5
                 rounded-sm 2xl:py-4 xl:py-3 lg:py-1 py-1 bg-black text-white 2xl:text-lg xl:text-[12px] lg:text-sm font-medium addtocart">
                  Add to Cart
                </button>
              </div>
            </div>
            <div data-aos="flip-left">
              <Image className="w-full" src="/svg/img1.png" alt="image" height={446} width={446}/ >
              <div className="2xl:space-y-5 xl:space-y-3 lg:space-y-2 mt-4 justify-center items-center flex flex-col ">
                <div className="lg:text-sm 2xl:text-lg xl:text-sm font-medium">
                  TALH Hair Conditioner
                </div>
                <div  id="anime" className=" lg:text:xl 2xl:text-3xl xl:text-xl font-medium">$17.00</div>
                <button  className="  2xl:px-[70px] xl:px-12 lg:px-6 px-5
                 rounded-sm 2xl:py-4 xl:py-3 lg:py-1 py-1 bg-black text-white 2xl:text-lg xl:text-[12px] lg:text-sm font-medium addtocart">
                  Add to Cart
                </button>
              </div>
            </div>
            <div data-aos="flip-left">
              <Image alt="image" className="w-full" src={list3} />
              <div className="2xl:space-y-5 xl:space-y-3 lg:space-y-2 mt-4 justify-center items-center flex flex-col ">
                <div className="lg:text-sm 2xl:text-lg xl:text-sm font-medium">TALH Combo</div>
                <div  id="anime" className="lg:text:xl 2xl:text-3xl xl:text-xl font-medium">$30.00</div>
                <button  className="2xl:px-[70px] xl:px-12 lg:px-6 px-5
                 rounded-sm 2xl:py-4 xl:py-3 lg:py-1 py-1 bg-black text-white 2xl:text-lg xl:text-[12px] lg:text-sm font-medium addtocart">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* -------------section 5-------- */}
          <div data-aos="zoom-in-down" className="px-4 sm:px-8 md:px-10 lg:px-24 xl:px-36 2xl:px-52 mt-10 sm:mt-10 md:mt-10 lg:mt-14 xl:mt-10 2xl:mt-20">
            <div id="greens" className="">
              <div className="2xl:py-28 xl:py-20 lg:py-16 md:py-12 sm:py-10 py-7 2xl:px-64 flex flex-col items-center space-y-6 sm:space-y-10 md:space-y-5 lg:space-y-7 xl:space-y-4 2xl:space-y-9">
                <div className="2xl:text-7xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-4xl text-3xl font-medium">ABOUT TALH</div>
                <div className="flex md:gap-4 lg:gap-6  xl:gap-7 2xl:gap-14">
                  <Image id="about1" className="2xl:w-44 xl:w-28 lg:w-28 sm:w-28 w-32" src={nature3} alt="image"/>
                  <Image alt="image" id="about2" className="2xl:w-52 xl:w-32 sm:w-[120px] w-36 mt-10 md:mt-20 lg:mt-20  xl:mt-20 2xl:mt-24" src={nature2} />
                  <Image alt="image" id="about3" className="2xl:w-44 xl:w-28 lg:w-28 sm:w-28 w-32" src={nature1} />
                </div>
                <div>
                  <p className="text-[#606060] text-xs sm:text-sm 2xl:text-xl text-center xyz" id="mont">
                    Lorem ipsum dolor sit amet. Sed distinctio commodi sit quasi
                    nulla et aperiam delectus est deleniti commodi in quis
                    similique? Ut aliquam consequuntur aut delectus esse aut
                    quidem nihil.
                    <br />
                    Eos corporis quae in itaque temporibus ea illo nesciunt ut
                    iure itaque eos impedit sint ut nisi fugit non accusamus
                    dicta!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ------section 6--------- */}
          <div className=" 2xl:mt-28 xl:mt-10 md:mt-10 sm:mt-14 mt-10 px-4 sm:px-8 md:px-10 lg:px-24 xl:px-36 2xl:px-52">
            <div className="text-4xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-medium flex justify-center ">
              INSTAGRAM
            </div>
            <div className="grid sm:grid-cols-1  md:grid-cols-5  md:space-y-0 sm:space-y-7 space-y-4 gap-3 mt-5 sm:mt-5 md:mt-5 lg:mt-12">

            <div id="image2">
              <Image  id="img1" className="w-9/12 mx-auto md:w-full "  src={man1} alt="image"/>
              <div className="img3">
                <Image id="img4" src={instagram} alt="image"/>
              </div>
              </div>
              <div id="image2">
              <Image id="img1" className="w-9/12 mx-auto md:w-full " src={man2} alt="image" />
              <div className="img3">
                <Image id="img4" src={instagram}/>
              </div>
              </div>
              <div id="image2">
              <Image id="img1" className="w-9/12 mx-auto md:w-full " src={man3} alt="image"/>
              <div className="img3">
                <Image id="img4" src={instagram}/>
              </div>
              </div>
              <div id="image2" >
              <Image id="img1" className="w-9/12 mx-auto md:w-full " src={man4} alt="image"/>
              <div className="img3">
                <Image id="img4" src={instagram} alt="image"/>
              </div>
              </div>
              <div id="image2">
              <Image id="img1" className="w-9/12 mx-auto md:w-full " src={man5} alt="image"/>
              <div className="img3">
                <Image id="img4" src={instagram} alt="image"/>
              </div>
              </div>

            </div>
          </div>
          {/* -------section 7----- */}
          <div className="mt-28"  >

         
            <footer className="snow1 snow2" id="black" >
           
              <div className="grid grid-cols-2 gap-10 px-4 sm:px-8 lg:px-24 xl:px-36 2xl:px-52  py-8 xl:text-sm  2xl:text-lg md:px-10 lg:py-14 2xl:py-16 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
                <div className="sm:order-1">
                  <Image src={Logo} className="xl:w-36 2xl:w-48  logot" alt="Logoo" />
                </div>
                <div className="text-white xl:ml-10 2xl:ml-20 sm:order-2">
                  <h2 className="mb-6 font-semibold  uppercase dark:text-white">
                    QUICK LINKS
                  </h2>
                  <ul className=" lg:space-y-2  xl:space-y-2 2xl:space-y-4">
                    <li className="">
                      <Link href="#" className=" hover:underline">
                        Home
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Shop
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#" className="hover:underline">
                        About
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="text-white sm:order-3">
                  <h2 className="mb-6  font-semibold  uppercase dark:text-white">
                    OTHER LINKS
                  </h2>
                  <ul className=" dark:text-gray-400 lg:space-y-2 xl:space-y-2 2xl:space-y-4">
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Refund Policy
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Refund Policy
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Cookies
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="text-white sm:order-4">
                  <h2 className="mb-6  font-semibold  uppercase dark:text-white">
                    MY ACCOUNT
                  </h2>
                  <ul className=" dark:text-gray-400 lg:space-y-2 xl:space-y-2 2xl:space-y-4 ">
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Shopping Bag
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Wish List
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Order History
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#" className="hover:underline">
                        Order Tracking
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="text-white space-y-2 sm:space-y-2 md:space-y-2 lg:space-y-2 xl:space-y-2 2xl:space-y-4 sm:order-5 ">
                  <h2 className="  font-semibold  uppercase dark:text-white">
                    SUBSCRIBE TO OUR EMAILS
                  </h2>
                  <div className="relative" >
                    <input
                    
                      className="border w-[100%] border-[#48523F]  2xl:px-6 bg-black  2xl:py-2 py-1  text-white"
                      type="email"
                      placeholder="Email"
                    />
                    <Image
                     id="view1"
                      src={arrow} 
                      alt="Right Arrow"
                      className="absolute top-1/2 right-2 transform -translate-y-1/2 w-5"
                    />
                  </div>

                  <div className="flex gap-4 ">
                    <Link id="roundd" href="https://www.facebook.com">
                      <Image src={twit} />
                    </Link>
                    <Link id="roundd" href="https://www.instagram.com">
                      <Image src={face} />
                    </Link>
                    <Link id="roundd" href="https://twitter.com">
                      <Image src={insta} />
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="xl:mx-36 2xl:mx-40 lg:mx-24 md:mx-9 sm:mx-6 mx-4 border-t-2 border-[#315031] opacity-25"/>

              <div className="xl:py-3 2xl:py-6 ">
                <div className="text-xs xl:text-sm 2xl:text-base font-light  text-[#AAA] flex justify-center text-center ">
                  © 2023 TALH
                  <Link href="#">. </Link>
                  All Rights Reserved.
                </div>
              </div>
            </footer>
          </div>


        </div>
      </section>
    </>
  );
};

export default Home;
