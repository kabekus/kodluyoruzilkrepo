let userForm = document.querySelector("#userForm")
userForm.addEventListener('submit', formUser);

const alert=document.querySelector("#alert")

const alertFunction= (title, messages,color='warning') => `<div class="alert alert-${color} alert-dismissible fade show" role="alert">
<strong> ${title} </strong> ${messages}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>` 

function formUser(event){
	event.preventDefault();
	const userName=document.querySelector("#username")
	const score = document.querySelector("#score")
	if(userName.value, score.value ){
	   adLi(userName.value, score.value )
	   userName.value="",
	   score.value=""
	   alert.innerHTML=alertFunction("Başarılı!" , "Bilgiler Doğru" , "primary")
	}else{
       alert.innerHTML=alertFunction("Hata!" , "Eksik Bilgi Girdiniz!" , "danger");
	}
}

let userList = document.querySelector("#userList")

function adLi(username, score){
    let li = document.createElement('li')
	li.innerHTML= `${username} <span class="badge bg-primary rounded-pill"> ${score} </span>`;
	li.classList.add('list-group-item' , 'd-flex',  'justify-content-between', 'align-items-center')
	userList.append(li);
}