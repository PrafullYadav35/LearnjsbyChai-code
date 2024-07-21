/**
 The forEach method is an array method in JavaScript
  that allows you to iterate over elements of an array and 
  execute a provided function once for each array element. 
  It is a useful and concise way to loop through array elements.
 */

  const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function(val){
 // console.log(val)
})

//arrow function
coding.forEach((val)=>{
  //  console.log(val)
})

function printMe(item){
    console.log(item);
}
//coding.forEach(printMe)

coding.forEach((item, index, arr)=>{
    //console.log(item, index , arr);
})
// accesing each objects of array in the array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]


myCoding.forEach((item)=>{
  console.log(item.languageName)
})