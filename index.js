async function getCategories(){
    let response = await fetch("https://jservice.io/api/categories?count=4&offset=30")
    let data = response.json()
    return data
}

getCategories().then(categories => {
    console.log(categories)
    categories.map(category => {
     let div = document.createElement("div")
       div.textContent = category.title
       let board = document.getElementById("board")
       board.append(div)

    })
})

