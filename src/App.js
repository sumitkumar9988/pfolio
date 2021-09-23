import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Landing Page
import LandingPage from './LandingPage/Index';
// Page Related to Auth Page
import Login from './Dashboard/Views/Auth/LoginPage';
import Signup from './Dashboard/Views/Auth/SignupPage';
import ChangePassword from './Dashboard/Views/Auth/ChangePass';
import ForgetPassword from './Dashboard/Views/Auth/ForgetPass';
import ResetPassword from './Dashboard/Views/Auth/ForgetPass';
import CreateProfile from './Dashboard/Views/Auth/ProfilePage';
// Portfolio Page
import Portfolio from './Portfolio/Index';
// Components And Page Related to Dashboard
import Sidebar from './Dashboard/components/Layout/Sidebar';
import FourOFour from './Dashboard/Views/Fourofour';
import Analtics from './Dashboard/Views/Home/Analtics';
import JobPage from './Dashboard/Views/Home/JobPage';
import Education from './Dashboard/Views/Home/EduPage';
import Experience from './Dashboard/Views/Home/ExpePage';
import Home from './Dashboard/Views/Home/HomePage';
import Setting from './Dashboard/Views/Home/SettingPage';
import Project from './Dashboard/Views/Home/ProjectPage';
import Theme from './Dashboard/Views/Home/ThemePage';
// Dashboard 
import EditEducation from './Dashboard/Views/Forms/EditEdu';
import AddEducation from './Dashboard/Views/Forms/AddEdu';
import AddExperience from './Dashboard/Views/Forms/AddExp';
import EditExperience from './Dashboard/Views/Forms/EditExp';
import AddLink from './Dashboard/Views/Forms/AddLink';
import EditProfile from './Dashboard/Views/Forms/EditProfile';
import ViewProfile from './Dashboard/Views/Forms/ViewProfile';
import AddProject from './Dashboard/Views/Forms/AddProject';
import EditProject from './Dashboard/Views/Forms/EditProject';

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
    <div className="custom-scrollbar">
      <Router>
        <Switch>
        <Route exact path="/" component={LandingPage} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/changepassword" component={ChangePassword} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/resetpassword/:id" component={ResetPassword} />
          <Route path="/create-profile" component={CreateProfile} />
          <Route path="/sumit" component={Portfolio} />

          <DashboardRoute path="/home/education/new" component={AddEducation} />
          <DashboardRoute path="/home/education/:id" component={EditEducation} />
          <DashboardRoute path="/home/education" component={Education} />

          <DashboardRoute path="/home/experience/new" component={AddExperience} />
          <DashboardRoute path="/home/experience/:id" component={EditExperience} />
          <DashboardRoute path="/home/experience" component={Experience} />

          <DashboardRoute path="/home/project/new" component={AddProject} />
          <DashboardRoute path="/home/project/:id" component={EditProject} />
          <DashboardRoute path="/home/project" component={Project} />

          <DashboardRoute path="/home/profile/link" component={AddLink} />
          <DashboardRoute path="/home/profile/edit" component={EditProfile} />
          <DashboardRoute path="/home/profile/view" component={ViewProfile} />

          <DashboardRoute path="/home/setting" component={Setting} />

          <DashboardRoute path="/home/blog" component={JobPage} />
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
