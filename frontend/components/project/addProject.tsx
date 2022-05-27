import React, { useCallback } from "react";
import { BiAddToQueue } from "react-icons/bi";
import ProjectAddModel from "./projectAddModel";
type Props = {};

const AddProject = (props: Props) => {
  const [showModal, setShowModal] = React.useState(false);
  const handleShowModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);
  return (
    <div>
      <div className="mt-10">
        <div className="flex items-center justify-between px-14">
          <h1 className="text-2xl font-sans font-bold mb-2">
            Recent Project Update
          </h1>
          <button
            onClick={handleShowModal}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <BiAddToQueue className="w-5 h-5 mr-1" />
            Add Project
          </button>
        </div>
        {showModal && <ProjectAddModel onCancel={handleCloseModal} />}
        <hr className="divide-solid border-2 border-red-100 " />
      </div>
    </div>
  );
};

export default AddProject;
