const fetchCategories = ()=>{
  fetch('https://openapi.programming-hero.com/api/news/categories')
  .then(res=>res.json())
  .then(data=>showCategories(data.data))
}

const showCategories = (data)=>{
  // console.log(data);
  const categoriesContainer = document.getElementById('categories-container')
  data.news_category.forEach(singleCategory => {
    categoriesContainer.innerHTML+=`<a class="nav-link" href="#">${singleCategory.category_name}</a>`
  });
}