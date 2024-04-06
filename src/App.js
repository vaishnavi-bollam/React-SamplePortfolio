import { useEffect, useState ,useRef} from 'react';
import axios from 'axios';
import {ThreeDots} from 'react-loader-spinner'


import "./App.css"



import Header from "./components/Header/index";
import Home from './components/Home/index'
import { MyContext } from './components/MyContext';
import About from "./components/About/index";
import Services from "./components/Services/index";
import Skills from "./components/Skills/index";
import Projects from "./components/Projects/index";
// import Timeline from './components/Timeline/index';
// import Testimonials from "./components/Testimonials/index";
// import Footer from "./components/Footer/index";


const apiStatusConstants = {
  initial : 'INITIAL',
  loading:'IN_PROGRESS',
  success:'SUCCESS',
  failure:'FAILURE'
}

const App = () => {
  const sectionRef= useRef(null)
  const aboutRef=useRef(null)
  const servicesRef=useRef(null)
  const skillsRef=useRef(null)
  const projectsRef=useRef(null)

  
  const [userDetail,setUserDetails]=useState(null)
  const [RetrieveStatus,setRetrieveStatus] = useState(apiStatusConstants.loading)
  useEffect(() => {
      const fetchData = async () => {
        try {
          const fetchedDataValue = await axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
          const { data,status } = fetchedDataValue;
          // console.log(fetchedDataValue)
          const { user } = data;
          // console.log(user, "user");
          // console.log(status)
          
          if(status===200){
              setRetrieveStatus(apiStatusConstants.success)
              setUserDetails(user);
            }else{
              setRetrieveStatus(apiStatusConstants.failure)
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setRetrieveStatus(apiStatusConstants.failure)
        }
      };
      fetchData();
  }, []); // Empty dependency array, so the effect runs only once after component mounts
  
  const renderLoadingView=()=>(
      <div className='loading-bg'>
        <ThreeDots type="ThreeDots" color="#6D54F1" height={80} width={80} />
      </div>
  )


  const renderFailureView=()=>(
      <>
        <h1>Something Went Wrong,Please Try Again After Sometime.</h1>
        <h2>Check Your Internet Connection</h2>
      </>
  )

  const renderSuccessView = ()=>{
    
    return(
        <MyContext.Provider value={userDetail}>
          <div ref={sectionRef}><Home/></div>
          <div ref={aboutRef}><About/></div>
          <div ref={servicesRef}><Services/></div>
          <div ref={skillsRef}><Skills /></div>
          <div ref={projectsRef}><Projects/></div>
        </MyContext.Provider>
    )
}


const getFinalResult=()=>{     
    switch (RetrieveStatus) {
      case apiStatusConstants.loading:         
        return renderLoadingView()     
      case apiStatusConstants.success:
        return renderSuccessView()           
      case apiStatusConstants.failure:         
        return renderFailureView()
      default:
        return null
    }
}


  return ( 
    <>
    <MyContext.Provider value={{sectionRef,aboutRef,skillsRef,projectsRef,servicesRef}}>
      <Header />
      {getFinalResult()}
    </MyContext.Provider>
    </>
  );
};

export default App;
