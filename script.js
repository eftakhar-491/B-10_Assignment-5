const navs = document.querySelector("header");
const donateBtn = document.querySelectorAll(".donate-btn");
const accountBalance = document.getElementById("account-balance");
const modal = document.querySelector(".modal");
const historySection = document.querySelector(".history-section");
const donateSection = document.querySelector(".donate-section");

const donatePageBtn = document.querySelector(".donate-page-btn");
const historyPageBtn = document.querySelector(".history-page-btn");
function historyAdd(amount, title) {
  const date = new Date();
  console.log(amount, title, date);
  return `
    <div class="text-dark p-5 border-2 rounded-xl mb-4">
          <h1 class="flex items-center gap-2 mb-4 font-bold text-xl">
            
            <p> <span> ${amount} </span> Taka is <span> ${title}</span></p>
          </h1>
          <p class="text-[16px] text-lightDark px-5 py-2 rounded-md bg-[rgba(23,23,23,0.09)]">
            Date :
            <span
              >${date.toString()}
            </span>
          </p>
        </div>
    `;
}
function nav() {
  return `
    <nav
        class="sticky top-0 flex justify-between items-center bg-[#fff9ea72] h-20 lg:px-[10%] px-[2%] backdrop-blur-xl"
      >
        <button class="w-24 h-11 bg-bgGreen rounded-lg font-bold text-dark">
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
}
navs.innerHTML += nav();
for (const btn of donateBtn) {
  btn.addEventListener("click", () => {
    const donateAmountUpdate =
      btn.parentElement.parentElement.firstElementChild.lastElementChild
        .firstElementChild;
    const donateAmount = btn.previousElementSibling.value;
    const title =
      btn.parentElement.parentElement.firstElementChild.nextElementSibling
        .innerText;
    if (
      isNaN(Number(donateAmount)) ||
      Number(donateAmount) < 0 ||
      donateAmount == ""
    ) {
      return alert("Invalid Donate Amount");
    }
    if (Number(accountBalance.innerText) < Number(donateAmount)) {
      return alert("your account have not sufficient balance");
    }
    donateAmountUpdate.innerText = BigInt(
      Number(donateAmountUpdate.innerText) + Number(donateAmount)
    );
    accountBalance.innerText = BigInt(
      Number(accountBalance.innerText) - Number(donateAmount)
    );
    modal.classList.toggle("hidden");
    modal.classList.toggle("flex");

    historySection.innerHTML += historyAdd(Number(donateAmount), title);
    btn.previousElementSibling.value = "";
    console.log(donateAmount, donateAmountUpdate, accountBalance);
  });
}
modal.addEventListener("click", () => {
  modal.classList.toggle("hidden");
  modal.classList.toggle("flex");
});
donatePageBtn.addEventListener("click", () => {
  historyPageBtn.classList.remove("bg-bgGreen", "font-bold", "text-dark");
  historyPageBtn.classList.add("text-lightDark", "border-2");
  donatePageBtn.classList.add("bg-bgGreen", "font-bold", "text-dark");
  donatePageBtn.classList.remove("text-lightDark", "border-2");
  historySection.classList.toggle("hidden");
  donateSection.classList.toggle("hidden");
});
historyPageBtn.addEventListener("click", () => {
  historyPageBtn.classList.add("bg-bgGreen", "font-bold", "text-dark");
  historyPageBtn.classList.remove("text-lightDark", "border-2");
  donatePageBtn.classList.remove("bg-bgGreen", "font-bold", "text-dark");
  donatePageBtn.classList.add("text-lightDark", "border-2");

  historySection.classList.toggle("hidden");
  donateSection.classList.toggle("hidden");
});
