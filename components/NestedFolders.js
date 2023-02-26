import { RightSquareTwoTone } from "@ant-design/icons/lib/icons";
import React from "react";

const NestedFolders = (props) => {
  return (
    <div
      key={props.item.id}
      className="each-folder"
      style={{
        left: "2%",
        width: "100vw",
        position: "relative",
        margin: 0,
        padding: 0,
      }}
    >
      <p className="folder-elements">
        <RightSquareTwoTone /> {props.item.name}{" "}
        <button className="remove-folder-sign">X</button> ----------------{" "}
        <button className="new-folder-button">+New</button>
      </p>
      {props.item.folders
        ? props.item.folders.map((nestedData) => (
            <NestedFolders key={nestedData.id} item={nestedData} />
          ))
        : null}
    </div>
  );
};

export default NestedFolders;
