import { useState } from "react";
import { FaCog as Gear, FaMoon, FaSun } from "react-icons/fa";
import SwitchPanel from "./SwitchsPanel";

const iconsClass = "text-3xl text-gray-300 hover:text-gray-100";

const Switchs = () => {
   const [isDark, setIsDark] = useState(true);
   const [isOpen, setIsOpen] = useState(false);

   let handleOpen = () => {
      setIsOpen(!isOpen);
   };
   return (
      <aside className="w-64 h-28 fixed right-0 top-4 md:top-14 z-40">
         <div
            className={`flex flex-col justify-between h-full relative ${
               isOpen ? "right-0" : "-right-[190px]"
            } ease-in-out duration-300`}
         >
            <div className="dark:bg-neutral-800 p-2 rounded-full w-fit cursor-pointer">
               <Gear
                  className={`${iconsClass} hover:animate-spin`}
                  onClick={handleOpen}
               />
            </div>

            <SwitchPanel />

            <div className="bg-neutral-800 p-2 rounded-full w-fit cursor-pointer">
               {isDark ? (
                  <FaSun className={`${iconsClass}`} />
               ) : (
                  <FaMoon className={`${iconsClass}`} />
               )}
            </div>
         </div>
      </aside>
   );
};

export default Switchs;
