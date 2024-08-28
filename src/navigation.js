window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    if(location.hash.startsWith('#trends')) {
        trendsPage();
    } else if(location.hash.startsWith('#search=')) {
        searchPage();
    } else if(location.hash.startsWith('#movie=')) {
        moviePage();
    } else if(location.hash.startsWith('#category=')) {
        categoryPage();
    } else {
        homePage();
    }
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