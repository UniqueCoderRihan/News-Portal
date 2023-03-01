const fetchCategories = ()=>{
  fetch('https://openapi.programming-hero.com/api/news/categories')
  .then(res=>res.json())
  .then(data=>showCategories(data.data))
}

const showCategories = (data)=>{
  // console.log(data);
  const categoriesContainer = document.getElementById('categories-container')
  data.news_category.forEach(singleCategory => {
    categoriesContainer.innerHTML+=`<a class="nav-link" href="#" onclick="fetchCategoriesAllNews('${singleCategory.category_id}')">${singleCategory.category_name}</a>`
  });
}
// fetch the all available News
const fetchCategoriesAllNews = category_id =>{
  // console.log(category_id);
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
  fetch(url).then(res=>res.json()).then(data=>console.log(data))
}