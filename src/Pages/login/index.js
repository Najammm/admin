/** @format */

import React from "react";
import "./style.css";

function login() {
  return (
    <div className="container">
      <div className="box">
        <div>
          <input className="input-name" type="name" placeholder="Username" />
          <input
            className="input-password"
            type="name"
            placeholder="Password"
          />
        </div>
      </div>
    </div>
  );
}

export default login;
