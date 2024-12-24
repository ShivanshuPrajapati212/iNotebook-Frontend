import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import noteContext from "../context/noteContext";
import { Link } from "react-router-dom";

const NoteItem = (props) => {

  const {title, desc, id} = props;

  const context = useContext(noteContext);
  const {deleteNote} = context;

  const handleDelete = () => {
    deleteNote(id);
  }

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:h-72 relative overflow-hidden">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {desc}
      </p>
      <div className=" bottom-4 right-4 absolute">
      <Link
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2"
        to={`/updatenote/${id}`}
      >
        <FontAwesomeIcon icon={faPen} size="xl"/>
      </Link>
      <Link
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mx-2"
        onClick={handleDelete}
      >
        <FontAwesomeIcon icon={faTrashCan} size="xl"/>
      </Link>
      </div>
    </div>
  );
};

export default NoteItem;
