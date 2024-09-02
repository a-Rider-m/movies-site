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
    
}

function trendsPage() {
    console.log('Trends!!!');
};

function searchPage() {
    console.log('Vista de Busqueda');
};

function moviePage() {
    console.log('Movie');
};

function categoryPage() {
    console.log('Categories');
};

function homePage() {
    console.log('Home')
    getTrendingMoviesPreview(); 
    getCategoriesPreview(); 
};