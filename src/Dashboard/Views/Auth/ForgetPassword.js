import React from 'react'

const ForgetPassword = () => {
    return (
        <div>
             <div>
      <section class="relative py-20">
        <div class="container px-4 mx-auto">
          <div class="max-w-md mx-auto py-6 lg:py-12 px-4 lg:px-8 bg-white border rounded-xl text-center">
            <span class="inline-block mb-4 text-xs text-blue-400 font-semibold">
            Forget Password
            </span>
            <div className="flex justify-center items-center mb-12">
              <img
                src="https://res.cloudinary.com/sumit9988/image/upload/v1626467520/Peach_Abstract_Design_Brand_Letter_P_Logo_1_pp0dmw.svg"
                className="w-24 h-24"
                alt="logo"
              />
            </div>

            <form action="#">
              
              <div class="relative flex flex-wrap mb-6 pt-">
                <input
                  class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                  type="email"
                  placeholder="e.g sumit@pfolio.me"
                />
                <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                  Your email address
                </span>
              </div>
             
              <button class="w-full inline-block py-4 mb-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200">
                Send Verification
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
        </div>
    )
}

export default ForgetPassword
