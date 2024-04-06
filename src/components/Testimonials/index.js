import {useContext} from 'react'
import { MyContext } from '../MyContext/index'
import "./index.css"


const Testimonials = () => {
     
  const userDetail = useContext(MyContext)
  console.log(userDetail,"userDetail")
  
  return (
    <div>
      <h1>Testimonials</h1>
    </div>
  )
}

export default Testimonials
