import React from "react";
import { ToastContainer } from "react-toastify";



const Toast = () => {
  return (
    <div>
      <div className="mt-4">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default Toast;
