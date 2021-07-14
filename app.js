const urunler = ["Mikrofon","Kablo","Telefon","Bilgisayar","Mouse","Klavye","Ekran"]
const filtreliUrun = urunler.filter(eleman => eleman.length > 3)
//filter metodu ile dizi elemanlarını döngüye alırız. istediğimiz koşula sahip olanlarla yei dizi oluştururuz.
console.log(filtreliUrun);
//--------------------

const person = [{name: "Adem",age: 25,languages: ["JavaScript", "CSS"]},
                {name: "Oğuz",age: 33,languages: ["Java", "HTML"]},
                {name: "Ayşe",age: 35,languages: ["C#", "JavaScript"]},
                {name: "Melike",age:20,languages: ["Java", "JavaScript"]}
            ];
 const filterAge= person.filter(yas=>yas.age>30)
 console.log(filterAge);
 const filterLanguage=person.filter(dil=>dil.languages.includes("JavaScript"))
 console.log(filterLanguage);