//let x = document.getElementById("moviecover");

for (let index = 0; index < movies.length; index++) {
    const innerDiv = document.createElement('div');
    innerDiv.id='innercontainer'+index;
    innerDiv.classList.add("innerDiv");
    const ul = document.createElement ('ul');
    const li = document.createElement('li');
    var img = document.createElement('img');
    img.src=movies[index].poster;
    li.appendChild(img);
    ul.appendChild(li);

    innerDiv.appendChild(ul);
   
    document.body.appendChild(innerDiv);
}

function filtermovies() {

    let x = category1, category2;


    switch (x) {
        case 'latest-movies':
            // colorBG('g');
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

};