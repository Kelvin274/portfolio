import { useState } from "react";
import Logo from "../assets/baka.jpg";
import SidebarMenu from "./SidebarMenu";
import { FaTimes as Close, FaBars as Open } from "react-icons/fa";

/*
 ***** Cosas para hacer:
 * Cambiar Logo.
 * Dark mode
 * Responsive
 */

const Sidebar = () => {
   const [isOpen, setIsOpen] = useState(true);

   let handleOpen = () => {
      setIsOpen(!isOpen);
   };

   let burguerMenuProps =
      "text-bold text-3xl p-3 cursor-pointer absolute md:hidden hover:text-gray-100";

   return (
      <section
         className={`w-[200px] md:w-1/5 h-screen relative ${
            isOpen ? "left-[-200px]" : "left-0"
         } md:left-0 md:static shadow-lg bg-gray-800
            ease-in-out duration-500`}
      >
         <div
            className={`${burguerMenuProps} left-[14rem] top-3 z-10 transition-opacity ${
               isOpen ? "opacity-100 ease-in delay-500" : "opacity-0 ease-out"
            }
             bg-gray-800/60 hover:bg-gray-800 rounded-full`}
         >
            <Open onClick={handleOpen} />
         </div>
         <div className={`${burguerMenuProps} left-[9.5rem] top-2`}>
            <Close onClick={handleOpen} />
         </div>

         <div className="flex flex-col h-full md:mt-0 justify-evenly items-center">
            <div className="w-36 h-auto  md:mt-0 md:w-2/3">
               <img src={Logo} alt="Logo" />
            </div>
            <SidebarMenu />
         </div>
      </section>
   );
};

export default Sidebar;
