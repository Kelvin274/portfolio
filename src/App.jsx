import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
   return (
      <div className="max-w-full max-h-full h-screen flex bg-gray-900 ">
         <Sidebar />
         <h1 className="text-3xl font-bold underline text-gray-300">
            Personal Portfolio
         </h1>
      </div>
   );
}

export default App;
