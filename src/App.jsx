import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
   return (
      <div className="max-w-full max-h-full h-screen bg-gray-900 ">
         <h1 className="text-3xl font-bold underline text-gray-300">
            Personal Portfolio
         </h1>
         <Sidebar />
      </div>
   );
}

export default App;
