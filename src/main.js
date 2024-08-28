//En esta aplicacion se utiliza axios, que hace minimalista el consumo de API REST
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    }
});

async function getTrendingMoviesPreview() {
    const { data } = await api('trending/movie/day');

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
    const { data } = await api('genre/movie/list?language=es');

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