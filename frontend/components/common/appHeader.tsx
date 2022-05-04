import Image from "next/image";
import React, { useState } from "react";
import {
  AiFillWechat,
  AiOutlineLogin,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import user from "../../public/rkreza.jpg";
import english from "../../public/united-states.svg";
import Language from "./header/language";
import Notification from "./header/notification";
import Profile from "./header/profile";
import Search from "./header/search";

let useClickOutSide = (handler: any) => {
  const domNode = React.useRef();
  React.useEffect(() => {
    let mayHandler = (event: any) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", mayHandler);
    return () => {
      document.removeEventListener("mousedown", mayHandler);
    };
  });
  return domNode;
};

export default function AppHeader() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false);
  const [profile, setProfile] = useState(false);
  const [notification, setNotification] = useState(false);
  const [language, setLanguage] = useState(false);

  let domNode = useClickOutSide(() => {
    setSearch(false);
    setProfile(false);
  });
  return (
    <React.Fragment>
      {/* Code block starts */}
      <nav className="w-full bg-gray-800  shadow fixed" ref={domNode}>
        <div className="container px-6 h-16 flex justify-between items-center lg:items-stretch mx-auto">
          <div className="flex items-center ">
            <div className="mr-10 flex items-center">
              <svg
                aria-label="Home"
                id="logo"
                enableBackground="new 0 0 300 300"
                height={44}
                viewBox="0 0 300 300"
                width={43}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <path
                    fill="#4c51bf"
                    d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                  />
                </g>
              </svg>
              <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">
                The North
              </h3>
            </div>
          </div>

          <>
            {/* mobile responsive nav */}
            <div className="cursor-pointer relative xl:hidden md:hidden">
              <HiOutlineMenuAlt1
                onClick={() => setShow(!show)}
                className="h-10 w-10 text-gray-100"
              />
              <div className="origin-top-right absolute right-0 mt-6  rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 focus:outline-none">
                {show ? (
                  <ul className="p-2 space-y-4 w-48  text-gray-300  font-serif font-bold text-2xl border-r bg-gray-800 rounded shadow">
                    <li className="hover:text-gray-500 hover:underline  cursor-pointer items-center">
                      <div className="flex items-center">
                        <AiOutlineSearch />
                        <span className="text-sm ml-2">Search</span>
                      </div>
                    </li>
                    <li className="hover:text-indigo-700 cursor-pointer items-center">
                      <div className="flex items-center">
                        <AiFillWechat />
                        <span className="text-sm ml-2">Chats</span>
                      </div>
                    </li>
                    <li className=" hover:text-indigo-700 cursor-pointer items-center">
                      <div className="flex items-center">
                        <IoMdNotificationsOutline />
                        <span className="text-sm ml-2">Notification</span>
                      </div>
                    </li>
                    <li className="flex w-full justify-between  hover:text-indigo-700 cursor-pointer items-center">
                      <div className="flex items-center">
                        <AiOutlineUser />
                        <span className="text-sm ml-2">My Profile</span>
                      </div>
                    </li>
                    <li className="flex w-full justify-between  hover:text-indigo-700 cursor-pointer items-center mt-2">
                      <div className="flex items-center">
                        <AiOutlineLogin />
                        <span className="text-sm ml-2">Sign out</span>
                      </div>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
          </>

          <div className="h-full xl:flex hidden  md:block lg:block   items-center justify-end">
            <div className="h-full flex">
              {/* Search Box */}
              <div className="relative">
                <div
                  className="px-6 h-full flex items-center justify-center border-l border-gray-300 text-gray-400 cursor-pointer"
                  onClick={() => setSearch(!search)}
                >
                  <BiSearch className="w-8 h-7" />
                </div>
                {search && <Search />}
              </div>

              {/* Chats box */}

              <div className="relative">
                <div
                  className="w-20 h-full flex relative items-center justify-center border-l border-r border-gray-300 text-gray-400 cursor-pointer"
                  onClick={() => setLanguage(!language)}
                >
                  {/* <GiUsaFlag className="w-8 h-6" /> */}
                  <Image src={english} height={20} alt="image" />
                </div>
                {language && <Language />}
              </div>
              {/* notification box */}
              <div className="relative">
                <div
                  className="w-20 h-full flex items-center justify-center border-r border-gray-300 cursor-pointer text-gray-400"
                  onClick={() => setNotification(!notification)}
                >
                  <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 ">
                    <IoMdNotificationsOutline className="h-7 w-8" />
                    <div className="animate-ping w-1.5 h-1.5 bg-pink-600 rounded-full absolute -top-1 -right-1 m-auto duration-200 mt-1 mr-2" />
                    <div className=" w-1.5 h-1.5 bg-green-300 rounded-full absolute -top-1 -right-1 m-auto shadow-lg mt-1 mr-2" />
                  </div>
                </div>

                {notification && (
                  <Notification setNotification={setNotification} />
                )}
              </div>

              {/* profile box */}
              <div
                className="flex items-center pl-8 relative cursor-pointer"
                onClick={() => setProfile(!profile)}
              >
                <Image
                  className="rounded  object-cover"
                  width={35}
                  height={35}
                  src={user}
                  alt="logo"
                />
                <p className="text-gray-100 text-md ml-2">rk reza</p>
                {profile && <Profile />}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
