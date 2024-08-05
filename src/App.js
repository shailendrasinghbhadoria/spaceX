import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./components/Home";
import Rockets from "./components/Rockets";
import Header from "./components/Header";



function App() {

  return (
    <div className="bg-custom-image w-full bg-cover bg-center h-screen rounded-xl shadow-xl flex">      
      <Header/>
      <Outlet/>      
    </div>
  );

}
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/rockets",
          element: <Rockets/>,
        },
        // {
        //   path: "/rockets/:id",
        //   element: <RocketModal/>,
        // },
      ]
    },
    
  ]);

  




export default App;
