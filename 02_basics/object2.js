const tinderUser ={};
tinderUser.id="Hew3567";
tinderUser.name="Prafull284";
tinderUser.isLogIn="false";
//console.log(tinderUser);

const regulerUser={
    email:"kprafullya@google.com",
    fullname:{
        userfullname:{
            firstname:"Prafull Kumar",
            lastname:"Yadav"

        }
    }

}
//console.log(regulerUser);
//console.log(regulerUser.fullname.userfullname.firstname);

//combining of Object
const obj1={1:"Abhisek",2:"Abhinav Ray"}
const obj2={3:"Sonam",4:"Pankaj"}

const obj3= {obj1,obj2}
//console.log(obj3)
const obj4= Object.assign({},obj1,obj2);
//console.log(obj4);

//combining object trough spread operater
const objSpread ={...obj1,...obj2};
//console.log(objSpread);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('name'));

