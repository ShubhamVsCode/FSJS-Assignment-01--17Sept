const lists = document.querySelectorAll(".as-imagegrid-item")
const resultArray = []
lists.forEach((listItem)=>{
    const result = listItem.innerText.replace("Support", "")

    console.log(result)
})
