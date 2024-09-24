import { nav, faqs, homeBlog, setMenuName } from "./common.js";
const navs = document.querySelector(".header2");
const section = document.querySelector(".section");
const FAQS = [
  {
    title: "What is the Document Object Model (DOM)?",
    discription: ` The Document Object Model (DOM) is a programming 
    interface for interacting with HTML, XML, and other structured 
    documents. It represents a document as a tree structure, 
    where each node represents an element, attribute, or text content. 
    By manipulating the DOM, you can dynamically change the content, style,
     and structure of a document.
         `,
  },
  {
    title: "How do you select an element from the DOM?",
    discription: ` you can use various methods based on the unique 
    identifier or characteristics of the element. Use the getElementById() or querySelector()
    method to select an element based on its unique ID attribute.
    Use the getElementsByClassName(), getElementsByTagName(), querySelectorAll() method to select all elements with a specific class name.
         `,
  },
  {
    title:
      "What is event delegation in the context of the DOM, and why is it useful?",
    discription: `Event Delegation in the DOM refers to the practice of 
    attaching an event listener to a parent element, rather than to each
     individual child element. This allows you to efficiently handle events 
     for multiple elements within a single listener. 
     we use event delegation for,
     1.Improved Performance
     2.Dynamic Content
     3.Code Reusability
     4.Simplified Event Handling
         `,
  },
  {
    title:
      "How do you manipulate an element's attributes and styles using the DOM?",
    discription: ` To manipulate an element's attributes and styles using the DOM,
     you can use methods like getAttribute(), setAttribute(), and removeAttribute()
      to manage attributes, and the style property to access and modify inline styles. 
      For computed styles, use getComputedStyle(). This allows you to dynamically change
       the appearance and behavior of elements within your web pages.
         `,
  },
];
navs.innerHTML = nav();
const menu = document.querySelector(".menu");
setMenuName({ menu: menu, t: "Home" });
for (const item of FAQS) {
  section.innerHTML += faqs(item);
}
const plus = document.querySelectorAll(".plus");
const minas = document.querySelectorAll(".minas");
const dis = document.querySelectorAll(".dis");
const commonBtn = document.querySelectorAll(".common-btn");

for (let i = 0; i < FAQS.length; i++) {
  if (i === 0) {
    plus[i].classList.add("hidden");
  } else {
    minas[i].classList.add("hidden");
    dis[i].classList.add("hidden");
  }
}

for (const plus1 of commonBtn) {
  plus1.addEventListener("click", () => {
    if (
      !plus1.firstElementChild.lastElementChild.classList.contains("hidden")
    ) {
      plus1.firstElementChild.lastElementChild.classList.toggle("hidden");
      plus1.firstElementChild.lastElementChild.previousElementSibling.classList.toggle(
        "hidden"
      );
      plus1.lastElementChild.classList.toggle("hidden");
      return;
    }
    commonBtn.forEach((item) => {
      if (
        !item.firstElementChild.lastElementChild.classList.contains("hidden")
      ) {
        item.firstElementChild.lastElementChild.classList.toggle("hidden");
        item.firstElementChild.lastElementChild.previousElementSibling.classList.toggle(
          "hidden"
        );
        item.lastElementChild.classList.toggle("hidden");
      }
    });
    plus1.firstElementChild.lastElementChild.classList.toggle("hidden");
    plus1.firstElementChild.lastElementChild.previousElementSibling.classList.toggle(
      "hidden"
    );
    plus1.lastElementChild.classList.toggle("hidden");
  });
}

menu.addEventListener("click", function () {
  homeBlog(menu);
});
