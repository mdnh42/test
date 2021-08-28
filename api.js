

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => displyaData(data));
  

}

function displyaData(data){
    const ul = document.getElementById('users');
    for(const user of data){
        console.log(data);
        const li = document.createElement('li');
        li.innerText = `
        ID: ${user.id}: 
        Name: ${user.name}.
        User Name: ${user.username}.
        Gmail: ${user.email}.
        Address: Street- ${user.address.street}, 
        Suite: ${user.address.suite}, 
        City: ${user.address.city},
        ZipCode: ${user.address.zipcode},
        Phone: ${user.phone},
        `;
        ul.appendChild(li);

    }
}