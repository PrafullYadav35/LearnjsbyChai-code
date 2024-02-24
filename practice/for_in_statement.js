//object ke key pe iterate krne k lia
const myobj= {
    js:"javascript",
    cpp:"C++",
    py:"Python",
    rb:"Ruby",
    swift:"Swift by apple"
}

for(const key in myobj){
    //console.log(`${key} is shortcut for ${myobj[key]}`);
}

const programming =['py','js',"ruby","swift"];
for(const key in myobj){
    //console.log(programming[key]);
}
// output : undefined


//Map

const map= new Map();
map.set('IN',"India");
map.set('USA',"United State of America");
map.set("Fr","France");

for(const key in map){
console.log(key);
}

// for in statement Array and Map pr work nhi krta hai 
// kyo ? video dekhna pdega sir kaa 

