import  {Link}  from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai"
import { AiOutlineUser,AiFillBell} from "react-icons/ai";
import { FiX} from "react-icons/fi";
import { useState } from "react";




const Navbar = () => {
   const [show,setShow] = useState(false)

   // const SignOut = async() =>{
    
   // }
  return (
    <div className="p-2 border-b flex items-center sticky top-0 bg-white justify-between cursor-pointer">
       <div className="flex md:hidden p-2">
        {
        show?
        <div className="text-xl"
         onClick={()=>{setShow(false)}}
         >
            <FiX/>
        </div>
          :
       <div className="text-xl"
         onClick={()=>{setShow(true)}}
         >
            <AiOutlineMenu/>
        </div>
        }
      </div>
       <div className="hidden md:flex items-center">
           <div className="flex items-center">
             <p className="font-bold hover:underline text-black p-1 m-2 rounded-full">
                <Link to={"/home"}>Home</Link>
             </p>

           </div>
        </div>
        {
        show &&
        <div className="absolute top-12 md:hidden">
           <div id="dropdown" class=" bg-white divide-y mt-2 divide-gray-100 rounded-lg shadow w-44 ">
            <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
                <li onClick={()=>{setShow(false)}}>
                     <Link to={"/home"} class="block px-4 py-2 hover:bg-gray-100 ">
                        Home
                     </Link>
                </li>
         </ul>
          </div>
       </div>
      }
       <div className="flex items-center">
        <div className="text-lg m-1">
            <AiOutlineUser/>
        </div>
        <div className="text-lg m-1">
           <AiFillBell/>
        </div>
            {
              /*
                <img
              src=""
              width={40}
              height={40}
              className="bg-red-500 rounded-full"
              alt="Profile Picture"
             />
              */
            }
             {/* <p className="m-2">manuel</p> */}
             <p className="p-1 rounded bg-blue-700 text-white"
            
             >
              LogOut
            </p>
        </div>
    </div>
  )
}

export default Navbar
