import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
   return (
      <div
         className="max-w-full max-h-full font-poppins
       bg-gray-400 text-gray-800 dark:bg-gray-900 dark:text-gray-300 "
      >
         <Sidebar />
      </div>
   );
}

export default App;
