

let x = document.getElementById("moviecover");

//ul.setAttribute('id', 'movieList');
for (let index = 0; index < movies.length; index++) {
    const innerDiv = document.createElement('div');
    //innerDiv.setAttribute('id', 'innercontainer'+index);
    innerDiv.id='innercontainer'+index;
    const ul = document.createElement ('ul');
    const li = document.createElement('li');
    var img = document.createElement('img');
    img.src=movies[index].poster;
    document.body.appendChild(img);
    //li.innerHTML= movies[index].poster;
    ul.appendChild(li);
    innerDiv.appendChild(ul);
    document.body.appendChild(innerDiv);

    
}




    