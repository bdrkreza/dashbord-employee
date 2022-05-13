import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineSetting } from "react-icons/ai";
import { BiChat, BiEdit } from "react-icons/bi";
import { FaUserSecret } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IClient } from "../../Types";

interface IProps {
  data: IClient[] | null;
}

export default function ClientList({ data }: IProps) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };
  return (
    <>
      <div className="grid grid-cols-1 grid-flow-row-dense xl:grid-cols-2 gap-10">
        {data?.map(
          ({ id, company, name, img, designation, describe }: IClient) => {
            return (
              <div
                key={id}
                className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-3  xl:grid-cols-3  w-full items-start  lg:items-center rounded bg-white shadow"
              >
                <div className="w-full h-full dark:border-gray-700 flex items-center justify-center flex-col  border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-50">
                  <div className="rounded-full p-5  flex items-center justify-center border-2">
                    <Image height={100} width={100} src={img} alt="" />
                  </div>
                  <h1 className="bg-gray-200 mt-3 font-bold font-serif rounded-md max-w-fit py-1 px-3">
                    {designation}
                  </h1>
                </div>

                <div className="w-full h-full col-span-2  dark:bg-gray-800 space-y-3 p-2 ">
                  <div className="flex items-center justify-between">
                    <h1 className="font-bold text-xl font-sans ml-1">
                      {company}
                    </h1>
                    <div className="relative">
                      <HiOutlineDotsVertical
                        onClick={handleShow}
                        className="w-6 h-6 cursor-pointer"
                      />
                      <>
                        <div
                          className={`${
                            show ? "block" : "hidden"
                          } dropdown-content bg-white text-md border-2 rounded-md shadow-xl w-36 absolute left-0 -ml-16 sm:-ml-12 md:-ml-24 mt-5 space-y-3 py-3 z-30`}
                        >
                          <div className="w-full flex items-center hover:bg-indigo-700  px-4 cursor-pointer hover:text-white">
                            <BiEdit className="h-4 w-4 mr-2" />
                            <p>edit</p>
                          </div>
                          <div className="w-full flex items-center hover:bg-indigo-700  px-4 cursor-pointer hover:text-white">
                            <AiOutlineDelete className="h-4 w-4 mr-2" />
                            <p>Remove</p>
                          </div>

                          <div className="w-full flex items-center hover:bg-indigo-700  px-4 cursor-pointer hover:text-white">
                            <AiOutlineSetting className="h-4 w-4 mr-2" />
                            <p>more</p>
                          </div>
                        </div>
                      </>
                    </div>
                  </div>
                  <h2 className="bg-orange-100 rounded-md max-w-fit py-1 px-3">
                    {name}
                  </h2>
                  <hr className="mb-3 border-red-100 mt-2" />
                  <h3>{describe}</h3>
                  <div className="mt-2 flex items-center">
                    <button
                      type="button"
                      className="text-gray-100  bg-[#484c7f] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center"
                    >
                      <BiChat className="mr-1 w-5 h-5" />
                      chat
                    </button>
                    <button
                      type="button"
                      className="text-gray-100 bg-[#484c7f] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center"
                    >
                      <FaUserSecret className="mr-1 w-5 h-5" />
                      Profile
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
}
