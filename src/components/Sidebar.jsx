import Logo from "../assets/baka.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { house } from "@fortawesome/free-solid-svg-icons";

/*
***** Cosas para hacer:
* Cambiar Logo.
* Crear un componente para cada elemento de la <li>
* Incluir icono por cada elemento.
* Dark mode

*/
const Sidebar = () => {
   return (
      <div className="w-1/5 max-w-xs h-full bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
         <div className="flex flex-col justify-evenly items-center h-screen box-shadow">
            <div className="w-2/3 h-auto">
               <img src={Logo} alt="Logo" />
            </div>
            <div className="text-lg border-2 border-white p-6">
               <ul>
                  <li>
                     <FontAwesomeIcon icon={house} />
                     Home
                  </li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Portfolio</li>
                  <li>Contact</li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
