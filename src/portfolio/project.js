import React from "react";

const project = () => {
    const data = {
        bgTheme: "bg-black",
        mainTheme: "blue-500",
        mainThemeDark: "blue-600",
        // textColor: "text-gray-50",
        backgroundColor: "#17202A",
        textColor: "#FDFEFE",
      };
  return (

    <body
    className={`antialiased font-body `}
    style={{
      backgroundColor: `${data.backgroundColor}`,
      color: `${data.textColor}`,
    }}
  >
    <div>
      <section class="py-20">
        <div class="container px-4 mx-auto">
          <div class="max-w-2xl mx-auto mb-12">
            <div class="text-center mb-6">
              <span class="text-base md:text-lg">
                <span class="text-blueGray-400">24 Jan, 2020</span>
              </span>
              <h2 class="text-4xl md:text-5xl my-2 font-bold font-heading">
                Project Name
              </h2>
            </div>
            <div class="flex justify-center">
              <img
                class="w-12 h-12 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                alt=""
              />
              <div class="pl-4">
                <p class="text-blueGray-500 mb-1 pt-3">Alice Bradley</p>
              </div>
            </div>
            <div class="flex justify-center pt-4">
                <p class="text-blue-500 mb-1 hover:underline">Project Demo</p>
            </div>
            <div class="flex justify-center ">
                <p class="text-blue-500 mb-1 hover:underline">Repo</p>
            </div>
          </div>
          <div class="mb-8">
            <img
              class="h-80 mx-auto mb-6 object-cover rounded"
              src="https://images.unsplash.com/photo-1603665330306-dd1a67e0cc4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;h=300&amp;q=80&amp;blend=fe8484&amp;sat=-80&amp;blend-mode=multiply"
              alt=""
            />
          </div>
          <div class="container px-4 mx-auto">
    <div class="flex flex-wrap -mx-4 mb-20">
    <div class="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
        <img class="w-full h-80 object-cover rounded" src="https://images.unsplash.com/photo-1603050927325-baf630505e27?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjExMDk0fQ&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt=""/>
      </div>
      <div class="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
        <img class="w-full h-80 object-cover rounded" src="https://images.unsplash.com/photo-1603050927325-baf630505e27?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjExMDk0fQ&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt=""/>
      </div>
      <div class="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
        <img class="w-full h-80 object-cover rounded" src="https://images.unsplash.com/photo-1603050927325-baf630505e27?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjExMDk0fQ&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt=""/>
      </div>
      <div class="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
        <img class="w-full h-80 object-cover rounded" src="https://images.unsplash.com/photo-1603050927325-baf630505e27?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjExMDk0fQ&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt=""/>
      </div> <div class="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
        <img class="w-full h-80 object-cover rounded" src="https://images.unsplash.com/photo-1603050927325-baf630505e27?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjExMDk0fQ&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt=""/>
      </div>
      <div class="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
        <img class="w-full h-80 object-cover rounded" src="https://images.unsplash.com/photo-1603050927325-baf630505e27?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjExMDk0fQ&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80" alt=""/>
      </div>
    </div>
  </div>
          <div class="max-w-2xl mx-auto">
            <p class="mb-6 leading-loose text-blueGray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              commodo est eget consequat imperdiet. Suspendisse laoreet
              scelerisque lobortis. Mauris facilisis hendrerit nulla at
              vehicula. Suspendisse potenti. Ut in nulla a purus bibendum
              convallis. Suspendisse id nunc maximus, suscipit nte ac, vulputate
              massa. Sed ut nunc suscipit, bibendum arcu a, interdum elit.
              Nullam laoreet mollis dictum. Ut suscipit, magna at elementum
              iaculis, erat erat fermentum justo, sit amet ultrices enim leo sit
              amet purus. Nulla sed erat molestie, auctor mauris lobortis,
              iaculis justo.
            </p>
            <p class="leading-loose text-blueGray-400">
              Duis hendrerit dui in dui ornare luctus. Nullam gravida tincidunt
              lorem cursus suscipit. Integer scelerisque sem et sem porta, eu
              volutpat mi tempor. Duis interdum sodales lacus non tempor. Nam
              mattis, sapien a commodo ultrices, nunc orci tincidunt ante,
              tempus tempus turpis metus laoreet lacus. Praesent condimentum,
              arcu ut fringilla tincidunt, augue diam pretium augue, sit amet
              vestibulum nunc felis vel metus. Duis dolor nulla, pellentesque
              non ultrices ut, convallis eu felis. Duis luctus tempor arcu,
              vitae elementum massa porta non. Morbi aliquet, neque ut volutpat
              sodales, dui enim facilisis enim, ut dictum lacus neque in urna.
              Nam metus elit, ullamcorper pretium nisi at, aliquet gravida
              lectus. Nullam id lectus pellentesque, suscipit dolor eget,
              consequat velit. Pellentesque finibus commodo nisl, id interdum
              leo. Maecenas aliquam felis justo, ut sagittis nunc maximus ut.
            </p>
          </div>
    <div class="text-center pt-8"><p class="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded">See Demo</p></div>

        </div>
      </section>


      <section class="py-20">

</section>
    </div>
    </body>
  );
};

export default project;
