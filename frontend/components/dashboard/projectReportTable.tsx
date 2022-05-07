import React, { useState } from "react";
import {
  AiOutlineDelete,
  AiOutlinePlusCircle,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiDotsVertical, BiEdit } from "react-icons/bi";
import { GrView } from "react-icons/gr";
interface IProject {
  projectName: string;
  image: string;
  color: string;
  stage: string;
  persistance: string;
  task: string;
  budget: string;
  date: string;
  teamLeader: string;
  team: [];
}
export default function ProjectReportTable({ project }: any) {
  const [show, setShow] = useState(null);
  return (
    <>
      <div className="w-full mt-10">
        <div className="px-10  py-4 md:py-7 bg-blue-400 rounded-xl shadow-xl">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Projects
            </p>
            <>
              <div className="dropdown-content mt-8 absolute left-0 -ml-12 shadow-md z-10 hidden w-32">
                <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                  <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                    Edit
                  </li>
                  <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                    Delete
                  </li>
                  <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                    Duplicate
                  </li>
                </ul>
              </div>
              <button className="text-gray-900 rounded cursor-pointer border border-transparent focus:outline-none">
                <BiDotsVertical className="h-7 w-7" />
              </button>
            </>
          </div>
        </div>
        <div className="bg-gray-100 shadow px-4 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-xl  leading-none text-gray-800">
                <th className="font-normal text-left pl-4">Project</th>
                <th className="font-normal text-left pl-12">Progress</th>
                <th className="font-normal text-left pl-12">Tasks</th>
                <th className="font-normal text-left pl-20">Budget</th>
                <th className="font-normal text-left pl-20">Deadline</th>
                <th className="font-normal text-left pl-20">Stage</th>
                <th className="font-normal text-left pl-20">Team Leader</th>
                <th className="font-normal text-left pl-16">Team</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {project.map((task: any, index: any) => {
                console.log(task);
                return (
                  <tr
                    key={index}
                    className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                  >
                    <td className="pl-4 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-10 h-10">
                          <img className="w-full h-full" src={task.image} />
                        </div>
                        <div className="pl-4">
                          <p className="font-medium uppercase">
                            {task.projectName}
                          </p>
                          <p className="text-xs leading-3 text-gray-600 pt-2">
                            Herman Group
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="pl-12">
                      <p className="text-sm font-medium leading-none text-gray-800">
                        72%
                      </p>
                      <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                        <div className="w-20 h-3 bg-green-progress rounded-full" />
                      </div>
                    </td>
                    <td className="pl-12">
                      <p className="font-medium">32/47</p>
                      <p className="text-xs leading-3 text-gray-600 mt-2">
                        5 tasks pending
                      </p>
                    </td>
                    <td className="pl-20">
                      <p className="font-medium">$13,000</p>
                      <p className="text-xs leading-3 text-gray-600 mt-2">
                        $4,200 left
                      </p>
                    </td>
                    <td className="pl-20">
                      <p className="font-medium">22.12.21</p>
                      <p className="text-xs leading-3 text-gray-600 mt-2">
                        34 days
                      </p>
                    </td>

                    <td className="pl-20">
                      <div
                        className={`bg-${task.color}-100 text-${task.color}-700 border-1 -ml-2 rounded-xl px-4 py-2 max-w-fit`}
                      >
                        <h2>{task.stage}</h2>
                      </div>
                    </td>
                    <td className="pl-20">
                      <p>{task.teamLeader}</p>
                    </td>
                    <td className="pl-16">
                      <div className="flex -space-x-2  ">
                        {task.team.map((img: any, index: any) => (
                          <div key={index} className="avatar-group">
                            <img
                              key={img.img}
                              className="shadow-md w-8 h-8 rounded-full"
                              src={img.img}
                            />
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-7 2xl:px-0 relative">
                      {show == 0 ? (
                        <button
                          onClick={() => setShow(null)}
                          className="focus:outline-none pl-7"
                        >
                          <BiDotsVertical className="h-7 w-7" />
                        </button>
                      ) : (
                        <button
                          onClick={() => setShow(0)}
                          className="focus:outline-none pl-7"
                        >
                          <BiDotsVertical className="h-5 w-5" />
                        </button>
                      )}
                      {show == 0 && (
                        <div className="dropdown-content bg-white text-md border-2 rounded-md shadow-xl w-36 absolute left-0 -ml-16 sm:-ml-12 md:-ml-24 mt-5 space-y-4 py-3 z-30">
                          <div className="w-full flex items-center py-1 hover:bg-indigo-700 px-4 cursor-pointer hover:text-white">
                            <GrView className="h-4 w-4 mr-2" />
                            <p>View</p>
                          </div>
                          <div className="w-full flex items-center hover:bg-indigo-700  px-4 cursor-pointer hover:text-white">
                            <AiOutlinePlusCircle className="h-4 w-4 mr-2" />
                            <p>Add</p>
                          </div>
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
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
