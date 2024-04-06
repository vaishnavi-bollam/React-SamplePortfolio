import { useContext } from 'react'
import { MyContext } from '../MyContext/index'

import "./index.css"
import EachSkill from '../EachSkill/index'

const Skills = () => {

  const userDetail = useContext(MyContext)
  const {skills} = userDetail

  return (
    <div>
      <h1>Skills</h1>
      <div className='all-skills-bg'>
        {
          skills.map((eachSkill)=>(
            <EachSkill eachSkill={eachSkill} key={eachSkill._id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Skills
