arrowBtn.addEventListener('click', () => {
    location.hash = 'homePage';
});

searchFormBtn.addEventListener('click', () => {
    location.hash = 'search=';
});

trendingBtn.addEventListener('click', () => {
    location.hash = 'trends';
});

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {

    location.hash.startsWith('#trends')     ? 
    trendsPage()    :
    location.hash.startsWith('#search=')    ?
    searchPage()    :
    location.hash.startsWith('#category=')  ?
    categoryPage()  :
    location.hash.startsWith('#movie=')     ?
    moviePage()     :
    homePage();
    
};

function homePage() {
    
    headerContainer.classList.remove('header-container--long');
    headerContainer.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewContainer.classList.remove('inactive');
    genericListContainer.classList.add('inactive');
    movieDetailContainer.classList.add('inactive');

    getTrendingMoviesPreview(); 
    getCategoriesPreview(); 
};

function trendsPage() {
    headerContainer.classList.remove('header-container--long');
    headerContainer.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewContainer.classList.add('inactive');
    genericListContainer.classList.remove('inactive');
    movieDetailContainer.classList.add('inactive');
};

function searchPage() {
    headerContainer.classList.remove('header-container--long');
    headerContainer.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewContainer.classList.add('inactive');
    genericListContainer.classList.remove('inactive');
    movieDetailContainer.classList.add('inactive');
};

function moviePage() {
    headerContainer.classList.add('header-container--long');
    //headerContainer.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewContainer.classList.add('inactive');
    genericListContainer.classList.add('inactive');
    movieDetailContainer.classList.remove('inactive');
};

function categoryPage() {
    headerContainer.classList.remove('header-container--long');
    headerContainer.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewContainer.classList.add('inactive');
    genericListContainer.classList.remove('inactive');
    movieDetailContainer.classList.add('inactive');
};