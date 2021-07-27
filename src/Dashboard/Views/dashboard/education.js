import React from "react";

const education = () => {
  return (
    <div>
      <section class="py-8 px-6">
        <div class="flex flex-wrap items-center">
          <div class="w-full lg:w-auto flex items-center mb-4 lg:mb-0">
            <h2 class="text-2xl font-bold">Education</h2>
            <span class="inline-block py-1 px-2 ml-2 rounded-full text-xs text-white bg-red-400">
              5 Total
            </span>
          </div>
          <div class="w-full md:w-1/2 lg:w-auto flex py-2 px-4 mb-4 md:mb-0 md:mr-4 md:ml-auto border rounded bg-white">
            <input
              class="text-sm placeholder-gray-500"
              type="text"
              placeholder="Type to search..."
            />
            <button class="ml-auto">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0921 16.9083L15.0004 13.8417C16.2005 12.3453 16.7817 10.4461 16.6244 8.53441C16.4672 6.62274 15.5835 4.84398 14.155 3.56386C12.7265 2.28375 10.8619 1.59958 8.94451 1.65205C7.02711 1.70452 5.20268 2.48963 3.84636 3.84594C2.49004 5.20226 1.70493 7.02669 1.65247 8.94409C1.6 10.8615 2.28416 12.7261 3.56428 14.1546C4.84439 15.583 6.62316 16.4668 8.53482 16.624C10.4465 16.7812 12.3457 16.2001 13.8421 15L16.9087 18.0667C16.9862 18.1448 17.0784 18.2068 17.1799 18.2491C17.2815 18.2914 17.3904 18.3132 17.5004 18.3132C17.6104 18.3132 17.7193 18.2914 17.8209 18.2491C17.9224 18.2068 18.0146 18.1448 18.0921 18.0667C18.2423 17.9113 18.3262 17.7036 18.3262 17.4875C18.3262 17.2714 18.2423 17.0637 18.0921 16.9083ZM9.16708 15C8.01335 15 6.88554 14.6579 5.92625 14.0169C4.96696 13.3759 4.21929 12.4649 3.77778 11.399C3.33627 10.3331 3.22075 9.16019 3.44583 8.02863C3.67091 6.89708 4.22648 5.85767 5.04229 5.04187C5.85809 4.22606 6.89749 3.67049 8.02905 3.44541C9.1606 3.22033 10.3335 3.33585 11.3994 3.77736C12.4653 4.21887 13.3763 4.96654 14.0173 5.92583C14.6583 6.88512 15.0004 8.01293 15.0004 9.16666C15.0004 10.7138 14.3858 12.1975 13.2919 13.2914C12.1979 14.3854 10.7142 15 9.16708 15Z"
                  fill="#f48c8c"
                ></path>
              </svg>
            </button>
          </div>
          <p
            class="md:w-auto flex items-center py-2 px-4 rounded bg-red-400 hover:bg-red-500 text-white text-sm font-medium"
            href="#"
          >
            <span class="inline-block mr-1">
              <svg
                class="h-4 w-4 text-gray-800"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6667 1.33334H3.33333C2.19999 1.33334 1.33333 2.20001 1.33333 3.33334V12.6667C1.33333 13.8 2.19999 14.6667 3.33333 14.6667H12.6667C13.8 14.6667 14.6667 13.8 14.6667 12.6667V3.33334C14.6667 2.20001 13.8 1.33334 12.6667 1.33334ZM10.6667 8.66668H8.66666V10.6667C8.66666 11.0667 8.4 11.3333 8 11.3333C7.6 11.3333 7.33333 11.0667 7.33333 10.6667V8.66668H5.33333C4.93333 8.66668 4.66666 8.40001 4.66666 8.00001C4.66666 7.60001 4.93333 7.33334 5.33333 7.33334H7.33333V5.33334C7.33333 4.93334 7.6 4.66668 8 4.66668C8.4 4.66668 8.66666 4.93334 8.66666 5.33334V7.33334H10.6667C11.0667 7.33334 11.3333 7.60001 11.3333 8.00001C11.3333 8.40001 11.0667 8.66668 10.6667 8.66668Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span>Add Education</span>
          </p>
        </div>
      </section>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 pt-6 gap-8">
        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-72" />
        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-72" />
        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-72" />
        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-72" />
        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-72" />

      </div>
    </div>
  );
};

export default education;
