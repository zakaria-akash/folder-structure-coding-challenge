import { RightSquareTwoTone } from "@ant-design/icons/lib/icons";
import React, { Fragment, useState } from "react";

import Folders from "@/store/Folders";

import classes from "./NestedFolders.module.css";

const NestedFolders = (props) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [currentFolders, setCurrentFolders] = useState(props.item);

  return (
    <Fragment>
      {currentFolders.length >= 1 &&
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
              <RightSquareTwoTone /> {data.name}{" "}
              {Folders[0].id !== data.id && !openDeleteModal && (
                <button
                  onClick={() => setOpenDeleteModal(true)}
                  className="remove-folder-sign"
                >
                  X
                </button>
              )}{" "}
              ----------------{" "}
              <button className="new-folder-button">+New</button>
              <div
                className={
                  openDeleteModal ? `${classes.overlay}` : `${classes.hide}`
                }
                onClick={() => setOpenDeleteModal(false)}
              >
                <div
                  className={
                    openDeleteModal
                      ? `${classes.modal_show}`
                      : `${classes.modal_hide}`
                  }
                >
                  <div className={classes.modal_content}>
                    <div className={classes.close}>
                      <span onClick={() => setOpenDeleteModal(false)}>X</span>
                    </div>
                    <div className={classes.modal_title}>
                      <h4>Delete the folder: {data.name} </h4>
                    </div>
                    <div className={classes.modal_button_holder}>
                      <button
                        onClick={() => {
                          return setCurrentFolders(
                            currentFolders.filter((itm) => itm.id !== data.id)
                          );
                        }}
                      >
                        Delete
                      </button>
                      <button onClick={() => setOpenDeleteModal(false)}>
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
