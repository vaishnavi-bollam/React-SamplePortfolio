import {useContext} from 'react'
import { MyContext } from '../MyContext/index'
import "./index.css"

const Timeline = () => {

  const userDetail = useContext(MyContext)
  console.log(userDetail,"userDetail")

  return (
    <div>
      <h1>Timeline</h1>
    </div>
  )
}

export default Timeline
