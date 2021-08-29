async function getCategories(count, offset){
    let response = await fetch(`https://jservice.io/api/categories?count=${count}&offset=${offset}`)
    let data = response.json()
    return data
}

function getClue(clueValue) {
    return `<div class="my-category-clue" onClick=sel(this) style="grid-row-start: ${clueValue / 100 + 1}">
    $${clueValue}</div>`
}

function getCategoryHtml(category) {
    return `
        <div class="my-category-title">${category.title}</div>
        ${getClue(100)}
        ${getClue(200)}
        ${getClue(300)}
        ${getClue(400)}
    `
}

getCategories(5).then(categories => {
    console.log(categories)
    document.body.innerHTML = `<div id="board" class="board">
        ${categories.map(getCategoryHtml).join('')}
    </div>`
})


