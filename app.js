//tanımlamalar
const ulDom=document.querySelector("#list");
let yapilacaklarList =localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
//liste elemanlarının getirilmesi işlemi
  for(let i=0;i<yapilacaklarList.length;i++){
    let liCreator=document.createElement('li');
    liCreator.innerHTML=`${i+1} :  ${yapilacaklarList[i]}<span onclick="deleteElement()" class="close">×</span>`;
    ulDom.append(liCreator);
  }
  function deleteElement(list){
    let deleteDom=document.querySelector("#deleteItem").value;
    yapilacaklarList.splice(deleteDom-1,1);
    console.log("silindi");
    localStorage.setItem("items",JSON.stringify(yapilacaklarList));
  }

ulDom.addEventListener("click", function (list) {
  if (list.target.tagName === "LI") {
    list.target.classList.toggle("checked");
  }
},
false
);

//Listeye item eklemek.
function addItemList(inputDom){
  const liDom=document.createElement('li');
  liDom.innerHTML= `${inputDom}`;
 
  ulDom.append(liDom);
  yapilacaklarList.push(inputDom);
  console.log(yapilacaklarList);
  localStorage.setItem("items",JSON.stringify(yapilacaklarList));

}

function newElement()
{
  const inputDom=document.querySelector("#task").value;
  if(inputDom){
    addItemList(inputDom);
    $(".success").toast("show");
  }
  else{
    $(".error").toast("show")
  }
}