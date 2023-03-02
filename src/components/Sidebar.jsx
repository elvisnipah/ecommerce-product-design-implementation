import React from "react";

import CloseIcon from "../assets/CloseIcon";

function Sidebar(props) {
  return (
    <section className="h-full w-full bg-white p-6 flex flex-col gap-8 z-30">
      <button className="w-4" onClick={props.closeSidebar}>
        <CloseIcon />
      </button>
      <div className="flex flex-col gap-4 font-bold">
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </section>
  );
}

export default Sidebar;
