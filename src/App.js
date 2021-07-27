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

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
          <DashboardRoute path="/home/education" component={Education} />
          <DashboardRoute path="/home/experience" component={Experience} />
          <DashboardRoute path="/home/profile" component={Profile} />
          <DashboardRoute path="/home/setting" component={Setting} />
          <DashboardRoute path="/home/work" component={Project} />
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
