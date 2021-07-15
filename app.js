const users = ["Ayşe","MehMet","TuğCE"]
const userObj=users.map(item=>(
    {userName:item,shortName:`${item[0]}.`,newName:`${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}
  
  )
  )
  console.log(userObj);

//Array Map metodu:
//parametre ile kendisine gönderilen dizinin her bir elemanı için ayrı ayrı çalışır ve belirlenen işleme tabi tutup, yeni bir dizi meydana getirir.