import {
  DownSquareTwoTone,
  RightSquareTwoTone,
} from "@ant-design/icons/lib/icons";
import React, { Fragment, useState } from "react";

import Folders from "@/store/Folders";

import DeleteModal from "./DeleteModal";
import AddModal from "./AddModal";

const NestedFolders = (props) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [currentFolders, setCurrentFolders] = useState(props.item);

  //track folder to delete or in which new folder to be added
  const [trackFolder, setTrackFolder] = useState({});

  const handleAddFolder = (e) => {
    e.preventDefault();
    const new_folder_name = e.target.folderName.value;

    console.log(currentFolders);
    console.log(trackFolder);

    const userData = [
      {
        id: Date.now().toString(36) + Math.random().toString(16).slice(2),
        name: new_folder_name,
        folders: null,
      },
    ];
    // inputArr.push(userData);

    const updatedCurrentFolders = currentFolders.map((item) => {
      if (item.id === trackFolder.id) {
        if (item.folders == null) {
          return { ...item, folders: userData };
        } else {
          return { ...item, folders: item.folders.push(userData[0]) };
        }
      }
      return { ...item };
    });

    setCurrentFolders(updatedCurrentFolders);
    e.target.reset();
    setOpenAddModal(false);
  };

  return (
    <Fragment>
      {currentFolders &&
        currentFolders.map((data) => (
          <div
            key={data.id}
            className="each-folder"
            style={{
              left: "2%",
              width: "100vw",
              position: "relative",
              margin: 0,
              padding: 0,
            }}
          >
            <div className="folder-elements">
              {data.folders ? <DownSquareTwoTone /> : <RightSquareTwoTone />}{" "}
              {data.name}
              {/* X button to delete a folder */}
              {Folders[0].id !== data.id && !openDeleteModal && (
                <button
                  onClick={() => {
                    setOpenDeleteModal(true);
                    setTrackFolder({ id: data.id, name: data.name });
                  }}
                  className="remove-folder-sign"
                >
                  X
                </button>
              )}{" "}
              ----------------
              {/* renderng delete modal components based on X button click */}
              <DeleteModal
                openDeleteModal={openDeleteModal}
                setOpenDeleteModal={setOpenDeleteModal}
                currentFolders={currentFolders}
                setCurrentFolders={setCurrentFolders}
                trackFolder={trackFolder}
              />
              {/* +New button to add folder */}
              <button
                className="new-folder-button"
                onClick={() => {
                  setOpenAddModal(true);
                  setTrackFolder({ id: data.id, name: data.name });
                }}
              >
                +New
              </button>
              {/* renderng add modal components based on +New button click */}
              <AddModal
                openAddModal={openAddModal}
                setOpenAddModal={setOpenAddModal}
                trackFolder={trackFolder}
                handleAddFolder={handleAddFolder}
              />
            </div>
            {data.folders && (
              <NestedFolders key={data.folders.id} item={data.folders} />
            )}
          </div>
        ))}
    </Fragment>
  );
};

export default NestedFolders;
