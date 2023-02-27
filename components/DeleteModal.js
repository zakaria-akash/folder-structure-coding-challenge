/* eslint-disable react/no-unescaped-entities */
import React from "react";

import classes from "./DeleteModal.module.css";

const DeleteModal = (props) => {
  return (
    <div
      className={
        props.openDeleteModal ? `${classes.overlay}` : `${classes.hide}`
      }
      onClick={() => props.setOpenDeleteModal(false)}
    >
      <div
        className={
          props.openDeleteModal
            ? `${classes.modal_show}`
            : `${classes.modal_hide}`
        }
      >
        <div className={classes.modal_content}>
          <div className={classes.close}>
            <span onClick={() => props.setOpenDeleteModal(false)}>X</span>
          </div>
          <div className={classes.modal_title}>
            <h4>
              Delete the folder "{props.trackFolder.name}" and all of its
              sub-folders{" "}
            </h4>
          </div>
          <div className={classes.modal_button_holder}>
            <button
              className={classes.warning_button}
              onClick={() => {
                return props.setCurrentFolders(
                  props.currentFolders.filter(
                    (itm) => itm.id !== props.trackFolder.id
                  )
                );
              }}
            >
              Delete
            </button>
            <button onClick={() => props.setOpenDeleteModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
