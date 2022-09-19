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
    

let filterAll = document.querySelectorAll("filterButton");
// console.log(typeof filter);
    for (let index = 0; index < filterAll.length; index++) {
        
        
        
        filterAll[index].addEventListener("click", function(e) {
            let filterVal = this.value;
           filterMovies(filterVal);
           
        });

    }



 
function filterMovies(e) {

    if (e=="latest") 
    {
        
    }



    
    // switch (filter) {
    //     case 'latest':
    //         console.log('click');
    //         break;
    //     case 'avengermovies':
    //         // colorBG('r');
    //         break;
    //     case 'x-menmovies':
    //         colorBG('o');
    //         break;
    //     case 'princessmovies':
    //         colorBG('p');
    //         break;
    //     case 'Batmanmovies':
    //         colorBG('h');
    //         break;
    //     default:
    //         console.log("Geen Resultaat");    
    // }

};
