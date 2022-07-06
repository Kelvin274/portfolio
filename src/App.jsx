import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Switchs from "./components/Switchs";
import "./App.css";

function App() {
   return (
      <div
         className="max-w-full max-h-full flex font-poppins relative
          bg-gray-400 text-neutral-800 dark:text-gray-300 dark:bg-neutral-900"
      >
         <Sidebar />
         <Switchs />
         <Home />
      </div>
   );
}

export default App;
