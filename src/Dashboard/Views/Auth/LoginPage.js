import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../redux/action/authAction";
import Loader from "../../../utils/loader";
import ToastContainer from "../../../utils/toast";

ReactGA.initialize("UA-198799173-1");

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const login = useSelector((state) => state.login);
  const { loading, user, error } = login;

  const onSucussGoogleResponse = (response) => {
    ReactGA.event({
      category: "User",
      action: "Account Created",
    });

    const inputData = {
      tokenID: response.tokenId,
    };
    dispatch(userLogin(inputData, "goAuthLogin"));
  };

  const onFailGoogleResponse = (response) => {};

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    if (user) {
      history.push("/home");
    }
    if (error) {
      toast.error(error);
    }
  }, [history, error, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    ReactGA.event({
      category: "User",
      action: "Account Created",
    });

    const data = {
      email,
      password,
    };
    dispatch(userLogin(data));
  };

  return (
    <div>
      {loading && <Loader />}
      <section class="relative py-4 ">
        <div class="container px-4 mx-auto">
          <div class="max-w-md mx-auto py-6 lg:py-12 px-4 lg:px-8 bg-white border rounded-xl text-center">
            <span class="inline-block mb-4 text-xs text-blue-400 font-semibold">
              Sign In
            </span>
            <div className="flex justify-center items-center mb-12">
              <img
                src="https://res.cloudinary.com/sumit9988/image/upload/v1626467520/Peach_Abstract_Design_Brand_Letter_P_Logo_1_pp0dmw.svg"
                className="w-24 h-24"
                alt="logo"
              />
            </div>

            <form action="#">
              <p class="flex items-center justify-center pb-8  rounded">
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  render={(renderProps) => (
                    // eslint-disable-next-line jsx-a11y/no-redundant-roles
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      aria-label="Continue with google"
                      role="button"
                      className="focus:outline-none focus:ring-2 bg-blue-400 hover:bg-blue-500  focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-50 flex items-center w-full mt-10"
                    >
                      <svg
                        width={19}
                        height={20}
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                          fill="#34A853"
                        />
                        <path
                          d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                          fill="#EB4335"
                        />
                      </svg>
                      <p className="text-base font-medium ml-4 text-gray-50">
                        Continue with Google
                      </p>
                    </button>
                  )}
                  buttonText="Login"
                  onSuccess={onSucussGoogleResponse}
                  onFailure={onFailGoogleResponse}
                  cookiePolicy={"single_host_origin"}
                />
              </p>
              <p class="block  mb-4 text-sm font-semibold ">Or</p>{" "}
              <div class="relative flex flex-wrap mb-6 pt-">
                <input
                  class="relative mb-2 md:mb-0 w-full bg-gray-100 focus:outline-none  py-4 pl-4 text-sm  rounded"
                  type="email"
                  placeholder="e.g sumit@pfolio.me"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                  Your email address
                </span>
              </div>
              <div class="relative flex flex-wrap mb-6">
                <input
                  class="relative mb-2 md:mb-0 w-full bg-gray-100 focus:outline-none py-4 pl-4 text-sm border rounded"
                  type="password"
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                  Password
                </span>
              </div>
              <button
                onClick={submitHandler}
                class="w-full inline-block py-4 mb-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200"
              >
                Login
              </button>
              <Link to="/forgetpassword">
                <p class="block pb-2 mb-2 text-sm font-semibold hover:underline ">
                  Forgot password?
                </p>
              </Link>
              <Link to="/signup">
                <p class="block pb-6 mb-6 text-sm text-red-400 font-semibold hover:underline ">
                  Create Your Account
                </p>
              </Link>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Login;
