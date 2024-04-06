import {useContext} from 'react'
import { MyContext } from "../MyContext/index"
import "./index.css"

const Home = () => {
  const userDetail=useContext(MyContext) 
  console.log(userDetail,"userDetail")
  const {about} = userDetail
  const {name,alternateAvatars,quote,title} = about
  const profileImageObject=alternateAvatars[0]
  const {url} = profileImageObject
  return (
    <div className='home-bg'>     
      
        <img src={url} alt={name} className='my-image' />      
      <div className="leftside-names">       
        <p className='name-intro'>Hi,this is</p>   
        
        <h1 className="name" data-text={name}>{name}</h1>  
      
        <p className='jobtitle'> <span className="title"> {title}</span></p>

                    <button class="button-89" role="button">ABOUT ME</button>   

        <p className='quote'>{quote}</p>
        
      </div>
      </div>
      
   
  )
}

export default Home
