import React from "react"


type IProps={
    children:React.ReactNode
}
const Button =({children}:IProps)=>{
    return(
        <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            {children}
      </button>
    )
}
export default Button;