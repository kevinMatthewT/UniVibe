import Header  from "./components/Header";
import React,{useState,useEffect} from "react";
import FadeLoader from "react-spinners/FadeLoader";
import logo from "./assets/images/UnivibeLogo.png"

import "./index.css"

function App() {
  const [loading,setLoading]= useState(false);
  
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  return(
    <>
    {loading ? (
    <>
    <div className="container">
     <div className="contents"> 
      <img src={logo} className="loadingScreenImage"/>
      <FadeLoader
          loading={loading}
          size={30}
          color={'yellow'}
          className="loadingFadeLoader"
        />
      </div>
    </div>
    </>
      ):(
      <Header/>)}
    </>
  );
}

export default App
