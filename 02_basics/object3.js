//destructing of object 
const course ={
    coursename:"Javascript + React ",
    price:"free",
    courseinstructer:"Prafull"

}

// 
// console.log(course.coursename);
// console.log(course.price);


// destructing mens   arrays ki values ko ya object ki properties ko extract krke  variable me assign krna 
// const {coursename}=course
// console.log(coursename)

const {coursename: name}=course
console.log(name);
