import React, { FC } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { notification } from "antd";
import { useState, useEffect } from "react";
//components
import Status from "./editable/status";
import Position from "./editable/position";
import Delete from "./editable/delete_users";
import Quantity from "./editable/quantity";
import Time from "./editable/time";
import Currency from "./editable/currency";
const AdminLayout = ({ children }) => {
  let noty = localStorage.getItem("noty");
  useEffect(() => {
    if (!noty) {
      openNotificationWithIcon("success");
    }
    noty = true;
    localStorage.setItem("noty", true);
  }, []);

  const display = [
    {
      id: "status",
      compo: <Status />,
    },
    {
      id: "position",
      compo: <Position />,
    },
    {
      id: "users",
      compo: <Delete />,
    },
    {
      id: "currency",
      compo: <Currency />,
    },
    {
      id: "quantity",
      compo: <Quantity />,
    },
    {
      id: "time",
      compo: <Time />,
    },
  ];

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Login",
      description: "You are Successfully Logged in",
    });
  };

  let option;
  option = localStorage.getItem("options");
  const shreyas = () => {
    option = localStorage.getItem("options");
    console.log(option);
  };

  const [selected, setSelected] = useState(localStorage.getItem("options"));

  useEffect(() => {
    shreyas();
  }, []);

  const [rem,setRem] =useState();

  return (
    <div className="w-[100vw] max-h-[100vh] max-w-[100vw] h-[100vh] flex overflow-hidden">
      {contextHolder}
      <div className="w-[20%] hidden md:block bg-[#F2C347] min-h-[100%]">
        <Sidebar selected={selected} setSidebar={setSelected} remove={setRem} />
      </div>
      <div className="md:w-[80%] w-[100%] ">
        <Navbar />
        <div className="h-[100vh] overflow-y-scroll container mx-auto p-[20px] ">
          {children}
          <div>
            {!rem || !option || option ==="abc" ? (
              <>
                <p className="text-[3rem] font-serif">Welcome Admin.</p>
                <p className="font-sans text-[2rem] pl-[0.4rem]">
                  Please click among the options.
                </p>{" "}
              </>
            ) : null}
            {selected && rem
              ? display &&
                display.map((item, index) => {
                  if (item?.id === selected) {
                    return <>{item?.compo}</>;
                  }
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
