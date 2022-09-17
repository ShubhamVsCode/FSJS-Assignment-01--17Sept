const faq = document.querySelector(".accordion-homepage")

const section = document.createElement("section")
section.classList.add("parent")

const h3 = document.createElement("h3")
h3.innerText = "My New FAQ"

faq.appendChild(section)
section.appendChild(h3)