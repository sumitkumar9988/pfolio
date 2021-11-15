import React, { useEffect } from "react";
import { LineChart } from "react-chartkick";
import "chartkick/chart.js";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getAnaltics } from "./../../../redux/action/dashboardAction";
import ToastConatiner from "./../../../utils/toast";
import Loader from "./../../../utils/loader";

const Analtics = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.state);
  const { analtics } = useSelector((state) => state.store);

  useEffect(()=>{
      error && toast.error(error);
  },[error])

  useEffect(()=>{
      dispatch(getAnaltics());
  },[dispatch])

  return (
    <div>
      {loading && <Loader/>}
      <ToastConatiner/>
      <section class="py-8">
        <div class="container px-4 mx-auto">
          <div class=" rounded">
            <div class="flex flex-wrap justify-between items-center py-5 px-6">
              <div>
                <h3 class="w-full md:w-auto mb-4 md:mb-0 text-2xl font-bold">
                  Daily Visitiors
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16 m-4">
          <LineChart
            data={analtics.data}
            colors={["#ff5252"]}
            loading='loading...'
          />
        </div>
      </section>
      <section class="py-8">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -m-4 mx-auto items-center  justify-center">
            <div class="w-full lg:w-1/2 p-4">
              <div class="p-6 rounded bg-white">
                <div class="flex mb-2">
                  <span class="inline-block mr-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.00013 0.666656C7.90578 0.666656 6.82215 0.882205 5.8111 1.30099C4.80006 1.71978 3.8814 2.33361 3.10758 3.10743C1.54477 4.67024 0.666799 6.78985 0.666799 8.99999C0.659514 10.9243 1.32579 12.7904 2.55013 14.275L0.883466 15.9417C0.767834 16.0588 0.689504 16.2077 0.658359 16.3693C0.627214 16.531 0.64465 16.6982 0.708466 16.85C0.777681 16.9999 0.889886 17.1259 1.03084 17.212C1.17179 17.298 1.33513 17.3403 1.50013 17.3333H9.00013C11.2103 17.3333 13.3299 16.4553 14.8927 14.8925C16.4555 13.3297 17.3335 11.2101 17.3335 8.99999C17.3335 6.78985 16.4555 4.67024 14.8927 3.10743C13.3299 1.54463 11.2103 0.666656 9.00013 0.666656ZM9.00013 15.6667H3.50847L4.28347 14.8917C4.43868 14.7355 4.52579 14.5243 4.52579 14.3042C4.52579 14.084 4.43868 13.8728 4.28347 13.7167C3.19229 12.6267 2.51278 11.1921 2.36071 9.65732C2.20864 8.12253 2.59342 6.58249 3.44949 5.29959C4.30556 4.01669 5.57996 3.07029 7.05556 2.62163C8.53117 2.17298 10.1167 2.24983 11.542 2.83908C12.9673 3.42834 14.1442 4.49355 14.8722 5.85323C15.6002 7.21291 15.8342 8.78294 15.5344 10.2958C15.2346 11.8087 14.4196 13.1709 13.2281 14.1502C12.0366 15.1295 10.5424 15.6654 9.00013 15.6667ZM13.1668 8.16666H4.83347C4.61245 8.16666 4.40049 8.25445 4.24421 8.41073C4.08793 8.56701 4.00013 8.77898 4.00013 8.99999C4.00013 9.221 4.08793 9.43296 4.24421 9.58924C4.40049 9.74553 4.61245 9.83332 4.83347 9.83332H13.1668C13.3878 9.83332 13.5998 9.74553 13.7561 9.58924C13.9123 9.43296 14.0001 9.221 14.0001 8.99999C14.0001 8.77898 13.9123 8.56701 13.7561 8.41073C13.5998 8.25445 13.3878 8.16666 13.1668 8.16666ZM11.5001 11.5H6.50013C6.27912 11.5 6.06716 11.5878 5.91088 11.7441C5.7546 11.9003 5.6668 12.1123 5.6668 12.3333C5.6668 12.5543 5.7546 12.7663 5.91088 12.9226C6.06716 13.0789 6.27912 13.1667 6.50013 13.1667H11.5001C11.7211 13.1667 11.9331 13.0789 12.0894 12.9226C12.2457 12.7663 12.3335 12.5543 12.3335 12.3333C12.3335 12.1123 12.2457 11.9003 12.0894 11.7441C11.9331 11.5878 11.7211 11.5 11.5001 11.5ZM6.50013 6.49999H11.5001C11.7211 6.49999 11.9331 6.41219 12.0894 6.25591C12.2457 6.09963 12.3335 5.88767 12.3335 5.66666C12.3335 5.44564 12.2457 5.23368 12.0894 5.0774C11.9331 4.92112 11.7211 4.83332 11.5001 4.83332H6.50013C6.27912 4.83332 6.06716 4.92112 5.91088 5.0774C5.7546 5.23368 5.6668 5.44564 5.6668 5.66666C5.6668 5.88767 5.7546 6.09963 5.91088 6.25591C6.06716 6.41219 6.27912 6.49999 6.50013 6.49999Z"
                        fill="#f48c8c"
                      ></path>
                    </svg>
                  </span>
                  <h3 class="text-sm text-gray-600">Total Users</h3>
                  <span class="inline-block ml-auto px-2 py-1 text-xs text-gray-900 bg-gray-200 rounded-full">
                    30 Days
                  </span>
                </div>
                <h2 class="mb-2 text-3xl font-bold text-center">{analtics.totalUser?analtics.totalUser:null}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analtics;
