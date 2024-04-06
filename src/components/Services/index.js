import { useContext } from 'react'
import { MyContext } from '../MyContext/index'

import EachService from '../EachService/index'

import "./index.css"


const Services = () => {

  const userDetail = useContext(MyContext)
  const {services} = userDetail
  console.log(userDetail)
  return (
    <div>
      <h1>My Services</h1>
      <div className='all-services-bg'>
        {
          services.map((eachService)=>(
            <EachService eachService={eachService} key={eachService._id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Services
