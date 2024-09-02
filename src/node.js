const $ = (id) => document.querySelector(id);

//List & Containers
const searForm = $('#searchForm');
const trendingMoviesPreviewList = $('.trendingPreview-movieList');
const categoriesPreviewList = $('.categoriesPreview-list');
const movieDetailCategoriesList = $('#movieDetail .categories-list');
const relatedMoviesContainer = $('.relatedMovies-scrollContainer');

// Elements
const headerTitle = $('.header-title');
const arrowBtn = $('.header-arrow');
const headerCategoryTitle = $('.header-title--categoryView');

const searchFormInput = $('#searchForm input');
const searchFormBtn = $('#searchBtn');

const trendingBtn = $('.trendingPreview-btn');

const movieDetailTitle = $('.movieDetail-title');
const movieDetailDescription = $('.movieDetail-description');
const movieDetailScore = $('.movieDetail-score');


//Sections
const headerContainer = $('#header');
const trendingPreviewSection = $('#trendingPreview');
const categoriesPreviewContainer = $('#categoriesPreview');
const genericListContainer = $('#genericList');
const movieDetailContainer = $('#movieDetail');

//Voy a crear una funcion que agrege clases y otra que elimine clases