import React, { useEffect, useState } from "react";

const SidebarOptions = [
  {
    id: "activeLocation",
    name: "Details of all Users",
  },
  {
    id: "company",
    name: "Bot Settings",
  },
];

const user_options = [
  {
    id: "abc",
    name: "What all you can edit ??",
  },
  {
    id: "status",
    name: "Status of Users",
  },
  {
    id: "position",
    name: "Position of Users",
  },
  {
    id: "users",
    name: "Delete Users",
  },
];

const bot_settings = [
  {
    id: "abc",
    name: "What all you can edit ??",
  },
  {
    id: "currency",
    name: "Currency format",
  },
  {
    id: "quantity",
    name: "Quantity of Iphone's",
  },
  {
    id: "time",
    name: "Time Interval for fetching Iphone Prices",
  },
];

const Sidebar = ({ setSidebar , remove }) => {
  const handleClick = (e, route) => {
    e.preventDefault();
  };

  const [selected, setSelected] = useState("");
  const [selected1, setSelected1] = useState("abc");
  const [selected2, setSelected2] = useState("abc");

  return (
    <div className="p-[20px]">
      <button className="md:hidden">
        <i className="bi bi-list absolute md:hidden right-[10px] top-[20px] text-3xl font-bold"></i>
      </button>
      <ul className="mt-[60px]">
        {SidebarOptions &&
          SidebarOptions.map((item, index) => {
            return (
              <>
                <li
                  className={
                    "p-[15px] flex gap-[20px] rounded-[4px] items-center cursor-pointer my-[20px] font-[600]" +
                    (selected === item.id
                      ? " bg-[#E9EAEC]"
                      : " text-[#00000080]")
                  }
                  onClick={(e) => { 
                    handleClick(e);
                    setSelected(String(item.id));
                    remove(false);
                    setSelected1("abc")
                    setSelected2("abc")
                    localStorage.removeItem("options")
                  }}
                >
                  <img src={item.icon} alt="" />
                  <p className="m-0">{item.name}</p>
                </li>
              </>
            );
          })}
        <div className="mt-[30px]">
          {selected == "activeLocation"
            ? user_options.map((item1, index1) => {
                return (
                  <li
                    className={
                      "p-[15px] flex gap-[20px] rounded-[4px] items-center cursor-pointer my-[20px] font-[600]" +
                      (selected1 === item1.id
                        ? " bg-[#E9EAEC]"
                        : " text-[#00000080]")
                    }
                    onClick={(e) => {
                      handleClick(e);
                      setSelected1(String(item1?.id));
                      setSidebar(item1?.id);
                      remove(true);
                      localStorage.setItem("options", item1?.id);
                    }}
                  >
                    <p className="pl-[1rem]">{item1.name}</p>
                  </li>
                );
              })
            : selected == "company"
            ? bot_settings.map((item1, index1) => {
                return (
                  <li
                    className={
                      "p-[15px] flex gap-[20px] rounded-[4px] items-center cursor-pointer my-[20px] font-[600]" +
                      (selected2 === item1.id
                        ? " bg-[#E9EAEC]"
                        : " text-[#00000080]")
                    }
                    onClick={(e) => {
                      handleClick(e);
                      setSelected2(String(item1.id));
                      setSidebar(item1?.id);
                      remove(true);
                      localStorage.setItem("options", item1?.id);
                    }}
                  >
                    <p className="pl-[1rem]">{item1.name}</p>
                  </li>
                );
              })
            : null}
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
