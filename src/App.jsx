import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import Rendered from "./components/Rendered";

import "./App.css";

export default function App() {
  return (
    <div className="bg-custom-gradient h-[100vh] flex flex-col justify-center items-center  ">
      <div className="w-[600px] h-[400px] bg-white rounded-xl shadow-lg flex flex-col p-10 space-y-8 justify-center items-center'">
        <p className="text-md text-muted-foreground mx-auto underline text-gray-800 hover:text-black ease-out">
          Counter Using Redux
        </p>
        <Rendered />
        <div className="flex space-x-6 items-center justify-center ">
          <Increment />
          <Decrement />
        </div>
      </div>
    </div>
  );
}
