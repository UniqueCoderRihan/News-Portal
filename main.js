const fetchCategories = ()=>{
  fetch('https://openapi.programming-hero.com/api/news/categories')
  .then(res=>res.json())
  .then(data=>showCategories(data.data))
}

const showCategories = (data)=>{
  // console.log(data);
  const categoriesContainer = document.getElementById('categories-container')
  data.news_category.forEach(singleCategory => {
    categoriesContainer.innerHTML+=`<a class=" btn btn-outline-secondary" href="#" onclick="fetchCategoriesAllNews('${singleCategory.category_id}','${singleCategory.category_name}')">${singleCategory.category_name}</a>`
  });
}
// fetch the all available News
const fetchCategoriesAllNews = (category_id,category_name) =>{
  // console.log(category_id,category_name);
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
  fetch(url).then(res=>res.json()).then(data=>showAllNews(data.data,category_name))
}

const showAllNews = (data,category_name)=>{
  // console.log(data,category_name);
  document.getElementById('news_count').innerText = data.length;
  document.getElementById('catagory_name').innerText = category_name;
  const newsContainer = document.getElementById('all-news')
  newsContainer.innerHTML =``
  data.forEach(singleNews => {
    
  // destracturing
  const {image_url,title,details,author,total_view} = singleNews;
    newsContainer.innerHTML += `
    <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${image_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8 d-flex flex-column">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${details.slice(0,200)} See More....</p>
            </div>
            <div class="card-footer border-0 bg-body d-flex justify-content-between">
            <div class="d-flex gap-2">
            <img src="${author.img}" class="img-fluid rounded-circle" height='40' width='40'>
              <div>
                  <p>${author.name}</p>
                  <p>${author.published_date}</p>
              </div>
            </div>
            <div class="d-flex align-items-center">
            <i class="fas fa-eye"></i>
              <p class="p-0 m-0">Total Views: ${total_view}</p>
            </div>
            <div class="btn btn-primary p-4">
            <i class="fas fa-arrow-right" ></i>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    `
  })
}