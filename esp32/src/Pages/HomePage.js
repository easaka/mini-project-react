
import Powerchart from "../components/Powerchart";
import Tcom from "../components/Tcom"
import { AiOutlineThunderbolt,AiFillApi,AiFillBulb} from "react-icons/ai";
import { Link } from "react-router-dom";



const HomePage = () => {
  return (
  <div className="p-1">
     <div className="md:flex m-2 justify-between">
         <div className="block max-w-sm m-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 flex items-center justify-center">
            Power
            <span> <AiOutlineThunderbolt/></span>
         </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
    <Link to={"/powerChart"} className="m-1 bg-blue-500 text-white w-24 p-1 rounded cursor-pointer">
        View Chart
    </Link>
   </div>
    <div className="block max-w-sm p-6 bg-white border m-1 border-gray-200 rounded-lg shadow hover:bg-gray-100"> 
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 flex items-center justify-center">
            Voltage
            <span> <AiFillApi/></span>
         </h5>
       <p class="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
         <Link to={"/voltageChart"} className="m-1 bg-blue-500 text-white w-24 p-1 rounded cursor-pointer">
         View Chart
      </Link>
   </div>
    <div className="block max-w-sm p-6 bg-white border m-1 border-gray-200 rounded-lg shadow hover:bg-gray-100"> 
         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 flex items-center justify-center">
            Current
            <span> <AiFillBulb/></span>
         </h5>
       <p class="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
       <Link to={"/currentChart"} className="m-1 bg-blue-500 text-white w-24 p-1 rounded cursor-pointer">
        View Chart
    </Link>
   </div>
     </div>
      <Tcom/>
  </div>
 
  )
}

export default HomePage