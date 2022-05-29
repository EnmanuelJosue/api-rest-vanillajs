window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({location});

    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if (location.hash.startsWith('#search=')){
        searchPage();
    }else if (location.hash.startsWith('#movie=')){
        movieDetailsPage();
    }else if (location.hash.startsWith('#category=')){
        categoriesPage();
    } else {
        homePage();
    }
}

function homePage () {
    console.log('home');
    getTrendingMovies();
    getCategoriesPreview();
}

function categoriesPage () {
    console.log('categories');
}

function movieDetailsPage () {
    console.log('movies');
}

function searchPage () {
    console.log('search');
}
function trendsPage () {
    console.log('trends');
}