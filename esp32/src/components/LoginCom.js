import React from 'react'
import { login } from '../firebase'

const LoginCom = () => {
  return (
<div className="flex flex-col justify-center h-screen items-center">
  <h3 className="mb-5 text-3xl">LOGIN</h3>
<form className="md:w-96 p-2 shadow-sm">
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
    <input type="email" id="email" class="bg-gray-50 border md:w-full border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5 " placeholder="name@flowbite.com" required/>
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
    <input type="password" id="password" class="bg-gray-50 border md:w-full border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5" required/>
  </div>
  <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3" required/>
    </div>
    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <div type="submit" onClick={login()} class="text-white bg-blue-700 md:w-full hover:bg-blue-800  font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center">Submit</div>
</form>
    </div>
  )
}

export default LoginCom
