const fetchCategories = ()=>{
  fetch('https://openapi.programming-hero.com/api/news/categories')
  .then(res=>res.json())
  .then(data=>showCategories(data.data))
}

const showCategories = (data)=>{
  // console.log(data);
  const categoriesContainer = document.getElementById('categories-container')
  data.news_category.forEach(singleCategory => {
    categoriesContainer.innerHTML+=`<a class="nav-link" href="#" onclick="fetchCategoriesAllNews('${singleCategory.category_id}','${singleCategory.category_name}')">${singleCategory.category_name}</a>`
  });
}
// fetch the all available News
const fetchCategoriesAllNews = (category_id,category_name) =>{
  // console.log(category_id,category_name);
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
  fetch(url).then(res=>res.json()).then(data=>showAllNews(data.data,category_name))
}

const showAllNews = (data,category_name)=>{
  console.log(data,category_name);
  document.getElementById('news_count').innerText = data.length;
  document.getElementById('catagory_name').innerText = category_name;
}