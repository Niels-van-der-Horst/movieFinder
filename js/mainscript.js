//let x = document.getElementById("moviecover");

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

}
    

let filter = document.querySelectorAll(".filterButton");
    for (let index = 0; index < filter.length; index++) {
        filter[index].addEventListener("click", function(e) {
            let filterVal = this.value;
            filterMovies(filterVal);
           
        });

    }



 function filterMovies(filter) {


    switch (filter) {
        case 'latest':
            console.log('click');
            break;
        case 'avenger-movies':
            // colorBG('r');
            break;
        case 'x-men-movies':
            colorBG('o');
            break;
        case 'princess-movies':
            colorBG('p');
            break;
        case 'Batman-movies':
            colorBG('h');
            break;
        default:
            console.log("Geen Resultaat");    
    }

};