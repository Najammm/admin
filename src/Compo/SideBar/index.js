import React from "react";
import "./style.css";
import { Menu } from "antd";
import {
  PoweroffOutlined,
  DashboardOutlined,
  PlusCircleOutlined,
  UserOutlined,
  FieldTimeOutlined,
  DatabaseOutlined,
  CodepenOutlined,
} from "@ant-design/icons";

const items = [
  {
    icon: <DashboardOutlined />,
    key: "dashboard",
    label: "DashBoard",
  },
  {
    icon: <DatabaseOutlined />,
    key: "allcategories",
    label: " All Categories",
  },
  {
    icon: <DatabaseOutlined />,
    key: "allproducts",
    label: "All Products",
  },
  {
    icon: <UserOutlined />,
    key: "allusers",
    label: "All Users",
  },
  {
    icon: <CodepenOutlined />,
    key: "orders",
    label: "Orders",
  },
  {
    icon: <FieldTimeOutlined />,
    key: "pendingorders",
    label: "Pending Orders",
  },
  {
    icon: <PlusCircleOutlined />,
    key: "7",
    label: "Create Categories",
  },
  {
    icon: <PlusCircleOutlined />,

    key: "8",
    label: "Create Products",
  },

  {
    icon: <PoweroffOutlined />,
    key: "9",
    label: "Log Out ",
  },
];

function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <div>
          <br /> <br />
        </div>
      </div>
      <div>
        <Menu className="deshboard" items={items} theme={"dark"} />
      </div>
    </div>
  );
}

export default SideBar;
