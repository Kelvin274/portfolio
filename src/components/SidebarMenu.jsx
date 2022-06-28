import {
   FaHome,
   FaUser,
   FaBriefcase,
   FaComments,
   FaClipboardList,
} from "react-icons/fa";

/*
 ***** Cosas para hacer:
 * Provider para los iconos (color por variable global y tamaño).
 * Proveer color por variable al border bottom.
 */

const menuList = [
   { Icons: FaHome, label: "Home" },
   { Icons: FaUser, label: "About" },
   { Icons: FaClipboardList, label: "Services" },
   { Icons: FaBriefcase, label: "Portfolio" },
   { Icons: FaComments, label: "Contact" },
];

const SidebarMenu = () => {
   return (
      <nav className="p-4 md:text-lg text-base">
         <ul>
            {menuList.map(({ Icons, label }) => {
               return (
                  <li
                     key={label}
                     className="flex py-2 border-b border-gray-300/60 hover:bg-gray-300 hover:text-gray-900 pr-2 duration-300"
                  >
                     <Icons className="self-center mx-2" /> {label}
                  </li>
               );
            })}
         </ul>
      </nav>
   );
};

export default SidebarMenu;
