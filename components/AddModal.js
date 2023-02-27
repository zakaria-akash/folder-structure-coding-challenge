/* eslint-disable react/no-unescaped-entities */
import React from "react";

import classes from "./AddModal.module.css";

const AddModal = (props) => {
  return (
    <div
      className={props.openAddModal ? `${classes.overlay}` : `${classes.hide}`}
    >
      <div
        className={
          props.openAddModal ? `${classes.modal_show}` : `${classes.modal_hide}`
        }
      >
        <div className={classes.modal_content}>
          <div className={classes.close}>
            <span onClick={() => props.setOpenAddModal(false)}>X</span>
          </div>
          <div className={classes.modal_title}>
            <h4>Add a folder in "{props.trackFolder.name}"</h4>
          </div>

          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={props.handleAddFolder}
          >
            <div className={classes.modal_input}>
              <input
                type="text"
                placeholder="Folder Name"
                name="folderName"
                required
              />
            </div>
            <div className={classes.modal_button_holder}>
              <button type="submit" className={classes.success_button}>
                Submit
              </button>
              <button onClick={() => props.setOpenAddModal(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
