import React from "react"

type IProps={
    name:string,
}
const Input =({name}:IProps)=>{
    return(
        <div>
             <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Titulo
      </label>
      <input className="shadow appearance-none border 
      rounded w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline" id="username" 
      type="text" placeholder="Username"/>
            </div>
    )
}
export default Input;