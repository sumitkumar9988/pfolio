import React from "react";
import axios from "axios";
import { api } from "./../utils/url";
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

const Index = ({ username, match, history }) => {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState({});
  const [theme, setTheme] = React.useState({});

  const user_name = match.params.username || username;

  const fetchProfile = () => {
    axios
      .get(`${api}/home/${user_name}`)
      .then((res) => {
        setUser(res.data.data);
        const themeData = {
          bgColor1: res.data.data.bgColor1 || "bg-white",
          bgColor2: res.data.data.bgColor2 || "bg-gray-200",
          bgTextColor: res.data.data.bgTextColor || "bg-black",
          textColor1: res.data.data.textColor1 || "text-black",
          textColor2: res.data.data.textColor2 || "text-gray-700",
        };
        setTheme(themeData);
        console.log(themeData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        console.log('before push');
        history.push('/error')
      });
  };

  React.useEffect(() => {
    fetchProfile();
  }, []);


  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{user.name}</title>
            <link rel="canonical" href={`${user.username}.pfolio.me`} />
            <meta name="description" content={user.bio} />
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
