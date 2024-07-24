/** @format */

import React from "react";
import "./style.css";
import {Button, Checkbox, Form, Input} from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function login() {
  return (
    <div className="container">
      <div className="box">
        <div>
          <input className="input-name" type="name" placeholder="Username" />
        </div>
      </div>
    </div>
  );
}

export default login;
