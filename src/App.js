import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Landing Page
import LandingPage from "./LandingPage/Index";
// Page Related to Auth Page
import Login from "./Dashboard/Views/Auth/LoginPage";
import Signup from "./Dashboard/Views/Auth/SignupPage";
import ChangePassword from "./Dashboard/Views/Auth/ChangePass";
import ForgetPassword from "./Dashboard/Views/Auth/ForgetPass";
import ResetPassword from "./Dashboard/Views/Auth/ResetPass";
import CreateProfile from "./Dashboard/Views/Auth/ProfilePage";
// Portfolio Page
import Portfolio from "./Portfolio/Index";
// Components And Page Related to Dashboard
import Sidebar from "./Dashboard/components/Layout/Sidebar";
import FourOFour from "./Dashboard/Views/Fourofour";
import Analtics from "./Dashboard/Views/Home/Analtics";
import JobPage from "./Dashboard/Views/Home/JobPage";
import Background from "./Dashboard/Views/Home/BackgroundPage";
import Home from "./Dashboard/Views/Home/HomePage";
import Setting from "./Dashboard/Views/Home/SettingPage";
import Project from "./Dashboard/Views/Home/ProjectPage";
import Theme from "./Dashboard/Views/Home/ThemePage";
// Dashboard
import EditEducation from "./Dashboard/Views/Forms/education/EditEdu";
import AddEducation from "./Dashboard/Views/Forms/education/AddEdu";
import AddExperience from "./Dashboard/Views/Forms/experience/AddExp";
import EditExperience from "./Dashboard/Views/Forms/experience/EditExp";
import AddLink from "./Dashboard/Views/Forms/profile/AddLink";
import EditProfile from "./Dashboard/Views/Forms/profile/EditProfile";
import ViewProfile from "./Dashboard/Views/Forms/profile/ViewProfile";
import AddProject from "./Dashboard/Views/Forms/project/AddProject";
import ImportProject from "./Dashboard/Views/Forms/project/ImportProject";
import EditProject from "./Dashboard/Views/Forms/project/EditProject";
import CustomDomain from "./Dashboard/Views/Forms/profile/CustomDomain";
import skills from "./utils/AllSkills";
import Bio from "./Dashboard/components/Card/bio";
import UploadResume from "./Dashboard/components/Card/UploadResume";
import Thankyou from "./Dashboard/components/Card/Thankyou";

const DashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Sidebar>
          <Component {...matchProps} />
        </Sidebar>
      )}
    />
  );
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
          <DashboardRoute path="/home/education/new" component={AddEducation} />
          <DashboardRoute
            path="/home/education/:id"
            component={EditEducation}
          />
          <DashboardRoute
            path="/home/experience/new"
            component={AddExperience}
          />
          <DashboardRoute
            path="/home/experience/:id"
            component={EditExperience}
          />
          <DashboardRoute path="/home/background" component={Background} />
          <DashboardRoute
            path="/home/project/import-project"
            component={ImportProject}
          />
          <DashboardRoute path="/home/project/new" component={AddProject} />
          <DashboardRoute path="/home/project/:id" component={EditProject} />
          <DashboardRoute path="/home/project" component={Project} />
          <DashboardRoute path="/home/profile/link" component={AddLink} />
          <DashboardRoute path="/home/profile/edit" component={EditProfile} />
          <DashboardRoute path="/home/profile/view" component={ViewProfile} />
          <DashboardRoute path="/home/setting" component={Setting} />
          <DashboardRoute path="/home/custom-domain" component={CustomDomain} />
          <DashboardRoute path="/home/explore" component={JobPage} />
          <DashboardRoute path="/home/analytics" component={Analtics} />
          <DashboardRoute path="/home/theme" component={Theme} />
          <Route path="/home/Get-started/bio" component={Bio} />
          <Route
            path="/home/Get-started/upload-resume"
            component={UploadResume}
          />
          <Route path="/home/Get-started/on-board" component={Thankyou} />
          <Route path="/home/Get-started" component={CreateProfile} />
          <DashboardRoute path="/home" component={Home} />
          <Route path="/skills" component={skills} />
          <Route exact path="/error" component={FourOFour} />
          <Route path="/:username" component={Portfolio} />
          <Route path="*" exact component={FourOFour} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
