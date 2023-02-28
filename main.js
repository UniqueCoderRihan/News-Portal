const fetchCategories=()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then((res) =>res.json())
    .then((data) => showCategories(data.data))
};
const showCategories = data =>{
    console.log(data);
    const categoriesConatiner = document.getElementById('showCategories');
    data.news_category.forEach(singleCategory =>{
        const linkContainer = document.createElement('p');
        linkContainer.innerHTML =`
        <a class="nav-link" href="#">${singleCategory.category_name}</a>
        `
        categoriesConatiner.appendChild(linkContainer)
    })
}