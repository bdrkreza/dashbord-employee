import Image from "next/image";
import React from "react";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { FcDocument } from "react-icons/fc";
import { GiChart } from "react-icons/gi";
import appImage from "../../public/interview.1710874b.svg";
type Props = {};

export default function ManagementAside({}: Props) {
  return (
    <>
      <div className="bg-[#484c7f] flex justify-between rounded-md p-5">
        <div className="text-white space-y-1">
          <FcDocument className="w-16 h-16 mb-3 bg-white  p-3 rounded-full" />
          <h1 className="text-3xl  font-bold">1546</h1>
          <h2 className="text-lg ">Application</h2>
        </div>
        <div>
          <Image src={appImage} alt="image" width={200} height={150} />
        </div>
      </div>
      <div className="flex justify-between items-center p-2 bg-gray-200 mt-5 rounded-md">
        <div className="flex items-center justify-center space-x-3">
          <FaUserFriends className="w-16 h-16  bg-white  p-4 rounded-full" />
          <div>
            <h1 className="text-2xl font-bold">46</h1>
            <span>Interviews</span>
          </div>
        </div>
        <AiOutlineBarChart className="w-12 h-12" />
      </div>
      <div className="flex justify-between items-center p-2 bg-gray-200 mt-5 rounded-md">
        <div className="flex items-center justify-center space-x-3">
          <FaUserFriends className="w-16 h-16  bg-white  p-4 rounded-full" />
          <div>
            <h1 className="text-2xl font-bold">16</h1>
            <span>Hired</span>
          </div>
        </div>
        <GiChart className="w-10 h-10" />
      </div>
    </>
  );
}
