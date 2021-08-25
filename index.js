async function getCatergories(){
    let response = await fetch("https://jservice.io/api/categories?count=4&offset=30")
    let data = response.json()
    return data
}