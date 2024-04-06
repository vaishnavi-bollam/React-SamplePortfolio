import "./index.css"

const EachService = (props) => {
  const {eachService} = props  
  const {charge,desc,enabled,image,name} = eachService
  const {url} = image
  return (
    <div className="each-service-bg">
      <img src={url} alt={name} className="each-service-image" /> 
      <p>{name}</p> 
      <p>{charge}</p>
      <p>{desc}</p>
      <p>{enabled}</p>
    </div>
  )
}

export default EachService
