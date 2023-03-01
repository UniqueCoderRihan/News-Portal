const fetchCategories=()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then((res) =>res.json())
    .then((data) =>showCategories(data.data.news_category))
}
const showCategories = data =>{
    const categoriesContainer = document.getElementById('categories-container');
    for(const categori of data){
        console.log(categori)
        const categoriesTag = document.createElement('p');
        categoriesTag.innerHTML =`<a class="nav-link" href="#">${categori.category_name}</a>`
        categoriesContainer.appendChild(categoriesTag)
    }

}
fetchCategories()