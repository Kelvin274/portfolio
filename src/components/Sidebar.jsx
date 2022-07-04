import { useState } from "react";
import Logo from "../assets/baka.jpg";
import SidebarMenu from "./SidebarMenu";
import { FaTimes as Close, FaBars as Open } from "react-icons/fa";

/*
 ***** Cosas para hacer:
 * Cambiar Logo.
 * Dark mode
 */

const Sidebar = () => {
   const [isOpen, setIsOpen] = useState(true);

   let handleOpen = () => {
      setIsOpen(!isOpen);
   };

   let burguerMenuProps =
      "text-bold text-3xl bg-neutral-800/60 hover:text-gray-100 hover:bg-neutral-800 rounded-full";

   return (
      <section
         className={`w-[200px] md:w-[16rem] max-h-full z-50 absolute md:left-0 top-0 bottom-0 md:static
            shadow-lg bg-neutral-800 ease-in-out duration-500 ${
               isOpen ? "left-[-200px]" : "left-0"
            }`}
      >
         <div
            className={`${burguerMenuProps} md:hidden left-[13.5rem] top-3 z-10 p-3 absolute cursor-pointer`}
         >
            {isOpen ? (
               <Open onClick={handleOpen} />
            ) : (
               <Close onClick={handleOpen} />
            )}
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
