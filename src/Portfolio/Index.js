import React from "react";
import axios from "axios";
import Error from "./utils/FourOFour";
import { api } from "./../utils/url";
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

const Index = ({ username, history, match }) => {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState({});
  const [error, setError] = React.useState();

  let user_name;
  if (match && match.params && match.params.username) {
    user_name = match.params.username;
  } else if (username) {
    user_name = username;
  } else {
    console.log("error");
  }

  console.log(user_name);

  const fetchProfile = () => {
    axios
      .get(`${api}/home/${user_name}`)
      .then((res) => {
        setUser(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        let err_message;
        err_message =
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message;
        setError(err_message);
        setLoading(false);
      });
  };

  React.useEffect(() => {
    fetchProfile();
  }, []);

  // loading?<Loader/>:(error?<Error/>:<Index/>)

  return (
    <div>
    {loading ? (
      <Loader />
    ) : error ? (
      <Error message={error} />
    ) : (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{user.name}</title>
          <link rel="canonical" href={`${user.username}.pfolio.me`} />
          <meta name="description" content={user.bio} />
        </Helmet>
        <div className={`h-full bg-black`}>
          <Header user={user} />
          <Hero user={user} />
          <Skills user={user} />
          <Project user={user} />
          <Experience user={user} />
          <Education user={user} />
          <Contact user={user} />
          <Footer user={user} />
        </div>
      </div>
    )}
  </div>
  );
};

export default Index;
