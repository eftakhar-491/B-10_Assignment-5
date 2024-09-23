export const nav = function (data) {
  if (data === "home") {
    return `
          <nav
              class="sticky top-0 flex justify-between items-center bg-[#fff9ea72] h-20 lg:px-[10%] px-[2%] backdrop-blur-xl"
            >
              <button  class="menu w-24 h-11 bg-bgGreen rounded-lg font-bold text-dark">
                Blog
              </button>
              <div class="flex flex-col lg:flex-row items-center md:gap-4">
                <img class="w-8" src="./assets/logo.png" alt="logo" />
                <h2 class="text-sm md:text-lg font-bold text-dark">
                  Donate Bangladesh
                </h2>
              </div>
              <div class="flex items-center gap-2">
                <img src="./assets/coin.png" alt="coin-Img" />
                <p class="text-lightDark">
                  <span id="account-balance">5500</span>BDT
                </p>
              </div>
            </nav>
            <section class="mt-5 flex justify-center gap-4 pb-4">
              <button
                class="donate-page-btn w-24 h-11 rounded-lg bg-bgGreen font-bold text-dark"
              >
                Donate
              </button>
              <button
                class="history-page-btn w-24 h-11 rounded-lg text-lightDark border-2"
              >
                History
              </button>
            </section>
          `;
  } else {
    return `
      <nav
              class="sticky top-0 flex justify-between items-center bg-[#fff9ea72] h-20 lg:px-[10%] px-[2%] backdrop-blur-xl"
            >
              <button class="menu w-24 h-11 bg-bgGreen rounded-lg font-bold text-dark">
                Blog
              </button>
              <div class="flex flex-col lg:flex-row items-center md:gap-4">
                <img class="w-8" src="./assets/logo.png" alt="logo" />
                <h2 class="text-sm md:text-lg font-bold text-dark">
                  Donate Bangladesh
                </h2>
              </div>
              <div class="flex items-center gap-2">
                <img src="./assets/coin.png" alt="coin-Img" />
                <p class="text-lightDark">
                  <span id="account-balance">5500</span>BDT
                </p>
              </div>
            </nav>
    `;
  }
};
export const faqs = function (data) {
  return `
       <div class="common-btn box border-2 p-4  mb-4 rounded-xl">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-bold text-dark">
             ${data.title}
            </h2>
            <div class="plus">
            <svg
              
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              fill="none"
              viewBox="0 0 30 31"
            >
              <path
                fill="#AD28EB"
                d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
              />
            </svg></div>
           <div class="minas"><svg
            
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              fill="none"
              viewBox="0 0 30 31"
            >
              <path
                fill="#301534"
                d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
              />
            </svg></div>
          </div>
           <p class=" dis text-sm pr-16 text-lightDark font-semibold">
          ${data.discription}</p>
        </div>
      `;
};
export const homeBlog = function (data) {
  console.log(data);
  if (
    window.location.pathname === "/B-10_Assignment-5/index.html" ||
    window.location.pathname === "/B-10_Assignment-5/"
  ) {
    window.location.href = "/B-10_Assignment-5/blog.html";
  } else if (window.location.pathname === "/B-10_Assignment-5/blog.html") {
    window.location.href = "/B-10_Assignment-5/index.html";
  }
};
export const setMenuName = function (data) {
  document.body.onload = function () {
    data.menu.innerText = data.t;
  };
};
