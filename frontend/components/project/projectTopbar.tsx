import React, { useCallback } from "react";
import ProjectAddModel from "./projectAddModel";

export default function ProjectTopBar() {
  const [showModal, setShowModal] = React.useState(false);
  const handleShowModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);
  return (
    <div className="flex justify-between items-center">
      <div className="font-bold text-2xl">
        <h1>All Project</h1>
      </div>
      <div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleShowModal}
        >
          add Project
        </button>
      </div>
      {showModal && <ProjectAddModel onCancel={handleCloseModal} />}
    </div>
  );
}
