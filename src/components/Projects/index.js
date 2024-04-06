import {useContext} from 'react'
import { MyContext } from '../MyContext/index'

import EachProject from '../EachProject/index'

import "./index.css"

const Projects = () => {
  const userDetail = useContext(MyContext)
  const {projects}=userDetail
  return (
    <div>
      <h1>Projects</h1>
      <div className='each-project-bg'>
        {projects.map((eachProject)=>(
          <EachProject eachProject={eachProject} key={eachProject._id} />
        ))}
      </div>
    </div>
  )
}
export default Projects
