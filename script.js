import { nav, homeBlog, setMenuName } from "./common.js";
const navs = document.querySelector(".header1");
const donateBtn = document.querySelectorAll(".donate-btn");
const modal = document.querySelector(".modal");
const historySection = document.querySelector(".history-section");
const donateSection = document.querySelector(".donate-section");
navs.innerHTML = nav("home");
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
const donatePageBtn = document.querySelector(".donate-page-btn");
const historyPageBtn = document.querySelector(".history-page-btn");
const accountBalance = document.getElementById("account-balance");
const menu = document.querySelector(".menu");

menu.addEventListener("click", function () {
  homeBlog(menu);
});
setMenuName({ menu: menu, t: "Blog" });
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
    donateAmountUpdate.innerText = (
      Number(donateAmountUpdate.innerText) + Number(donateAmount)
    ).toFixed(1);

    accountBalance.innerText = (
      Number(accountBalance.innerText) - Number(donateAmount)
    ).toFixed(1);
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
  if (!donatePageBtn.classList.contains("bg-bgGreen")) {
    historyPageBtn.classList.remove("bg-bgGreen", "font-bold", "text-dark");
    historyPageBtn.classList.add("text-lightDark", "border-2");
    donatePageBtn.classList.add("bg-bgGreen", "font-bold", "text-dark");
    donatePageBtn.classList.remove("text-lightDark", "border-2");
    historySection.classList.toggle("hidden");
    donateSection.classList.toggle("hidden");
  }
});
historyPageBtn.addEventListener("click", () => {
  if (!historyPageBtn.classList.contains("bg-bgGreen")) {
    historyPageBtn.classList.add("bg-bgGreen", "font-bold", "text-dark");
    historyPageBtn.classList.remove("text-lightDark", "border-2");
    donatePageBtn.classList.remove("bg-bgGreen", "font-bold", "text-dark");
    donatePageBtn.classList.add("text-lightDark", "border-2");

    historySection.classList.toggle("hidden");
    donateSection.classList.toggle("hidden");
  }
});
