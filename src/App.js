import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './landingPage/index';
import Login from './Dashboard/Views/Auth/Login';
import Signup from './Dashboard/Views/Auth/Signup';
import ChangePassword from './Dashboard/Views/Auth/ChangePassword';
import ForgetPassword from './Dashboard/Views/Auth/ForgetPassword';
import ResetPassword from './Dashboard/Views/Auth/ResetPassword';
import Portfolio from './portfolio/Index';
import Sidebar from './Dashboard/components/Layout/Sidebar';
import FourOFour from './Dashboard/Views/fourofour';
import Analtics from './Dashboard/Views/dashboard/analtics';
import Blog from './Dashboard/Views/dashboard/blog';
import Education from './Dashboard/Views/dashboard/education';
import Experience from './Dashboard/Views/dashboard/experience';
import Home from './Dashboard/Views/dashboard/home';
import Profile from './Dashboard/Views/dashboard/profile';
import Setting from './Dashboard/Views/dashboard/setting';
import Project from './Dashboard/Views/dashboard/project';
import Theme from './Dashboard/Views/dashboard/theme';
import EditEducation from './Dashboard/Views/dashboard/editEducation';
import AddEducation from './Dashboard/Views/dashboard/addEducation';
import AddExperience from './Dashboard/Views/dashboard/addExperience';
import EditExperience from './Dashboard/Views/dashboard/editExperience';
import AddLink from './Dashboard/Views/dashboard/addLink';
import EditProfile from './Dashboard/Views/dashboard/editProfile';
import ViewProfile from './Dashboard/Views/dashboard/viewProfile';
import AddProject from './Dashboard/Views/dashboard/addProject';
import EditProject from './Dashboard/Views/dashboard/editProject';
import ImportProject from './Dashboard/Views/dashboard/importProject';

const DashboardRoute = ({component: Component, ...rest}) => {  
  return (  
    <Route {...rest} render={matchProps => (  
      <Sidebar>  
          <Component {...matchProps} />  
      </Sidebar>  
    )} />  
  )  
};  

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/" component={LandingPage} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/changepassword" component={ChangePassword} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/sumit" component={Portfolio} />

          <DashboardRoute path="/home/education/new" component={AddEducation} />
          <DashboardRoute path="/home/education/:id" component={EditEducation} />
          <DashboardRoute path="/home/education" component={Education} />

          <DashboardRoute path="/home/experience/new" component={AddExperience} />
          <DashboardRoute path="/home/experience/:id" component={EditExperience} />
          <DashboardRoute path="/home/experience" component={Experience} />

          <DashboardRoute path="/home/project/new" component={AddProject} />
          <DashboardRoute path="/home/project/import" component={ImportProject} />
          <DashboardRoute path="/home/project/:id" component={EditProject} />
          <DashboardRoute path="/home/project" component={Project} />

          <DashboardRoute path="/home/profile/link" component={AddLink} />
          <DashboardRoute path="/home/profile/edit" component={EditProfile} />
          <DashboardRoute path="/home/profile/view" component={ViewProfile} />
          <DashboardRoute path="/home/profile" component={Profile} />

          <DashboardRoute path="/home/setting" component={Setting} />

          <DashboardRoute path="/home/blog" component={Blog} />
          <DashboardRoute path="/home/analytics" component={Analtics} />
          <DashboardRoute path="/home/theme" component={Theme} />
          <DashboardRoute path="/home" component={Home} />
          <Route path="*" exact  component={FourOFour} />
         
        </Switch>
      </Router>
    </div>

  );
}

export default App;
