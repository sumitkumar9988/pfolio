import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { userResetPassword } from "../../../redux/action/authAction";
import Loader from "./../../../utils/loader";
import ToastContainer from "./../../../utils/toast";

const ResetPassword = ({history,match}) => {

  const [password, setPassword] = useState('');
  const [confimPassword, setConfimPassword] = useState('');

  const dispatch = useDispatch();

  const resetPassword = useSelector((state) => state.resetPassword);
  const { success ,loading,error} = resetPassword;

  const userLogin = useSelector((state) => state.login);
  const { user } = userLogin;

  useEffect(() => {
    if(user){
      history.push('/home');
    }
    if(success){
      toast.success(success)
    }
    if(error){
      toast.error(error)
    }
  }, [user,success,error,history]);



  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      password,
    };
    if(password!==confimPassword){
      toast.error("password Don't match Confirm your Password")
    }
    console.log(data);
    dispatch(userResetPassword(data,match.params.id));
  };

  return (
    <div>
      {loading && <Loader/>}
      <div>
        <section class="relative py-20">
          <div class="container px-4 mx-auto">
            <div class="max-w-md mx-auto py-6 lg:py-12 px-4 lg:px-8 bg-white border rounded-xl text-center">
              <span class="inline-block mb-4 text-xs text-blue-400 font-semibold">
                Reset Password
              </span>
              <div className="flex justify-center items-center mb-12">
                <img
                  src="https://res.cloudinary.com/sumit9988/image/upload/v1626467520/Peach_Abstract_Design_Brand_Letter_P_Logo_1_pp0dmw.svg"
                  className="w-24 h-24"
                  alt="logo"
                />
              </div>

              <form action="#">
                <div class="relative flex flex-wrap mb-6">
                  <input
                    class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                    type="password"
                    placeholder="******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                    Password
                  </span>
                </div>
                <div class="relative flex flex-wrap mb-6">
                  <input
                    class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                    type="password"
                    placeholder="******"
                    value={confimPassword}
                    onChange={(e) => setConfimPassword(e.target.value)}
                  />
                  <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                    Confirm Password
                  </span>
                </div>
                <button onClick={submitHandler} class="w-full inline-block py-4 mb-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
