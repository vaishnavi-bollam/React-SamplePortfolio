import {useContext} from 'react'
import { MyContext } from '../MyContext/index'
import "./index.css"


const Footer = () => {
  
  const userDetail = useContext(MyContext)
  console.log(userDetail,"userDetail")
  
  return (
    <div>
      <h1>Footer</h1>
    </div>
  )
}

export default Footer
