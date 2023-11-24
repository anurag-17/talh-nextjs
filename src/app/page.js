import React from "react";
import "./newcss.css";
import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
import Line from "../../public/Line.svg";
import arrow from "../../public/rightarow.svg";
import list1 from "../../public/Listings 1.svg";
import list2 from "../../public/Listings 2.png";
import list3 from "../../public/Listings 3.png";
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
import twit from "../../public/twitter.svg";

const Home = () => {
  return (
    <>
      <section>
        <div className="container-fluid" id="mont">
          {/* ----------SECTION 1----------- */}
          <div
            id="main-bg"
            className="    bg-cover"
          >
            {/* ------------Nav Bar---------- */}
            <div className="flex flex-row items-center justify-between  lg:p-8 xl:p-10 md:px-10 lg:px-24 2xl:px-52 xl:px-36 ">
              <div>
                <Image src={Logo} className="2xl:w-30 xl:w-24 lg:w-16 md:w-16" alt="Logoo" />
              </div>
              <div className="text-white lg:text-xs xl:text-lg ">
                <ul className="flex flex-row 2xl:space-x-12 xl:space-x-8 lg:space-x-6 md:space-x-6">
                  <li className="mb-4">
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
            <div className="2xl:pb-96 lg:pb-64 md:pb-40 2xl:space-y-10 xl:space-y-7 lg:space-y-4 md:space-y-3  md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-36 md:pl-16 lg:pl-44  xl:pl-60 2xl:pl-72 2xl:pr-40 xl:pr-32 lg:pr-24 md:pr-8 opacity-50" id="middle-full">
              <p className="text-[#76805F] font-medium 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl md:px-14 xl:px-16 2xl:px-24" id="middle-the">THE</p>
              <div className="justify-between flex">
                <p className="text-gray-500 2xl:text-8xl xl:text-6xl  lg:text-5xl md:text-5xl font-medium " id="middle-ultimate" >ULTIMATE </p>
                <p className="text-gray-500 2xl:text-8xl xl:text-6xl lg:text-5xl md:text-5xl font-medium" id="middle-experience" >
                  EXPERIENCE
                </p>
              </div>
              <p className="text-[#76805F] md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl  text-right md:pr-12 xl:pr-28   font-medium" id="middle-hair">
                {" "}
                FOR HAIR
              </p>
            </div>
          </div>

          {/* ----------SECTION 2----------- */}
          <div className="flex flex-col 2xl:mt-20 xl:mt-12 lg:mt-10 md:mt-8 sm:mt-8 justify-center items-center sm:gap-y-2 md:gap-y-5">
            <Image src={Line} className="2xl:h-24 xl:h-20 lg:h-16 md:h-16 sm:h-14 " alt="line" />
            <div className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl">EXPLORE </div>
            <div className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl">PRODUCTS</div>
          </div>

          {/* ----------section 3---------- */}
          <div className="2xl:px-52 xl:px-36 lg:px-24 md:px-10 sm:px-8 2xl:mt-20 sm:mt-10 grid gap-y-2  grid-cols-1  md:grid-cols-2 md:gap-10 lg:gap-14  ">
            <div id="shampoo">
              <div className="lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium sm:mt-44 md:pt-44 lg:pt-44 xl:pt-44  2xl:pt-56 pl-12">SHAMPOO</div>
              <div className="flex pb-48 pt-5">
                <div className="text-[#76805F] font-medium lg:text-xs xl:text-sm  2xl:text-lg pr-3 pl-12">
                  View Product
                </div>
                <Image src={arrow} alt="arrow" />
              </div>
            </div>
            <div id="condition">
              <div className="lg:text-2xl xl:text-2xl 2xl:text-4xl font-medium sm:mt-44 md:pt-44 lg:pt-44 2xl:pt-56 pl-12">CONDITIONER</div>
              <div className="flex pb-48 pt-5">
                <div className="text-[#76805F] font-medium lg:text-xs xl:text-sm 2xl:text-lg pr-3 pl-12">
                  View Product
                </div>
                <Image src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          {/* --------section 4---------- */}
          <div className="sm:px-8 md:px-10 lg:px-24 xl:px-36 2xl:px-52  2xl:mt-20 grid md:grid-cols-3 md:gap-8  lg:gap-20 ">
            <div>
              <Image className="w-full" src={list1} />
              <div className="2xl:space-y-5 xl:space-y-3 lg:space-y-2 mt-4 justify-center items-center flex flex-col ">
                <div className="lg:text-sm xl:text-lg font-medium">TALH Shampoo</div>
                <div className="lg:text:xl xl:text-3xl font-medium">$17.00</div>
                <button className="2xl:px-16 xl:px-10 lg:px-6 rounded-sm xl:py-4 lg:py-1 bg-black text-white xl:text-lg lg:text-sm font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
            <div>
              <Image className="w-full" src={list2} />
              <div className="2xl:space-y-5 xl:space-y-3 lg:space-y-2 mt-4 justify-center items-center flex flex-col ">
                <div className="lg:text-sm xl:text-lg font-medium">
                  TALH Hair Conditioner
                </div>
                <div className="lg:text:xl xl:text-3xl font-medium">$17.00</div>
                <button className="2xl:px-16 xl:px-10 lg:px-6 rounded-sm xl:py-4 lg:py-1 bg-black text-white xl:text-lg lg:text-sm font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
            <div>
              <Image className="w-full" src={list3} />
              <div className="2xl:space-y-5 xl:space-y-3 lg:space-y-2 mt-4 justify-center items-center flex flex-col ">
                <div className="lg:text-sm xl:text-lg font-medium">TALH Combo</div>
                <div className="lg:text:xl xl:text-3xl font-medium">$30.00</div>
                <button className="2xl:px-16 xl:px-10 lg:px-6 rounded-sm xl:py-4 lg:py-1 bg-black text-white xl:text-lg lg:text-sm font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* -------------section 5-------- */}
          <div className="md:px-10 lg:px-24 xl:px-36 2xl:px-52 md:mt-10 lg:mt-14 xl:mt-10 2xl:mt-20">
            <div id="greens" className="">
              <div className="2xl:py-28 xl:py-20 lg:py-28 md:py-12 2xl:px-64 flex flex-col items-center md:space-y-5 lg:space-y-7 xl:space-y-4 2xl:space-y-9">
                <div className="2xl:text-7xl xl:text-5xl lg:text-4xl md:text-3xl font-medium">ABOUT TALH</div>
                <div className="flex md:gap-4 lg:gap-6  xl:gap-7 2xl:gap-14">
                  <Image className="2xl:w-44 xl:w-28 lg:w-28" src={nature3} />
                  <Image className="2xl:w-52 xl:w-32 lg:w-[120px] md:mt-20 lg:mt-20  xl:mt-20 2xl:mt-24" src={nature2} />
                  <Image className="2xl:w-44 xl:w-28 lg:w-28" src={nature1} />
                </div>
                <div>
                  <p className="text-[#606060] xl:text-sm 2xl:text-xl text-center" id="mont">
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
          <div className=" 2xl:mt-20 xl:mt-10 md:mt-10 md:px-10 lg:px-24 xl:px-36 2xl:px-52">
            <div className="md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-normal flex justify-center ">
              INSTAGRAM
            </div>
            <div className="grid grid-cols-5  gap-3 md:mt-5 lg:mt-12">
              <Image className="w-[]" src={man1} />
              <Image className="w-[]" src={man2} />
              <Image className="w-[]" src={man3} />
              <Image className="w-[]" src={man4} />
              <Image className="w-[]" src={man5} />
            </div>
          </div>
          {/* -------section 7----- */}
          <div className="mt-28" id="black">
            <footer className=" ">
              <div className="grid grid-cols-2 gap-10 lg:px-24 xl:px-36 2xl:px-52  py-8 xl:text-sm  2xl:text-lg md:px-10 lg:py-14 2xl:py-16 xl:grid-cols-5 md:grid-cols-4">
                <div>
                  <Image src={Logo} className="xl:w-36 2xl:w-48 " alt="Logoo" />
                </div>
                <div className="text-white xl:ml-10 2xl:ml-20">
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
                <div className="text-white">
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

                <div className="text-white">
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

                <div className="text-white md:space-y-2 lg:space-y-2 xl:space-y-2 2xl:space-y-4">
                  <h2 className="  font-semibold  uppercase dark:text-white">
                    SUBSCRIBE TO OUR EMAILS
                  </h2>
                  <div className="relative">
                    <input
                      className="border w-[100%] border-[#48523F]  2xl:px-6 bg-[#1E1E1E]  2xl:py-2  text-white"
                      type="email"
                      placeholder="Email"
                    />
                    <Image
                      src={arrow} // Replace with the path to your right arrow image
                      alt="Right Arrow"
                      className="absolute top-1/2 right-2 transform -translate-y-1/2"
                    />
                  </div>

                  <div className="flex gap-4 ">
                    <Link href="https://www.facebook.com">
                      <Image src={twit} />
                    </Link>
                    <Link href="https://www.instagram.com">
                      <Image src={face} />
                    </Link>
                    <Link href="https://twitter.com">
                      <Image src={insta} />
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="xl:mx-36 2xl:mx-40 border-t-2 border-[#315031] opacity-50" />

              <div className="xl:py-3 2xl:py-6 ">
                <div className="xl:text-sm 2xl:text-base font-light  text-[#AAA] flex justify-center text-center ">
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