import React from "react";
import axios from 'axios'
import {api} from './../utils/url'
import clsx from "clsx";
import Loader from "./utils/Loader";
import { Helmet } from "react-helmet";
import Header from "./components/Headers";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ErrorPage from './utils/FourOFour.js'

const Index = ({ username,match }) => {
  const [loading,setLoading] = React.useState(true);
  const [user,setUser]=React.useState({});
  const [error,setError]=React.useState(null);
  const [theme,setTheme]=React.useState({});


  const user_name=match.params.username||username;
  console.log(user_name)

  const fetchProfile=()=>{
    axios.get(`${api}/home/${user_name}`).then((res)=>{
          setUser(res.data.data)
          const themeData={
                bgColor1:res.data.data.bgColor1|| "bg-white",
                bgColor2:res.data.data.bgColor2 ||"bg-gray-200",
                bgTextColor:res.data.data.bgTextColor|| "bg-black",
                textColor1:res.data.data.textColor1|| "text-black",
                textColor2:res.data.data.textColor2 || "text-gray-700"
          }
          setTheme(themeData)
          console.log(themeData)
          setLoading(false)
    }).catch((err)=>{
      console.log(err)
      setLoading(false)
      setError(err) 
    })
  }

  React.useEffect(() => {
    fetchProfile()
  }, [])


  if(error){
    console.log("error",error.message)
    return <ErrorPage status={error.status} message={error.message}/>
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title></title>
            <link rel="canonical" href="https://sumit.pfolio.me" />
          </Helmet>
          <div className={clsx("h-full ", theme.bgColor1)}>
            <Header user={user} theme={theme} />
            <Hero user={user} theme={theme} />
            <Skills user={user} theme={theme} />
            <Project user={user} theme={theme} />
            <Experience user={user} theme={theme} />
            <Education user={user} theme={theme} />
            <Contact user={user} theme={theme} />
            <Footer user={user} theme={theme} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
