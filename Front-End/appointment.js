

const userName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('number');
const myForm = document.getElementById('my-form');
const userList = document.getElementById('list');

myForm.addEventListener('submit', fetchData);

async function fetchData(e) {
    e.preventDefault();
    const userDetails = {
        name: userName.value,
        email: email.value,
        phone: phone.value
    };

    try {
        const response = await axios.post('http://localhost:4000/user/data', userDetails);
        const userData = response.data;
        createLiElement(userData);
        
    } catch (err) {
        console.error(err);
    }
}

function createLiElement(userData){
    console.log(userData);
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`Name: ${userData.name}, Email: ${userData.email}, Phone: ${userData.phone}`));
    var delbtn = document.createElement('button');
    delbtn.type='button'
    delbtn.className ='delete';
    delbtn.id = 'deleteButton'
    delbtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(delbtn); 
    var editBtn = document.createElement('button')
    editBtn.type='button'
    editBtn.className ='edit';
    editBtn.id = 'editButton'
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn); 
       
    userList.appendChild(li);
    
    userName.value = '';
    email.value = '';
    phone.value = '';

    delbtn.onclick = async (e) => {
        const target = e.target.parentElement;
        console.log(target);
        try{
        const id = userData.id

        const user = await axios.delete(`http://localhost:4000/user/delete-user/${id}`)
        userList.removeChild(target)
        }catch(e){
            console.log(e)
        }
    }
    editBtn.onclick = async(e)=>{
        const target = e.target.parentElement;
        try{
            userName.value = userData.name;
            email.value = userData.email;
            phone.value =  userData.phone;

            const id = userData.id;

            const user = await axios.delete(`http://localhost:4000/user/delete-user/${id}`)
            userList.removeChild(target)
        } catch(error){
            console.log(error)
        }
    }
}


document.addEventListener('DOMContentLoaded', loadServerDetais);
async function loadServerDetais() {
    try{
        const dbData = await axios.get('http://localhost:4000/user/user-data')
        const usersData =dbData.data;
        if(usersData.length<1){
            console.log("No users");
        }

        for(let i =0;i<usersData.length;i++){
            createLiElement(usersData[i]);
        }

    }catch(err){
        console.log(err);
    }
}

