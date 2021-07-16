let artist = {                                  //artist isimli objemiz
    name:"Zoé",                                    //name isimli, "Zoé" primitive değerine sahip property
    album:{                                        //album isimli, içerisinde başka bir objeye yer veren property
     title:"Reptilectric",
     year:2008
    },
   };

//aynı değerlere sahip 2 primitive veri tipi
let mesaj = "merhaba";
let başkaBirMesaj = "merhaba";
console.log(mesaj == başkaBirMesaj);       //true

//aynı değerlere, farklı memory adresslere sahip 2 obje
let obje = {
 mesaj:"merhaba"
}
let başkaBirObje = {
 mesaj:"merhaba"
}
console.log(obje == başkaBirObje);         //false

//Object Literals Obje oluşturma
let countriesTalkSpanish = {
    continent: "south america",
    language: "spanish"
    };

 // New Keyword ile Obje Oluşturma
 let countriesTalkFrench = new Object();     
countriesTalkFrench.continent = "africa";     
countriesTalkFrench.language = "french"; 

//Object Prototype Object.create() fonksiyonuyla obje oluşturma
let noInheritence = Object.create(null);   //herhangi bir kalıtım(inheritence) almaz
let standartObject = Object.create(Object.prototype) //standart obje kalıtımı alır.
let argentina = Object.create(countriesTalkSpanish)
    argentina.capital = "buenos aires";

//----------- Key & Value ---------
let laptop1 ={
    brand: "Huawei",
    model: "MateBook",
    "4hediye": true,
    modelName:"Matebook 13 R7", //her iki şekilde de tanımlama yapmak doğru.
    model_name:"MateBook 13 R7"
}
console.log(laptop1.brand , laptop1["brand"]);
console.log(laptop1.model , laptop1["model"]);
console.log(laptop1["4hediye"]);

//Anahtar bilgisine yeni değer ekleme
laptop1.model ="Huawei-MateBook";
console.log(laptop1);

//yeni bilgi ekleme
laptop1.version ="16.3.0"
console.log(laptop1)

// Key bilgisine erişmek
keys = Object.keys(laptop1);
console.log(keys);
console.log(Object.keys(laptop1))

//value bilgisine erişmek 
console.log(Object.values(laptop1))

// Objelere Metot Ekleme:

let user ={
   firstName: "Kabe",
   lastName: "KUŞ",
   score: [1,2,3,4,5],
   isActive: true ,
   userName: function(){
       return `${this.firstName} ${this.lastName}`
   },
   myName: () => {
    return `My name is ${this.firstName} ${this.lastName}`;
}, // function tanımlaması

};
console.log(user)
 
//Object ve Array Destructuring Kullanımı
const cikarma = ( { sayi1, sayi2 } ) => { // { sayi1, sayi2 } destructuring işlemini temsil eder.
    return sayi1 - sayi2;
   }
const sayilar = {
    sayi2: 3,
    sayi1: 5
   }
   cikarma(sayilar); // sonuc 2