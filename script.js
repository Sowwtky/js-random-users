const addBtn = document.getElementById('add');
addBtn.addEventListener('click', addUser);

function addUser(){
    console.log('ciao');
    axios.get('https://randomuser.me/api')
    .then(function (response){
        console.log(response);
        const userImg = response.data.results[0].picture.medium;
        console.log(userImg);
        const userName = response.data.results[0].name.first;
        console.log(userName);
        const userSurname = response.data.results[0].name.last;
        console.log(userSurname);

        createUser(userImg, userName, userSurname);
    }) 
    .catch(function (error){
        console.log(error);
    })
    
}

function createUser(url, name, surname){
    let image = document.createElement('img');
    image.src = url;
    image.className = "card-img-top";

    let cardTitle = document.createElement('h5');
    cardTitle.className = "card-title";
    cardTitle.textContent = name + " " + surname;
    let cardBody = document.createElement('div');
    cardBody.className = "card-body";
    cardBody.appendChild(cardTitle);
    


    let card = document.createElement('div');
    card.className="card"
    card.style="width: 18rem;"
    card.appendChild(image);
    card.appendChild(cardBody);


    let cardRow = document.createElement('div');
    cardRow.className = "col col-4 mt-3";
    cardRow.appendChild(card);

    let cardContainer = document.getElementById('card');
    cardContainer.className="container d-flex flex-wrap"
    cardContainer.appendChild(cardRow);

}