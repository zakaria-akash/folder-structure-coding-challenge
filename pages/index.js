import NestedFolders from "@/components/NestedFolders";
import React from "react";

import Folders from "@/store/Folders";

const Home = () => {
  return (
    <div className="main_div">
      <h1>Folder Structure: </h1>
      <NestedFolders key={Folders.id} item={Folders} />
    </div>
  );
};

export default Home;
