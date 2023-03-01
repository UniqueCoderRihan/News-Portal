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
  const {image_url,title,details,author,total_view,_id} = singleNews;
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
                  <p>${author.name?author.name:'Unknown User'}</p>
                  <p>${author.published_date}</p>
              </div>
            </div>
            <div class="d-flex align-items-center">
            <i class="fas fa-eye"></i>
              <p class="p-0 m-0">Total Views: ${total_view?total_view:"Not Available"}</p>
            </div>
            <div class=" p-4">
            <button class="btn btn-primary" onclick="showDetailsNews('${_id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-arrow-right"></i></button>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    `
  })
}
// show details using news Id 
const showDetailsNews = news_id =>{
  let url = `https://openapi.programming-hero.com/api/news/${news_id}`
  fetch(url).then(res=>res.json())
  .then(data=>displayShowDetails(data.data))
}

// displayShow Details News
const displayShowDetails = newsDetails=>{
  const modalBodyContainer = document.getElementById('modalBody');
  console.log(newsDetails[0]);
  const {title,author,details,thumbnail_url,others_info} = newsDetails[0];
  // console.log(title);
  modalBodyContainer.innerHTML =`
  <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${title}<span class="badge text-bg-danger">${others_info.is_trending?" Tranding":""}</span></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src="${thumbnail_url}" class="img-fluid"/>
        <p>${details}</p>
        <p>Author: ${author.name?author.name:'Unknown User'}</p>
        <p>Published Date: ${author.published_date}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Done</button>
      </div>
    </div>
  `
}