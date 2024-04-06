import './index.css'

const EachSkill = (props) => {
    const {eachSkill}= props
    const {enabled,name,percentage,sequence,image} = eachSkill
    const {url} = image
  return (
    <div className='each-skill-bg'>
        <img src={url} alt={name} className='each-skill-image' />
        <p>{enabled}</p>
        <p>{name}</p>
        <p>{percentage}</p>
        <p>{sequence}</p>
    </div>
  )
}

export default EachSkill
