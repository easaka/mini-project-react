import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import PowerChartPage from "../Pages/PowerChartPage";
import VoltageChartPage from "../Pages/VoltageChartPage";
import CurrentChartPage from "../Pages/CurrentChartPage";
import Layout from "../layout/layout";
import LoginCom from "../components/LoginCom"
import WelcomePage from "../Pages/WelcomePage";

const router = createBrowserRouter([
  {
    path:"/",
    element:<WelcomePage/>
  },
 {
    path:"/login",
    element:<LoginCom/>
  },
    {
            element:<Layout/>,
            children:[
           {
    path:"/home",
    element:<App/>
  },
             {
    path:"/voltageChart",
    element:<VoltageChartPage/>
  },
            {
    path:"/powerChart",
    element:<PowerChartPage/>
  }
           ,{
    path:"/currentChart",
    element:<CurrentChartPage/>
  }
          ]
       },
  
 
 
])

export default router