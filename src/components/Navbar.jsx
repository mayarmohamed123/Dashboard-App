import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
import { Chat, Notification, UserProfile, Cart } from ".";
import avatar from "../data/avatar.jpg";

const NavButton = ({ title, icon, customfunc, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customfunc}
        style={{ color }}
        className="relative text-xl p-4 hover:bg-light-gray rounded-full"
      >
        <span
          style={{ background: dotColor }}
          className="absolute rounded-full top-2 right-2 w-2 h-2 inline-flex"
        />
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setISClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleSize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleSize);

    handleSize(); //to figure out the initial width

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="flex justify-between p-2 realative md:ml-6 md:mr-6">
      <NavButton
        title="Menu"
        icon={<AiOutlineMenu />}
        customfunc={() => setActiveMenu((preState) => !preState)}
        color="blue"
      />
      <div className="flex">
        <NavButton
          title="chat"
          icon={<BsChatLeft />}
          customfunc={() => handleClick("chat")}
          color="blue"
          dotColor="#03C9D7"
        />
        <NavButton
          title="cart"
          icon={<FiShoppingCart />}
          customfunc={() => handleClick("cart")}
          color="blue"
          dotColor="#03C9D7"
        />
        <NavButton
          title="Notification"
          icon={<RiNotification3Line />}
          customfunc={() => handleClick("notification")}
          color="blue"
          dotColor="rgb(254, 201, 15)"
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex justify-center gap-2 cursor-pointer p-1 hover:bg-light-gray"
            onClick={() => {
              handleClick("userProfile");
            }}
          >
            <img
              className="rounded-full h-8 w-8 "
              src={avatar}
              alt="Porfile-img"
            />
            <p>
              <span className="text-gray-400 text-14">Hi , </span>
              <span className="text-gray-400 font-bold text-14 ml-1">
                Mayar
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
