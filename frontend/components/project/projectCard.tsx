import React from "react";
import {
  AiOutlineDelete,
  AiOutlinePlusCircle,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiEdit, BiPlusMedical } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrView } from "react-icons/gr";
export default function ProjectCard({ project }: any) {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <div className="w-full grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-1">
        {project.map((item: any, index: any) => {
          return (
            <div
              key={index}
              className="flex items-center  justify-center w-full h-full py-4 px-4"
            >
              <div className="bg-white border-x-2  dark:bg-gray-800 rounded shadow  max-w-xl py-6 sm:px-8 px-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-semibold leading-4 text-gray-800 dark:text-gray-100">
                      {item.projectName}
                    </p>
                    <p className="text-md leading-5 mt-4 text-gray-800 dark:text-gray-400 sm:w-10/12">
                      Every large design company whether it’s a multi-national
                      branding corporation or a regular.
                    </p>
                  </div>
                  <div>
                    <img
                      src={item.image}
                      className="max-w-xl h-16"
                      alt="image"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-end mt-8">
                  <p className="text-sm font-semibold leading-none text-right text-gray-500 dark:text-gray-400">
                    80% complete
                  </p>
                  <div className="bg-green-50 rounded-full mt-3 h-1 w-full">
                    <div className="bg-green-500 w-5/6 h-1 rounded-full" />
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center mt-5">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://i.ibb.co/XStMRFq/Photo.png"
                      alt="profile "
                    />
                    <img
                      className="w-10 h-10 ml-1 rounded-full"
                      src="https://i.ibb.co/FnQF4MY/Photo1.png"
                      alt="profile "
                    />
                    <img
                      className="w-10 h-10 ml-1 rounded-full"
                      src="https://i.ibb.co/nRjJkRz/Photo2.png"
                      alt="profile "
                    />
                    <div className="w-10 h-10 rounded-full ml-1 flex items-center justify-center bg-indigo-700">
                      <BiPlusMedical className="text-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div
                      className={`bg-${item.color}-100 text-${item.color}-700 border-1 -ml-2 rounded-xl px-4 py-2 max-w-fit`}
                    >
                      <h2>{item.stage}</h2>
                    </div>
                    <div className="relative">
                      <button
                        className="focus:outline-none"
                        onClick={() => setShow(!show)}
                      >
                        <BsThreeDotsVertical className="h-6 w-6" />
                      </button>
                      {show && (
                        <div className="dropdown-content bg-white text-md border-2 rounded-md shadow-xl w-36 absolute left-0 -ml-16 sm:-ml-12 md:-ml-24 mt-5 space-y-3 py-3 z-30">
                          <div className="w-full flex items-center  hover:bg-indigo-700 px-4 cursor-pointer hover:text-white">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
