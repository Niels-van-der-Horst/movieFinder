// Creating the html elements for the movie-posters
createPosterHtml();
function createPosterHtml() {
    for (let index = 0; index < movies.length; index++) {
        const innerDiv = document.createElement('div')
        innerDiv.id='innercontainer-'+index;
        innerDiv.classList.add("innerDiv");
        const ul = document.createElement ('ul');
        const li = document.createElement('li');
        let img = document.createElement('img');
        img.src=movies[index].poster;
        li.appendChild(img);
        ul.appendChild(li);
    
        innerDiv.appendChild(ul);
        document.body.appendChild(innerDiv);
    
        const wrapper = document.getElementById("moviecover");
        wrapper.appendChild(innerDiv);
        // Adding a tag to the post element
        
        let linkWrapper = document.createElement('a');
        const imdbBaseUrl = 'https://www.imdb.com/title/';
        linkWrapper.href =  imdbBaseUrl + movies[index].imdbID;
        linkWrapper.target = '_blank';
        innerDiv.parentNode.insertBefore(linkWrapper, innerDiv);
        linkWrapper.appendChild(innerDiv);
    
    }
};

let filterAll = document.querySelectorAll(".filterButton");

    for (let index = 0; index < filterAll.length; index++) {
        filterAll[index].addEventListener("change", function() {
            let filterValue = this.value;
           filterMovies(filterValue);
           console.log('change', filterValue);
           
        });

    }

function filterMovies(filterValue) {
    
    switch (filterValue) {
        case 'latest':
            filterBasedMovies(filterValue, 'number');

            break;
        case 'avenger':

            filterBasedMovies(filterValue, 'string');
            break;
        case 'x-men':
            filterBasedMovies(filterValue, 'string');

            break;
        case 'princess':
            filterBasedMovies(filterValue, 'string');

            break;
        case 'batman':
            filterBasedMovies(filterValue, 'string');

            break;
        case 'reset':
        removeHtml();
        createPosterHtml();
        break;
        default:
        //@todo;
 
    }

};

function filterBasedMovies(filterValue, type) {
    let filteredMovies = null;
    const newMovies = [];
    if (type === 'number') {
        // Filter movies object
        filteredMovies = movies.filter((item) => item.year >= 2014);
    } else {
        filteredMovies = movies.filter((item) => item.title.toLowerCase().includes(filterValue));
       
    }

    // Creating the html elements for the movie-posters
    for (let index = 0; index < filteredMovies.length; index++) {
      
        const innerDiv = document.createElement('div')
        innerDiv.id='innercontainer-'+index;
        innerDiv.classList.add("innerDiv");
        const ul = document.createElement ('ul');
        const li = document.createElement('li');
        let img = document.createElement('img');
        img.src=filteredMovies[index].poster;
        li.appendChild(img);
        ul.appendChild(li);
        innerDiv.appendChild(ul);
        document.body.appendChild(innerDiv);

        // Adding a tag to the post element
        let linkWrapper = document.createElement('a');
        const imdbBaseUrl = 'https://www.imdb.com/title/';
        linkWrapper.href =  imdbBaseUrl + movies[index].imdbID;
        linkWrapper.target = '_blank';
        innerDiv.parentNode.insertBefore(linkWrapper, innerDiv);
        linkWrapper.appendChild(innerDiv);

        // Push the filterd poster to the new movies array
        newMovies.push(innerDiv);

    }
        // Replace old movies with the filterd ones 
        replaceHtml(newMovies);
    
}

function replaceHtml(newPosterArray) {
    removeHtml();
    // Add the filterd movies
    newPosterArray.forEach(movie => {
        const wrapper = document.getElementById("moviecover");
        wrapper.appendChild(movie);
    })

}
function removeHtml() {
    // Remove old movies
    let oldmovies = document.querySelectorAll(".innerDiv");
    oldmovies.forEach(movie => {
        movie.remove();
    })
}
