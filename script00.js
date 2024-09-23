const FAQS = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    discription: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          aperiam accusamus laborum eaque necessitatibus, dolor harum rem
          inventore minima et atque, earum tenetur quia repudiandae similique
          cupiditate velit repellat id tempore qui? Adipisci officia architecto,
          sint ipsa itaque rem dolorum, molestias maiores, excepturi quidem
          expedita cum animi tenetur. Voluptatum, consectetur.
       `,
  },
  {
    title: "Is Frontend Mentor free?",
    discription: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          aperiam accusamus laborum eaque necessitatibus, dolor harum rem
          inventore minima et atque, earum tenetur quia repudiandae similique
          cupiditate velit repellat id tempore qui? Adipisci officia architecto,
          sint ipsa itaque rem dolorum, molestias maiores, excepturi quidem
          expedita cum animi tenetur. Voluptatum, consectetur.
       `,
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    discription: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          aperiam accusamus laborum eaque necessitatibus, dolor harum rem
          inventore minima et atque, earum tenetur quia repudiandae similique
          cupiditate velit repellat id tempore qui? Adipisci officia architecto,
          sint ipsa itaque rem dolorum, molestias maiores, excepturi quidem
          expedita cum animi tenetur. Voluptatum, consectetur.
       `,
  },
  {
    title: "How can I get help if i'm stuck on challenge?",
    discription: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          aperiam accusamus laborum eaque necessitatibus, dolor harum rem
          inventore minima et atque, earum tenetur quia repudiandae similique
          cupiditate velit repellat id tempore qui? Adipisci officia architecto,
          sint ipsa itaque rem dolorum, molestias maiores, excepturi quidem
          expedita cum animi tenetur. Voluptatum, consectetur.
       `,
  },
];
const section = document.querySelector(".section");
function faqs(data) {
  return `
     <div class="box border-b-2 pb-4 pt-4">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-bold text-DarkPurple">
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
         <p class=" dis text-[16px] text-GrayishPurple font-semibold">
        ${data.discription}</p>
      </div>
    `;
}
FAQS.forEach((item) => {
  section.innerHTML += faqs(item);
});
const box = document.querySelectorAll(".box");
const plus = document.querySelectorAll(".plus");
const minas = document.querySelectorAll(".minas");
const dis = document.querySelectorAll(".dis");

for (let i = 0; i < FAQS.length; i++) {
  if (i === 0) {
    plus[i].classList.add("hidden");
  } else {
    minas[i].classList.add("hidden");
    dis[i].classList.add("hidden");
  }
}

for (const plus1 of plus) {
  plus1.addEventListener("click", () => {
    minas.forEach((item) => {
      if (!item.classList.contains("hidden")) {
        item.classList.toggle("hidden");
        item.previousElementSibling.classList.toggle("hidden");
        item.parentElement.parentElement.lastElementChild.classList.toggle(
          "hidden"
        );
      }
    });

    plus1.classList.toggle("hidden");
    plus1.nextElementSibling.classList.toggle("hidden");
    plus1.parentElement.parentElement.lastElementChild.classList.toggle(
      "hidden"
    );
  });
}
for (const minas1 of minas) {
  minas1.addEventListener("click", () => {
    minas1.classList.toggle("hidden");
    minas1.previousElementSibling.classList.toggle("hidden");
    minas1.parentElement.parentElement.lastElementChild.classList.toggle(
      "hidden"
    );
  });
}
