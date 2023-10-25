import React from "react";

export default function Task2() {
  return (
    <>
      <div className="Notifications">
        <h1>Notifications</h1>
        <div className="InfoMsg">
          <i class="fa-regular fa-circle-check fa-xl"> </i>
          <span>Information Message </span>
        </div>
        <div className="InfoMsg2">
          <i class="fa-regular fa-circle-check fa-xl"> </i>
          <span>Success Message</span>
        </div>
        <div className="InfoMsg3">
          <i class="fa-regular fa-bell fa-xl"></i>
          <span>Warning Message</span>
        </div>
        <div className="InfoMsg4">
          <i class="fa-solid fa-circle-exclamation fa-xl"></i>
          <span>Error Message</span>
        </div>
      </div>
    </>
  );
}
