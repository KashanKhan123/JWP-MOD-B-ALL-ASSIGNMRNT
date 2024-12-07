function student(name,age,city){
    this.stdName = name;
    this.stdAge = age;
    this.stdCity = city;
}

const std1 = new student(`faraz`,25,`Lahore`);

console.log(std1);


class studen{
    constructor(name,age,city){
    this.stdName = name;
    this.stdAge = age;
    this.stdCity = city;
    }
    getName = () => {
        return this.stdName;
    }
}
const std1 = new studen(`faraz`,25,`Lahore`);
console.log(std1.getName());


class school extends studen{    
    constructor(Name,id,area,name,age,city){
        super()
        this.shlName = Name;
        this.shlId = id;
        this.shlArea = area;
        this.stdName = name;
        this.stdAge = age;
        this.stdCity = city;
        }
}

const shl1 = new school(`Matchless Public Secondary School`,2233445566,`Orangi Towm Karachi`,`faraz`,25,`Lahore`);

console.log(shl1);
const cardDiv = document.getElementById(`nimer`)
const input = document.getElementById(`talha`)
let search = ()=>{

    const API_KEY ="https://newsapi.org/v2/everything?q=tesla&from=2024-11-07&sortBy=publishedAt&apiKey=043a5228dda44b1a99b90e2954b1f23b";
    
    fetch(API_KEY)
    .then((res)=>res.json())
    .then((data)=>{
        data.articles.map((e,i)=>{
            console.log(e);
        cardDiv.innerHTML += `<div class="card" style="width: 18rem;">
        <img src=${e.urlToImage} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class=${e.title}>Card title</h5>
        <p class="card-text">${e.description    }</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`
    });
    
})
.catch((err)=>{
    console.log(err);
    
});
}