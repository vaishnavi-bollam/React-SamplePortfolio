import './index.css'

const EachProject = (props) => {
  const {eachProject} = props  
  const {title} = eachProject
  return (
    <div>
        <p>{title}</p>
    </div>
  )
}

export default EachProject
