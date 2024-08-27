async function getTrendingMoviesPreview() {
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    const data = await res.json();

    const movies = data.results;

    movies.forEach(movie => {

        const trendingPreviewMovieList = document.querySelector('#trendingPreview .trendingPreview-movieList');
        
        const movieContainer = document.createElement('div');
        movieContainer.classList = 'movie-container';
        
        const img = document.createElement('img');
        img.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);
        img.setAttribute('alt', movie.title);
        img.classList = 'movie-img';
        
        
        movieContainer.append(img);
        trendingPreviewMovieList.append(movieContainer);
    });
}

async function getCategoriesPreview() {
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY + '&language=es');
    const data = await res.json();

    const categories = data.genres;

    categories.forEach(category => {
        const categoriesPreviewList = document.querySelector('#categoriesPreview .categoriesPreview-list');

        const categoryContainer = document.createElement('div');
        categoryContainer.classList = 'category-container';

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList = 'category-title';
        categoryTitle.setAttribute('id','id' + category.id);
        
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.append(categoryTitleText);
        categoryContainer.append(categoryTitle);
        categoriesPreviewList.append(categoryContainer);
    });
}

getTrendingMoviesPreview(); 
getCategoriesPreview();