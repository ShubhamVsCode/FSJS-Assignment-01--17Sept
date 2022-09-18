// 1
document.querySelector(".side-bar .crayons-subtitle-2").innerHTML = "iNeuron"
document.querySelector(".side-bar p").innerHTML = "i write code"

// 2
const lists = document.querySelectorAll(".as-imagegrid-item")
const resultArray = []
lists.forEach((listItem)=>{
    const result = listItem.innerText.replace("Support", "")

    console.log(result)
})

// 3
const faq = document.querySelector(".accordion-homepage")

const section = document.createElement("section")
section.classList.add("parent")

const h3 = document.createElement("h3")
h3.innerText = "My New FAQ"

faq.appendChild(section)
section.appendChild(h3)

// 4
document.querySelector(".customer-support").firstElementChild.innerText = "+91 6565656565"

// 5
document.querySelector('.feature-column-carousel__item .feature-column-carousel__content a').innerText = "Checkout"

// 6
const search = document.querySelector(".searchinput___zXLAR")
search.addEventListener( "mouseover" ,()=> search.style.backgroundColor = "Red"  )

// 7
document.querySelector('#hp-search-input').value = "CSS selector"
document.querySelector('.homepage-hero-search .search-button').click()

// 8
const languages = document.querySelectorAll('#SIvCob a')
languages.forEach( (a, i)=> i%2==0 && a.remove())

// 9
document.querySelector(".display-heading-1").style.fontFamily = "monospace"
document.querySelector(".display-heading-1").style.backgroundColor = "orange"
document.querySelector(".display-heading-1").style.color = "red"

// 10
const btn = document.querySelector(".btn-cta-big .login-btn-text")
btn.addEventListener("mouseover", () => btn.style.backgroundColor = "red" )

// 11



// 12
document.querySelector('.js-repos-container .btn').style.backgroundColor = "blue"

// 13
document.querySelector('.fl-heading-text').innerHTML = "JS BOOTCAMP"

// 14
document.querySelector('.HotDealsAll__Heading__2fIbe').style.fontSize = "80px"

// 15
document.querySelector('.ps-title').style.textAlign = "right"

// 16
document.querySelector('.section-title_title__VEDfK').innerHTML = "Start With Scratch"

// 17
document.querySelector('.buy').innerHTML = new Date()

// 18
document.querySelector('.p-footer').style.backgroundColor = "Orange"

// 19
document.querySelector('.logo').src

// 20
document.querySelector('.desc').style.color = "Orange"



