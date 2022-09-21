


const submit = document.getElementById("submit-search");

submit.addEventListener("click", function(e) {
    e.preventDefault();
let searchInput = document.getElementById('search-input');
let value = searchInput.value

    // 2. check: if input exists and if input is larger than 0
    if (value && value.trim().length > 0){
        // 3. redefine 'value' to exclude white space and change input to all lowercase
            value = value.trim().toLowerCase();
            console.log('input is not empty', value);
            filterBasedMovies(value, 'string');
        // 4. return the results only if the value of the search is included in the person's name
        // we need to write code (a function for filtering through our data to include the search input value)
    } else {
        // 5. return nothing
        // input is invalid -- show an error message or show no results
        console.log('input is empty');
        return false;

    }
    
});
