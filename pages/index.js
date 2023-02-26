import NestedFolders from "@/components/NestedFolders";
import { RightSquareTwoTone } from "@ant-design/icons";
import React, { Fragment } from "react";

const Folders = [
  {
    id: "1",
    name: "root",
    folders: [
      {
        id: "1.1",
        name: "thanks",
        folders: null,
      },
      {
        id: "1.2",
        name: "awesome",
        folders: [
          {
            id: "1.2.1",
            name: "again",
            folders: null,
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "hi",
    folders: [
      {
        id: "2.1",
        name: "hello",
        folders: null,
      },
      {
        id: "2.2",
        name: "nice",
        folders: [
          {
            id: "2.2.1",
            name: "world",
            folders: null,
          },
        ],
      },
    ],
  },
];

const Home = () => {
  return (
    <div className="main_div">
      <h1>Folder Structure: </h1>
      {Folders.map((data) => {
        return (
          <div
            key={data.id}
            className="each-folder"
            style={{
              left: 0,
              width: "100vw",
              position: "relative",
              margin: 0,
              padding: 0,
            }}
          >
            <p className="folder-elements">
              <RightSquareTwoTone /> {data.name}{" "}
              {Folders[0].id !== data.id && (
                <button className="remove-folder-sign">X</button>
              )}{" "}
              ----------------{" "}
              <button className="new-folder-button">+New</button>
            </p>
            {data.folders
              ? data.folders.map((nestedData) => (
                  <NestedFolders key={nestedData.id} item={nestedData} />
                ))
              : null}
            {/* {Array.isArrray(data.folders) &&
              data.folders.length >= 1 &&
              data.folders.map((nestedData) => (
                <NestedFolders key={nestedData.id} item={nestedData} />
              ))} */}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
