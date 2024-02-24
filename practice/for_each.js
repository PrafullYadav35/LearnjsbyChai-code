const coding= ['js','py','swift','java','rupy','php'];
coding.forEach(function (val){
    //console.log(val);
})

//by using arrow function
coding.forEach((value)=>{
    //console.log(value);
})

function printMe(item){
    console.log(item);
}
//coding.forEach(printMe);

//item index item , index and array tino print ho rhe hai
coding.forEach((item,index,arr)=>{
    //console.log(item,index, arr);
})

//object 

const myCoding =[
    {
        languageName:"Javascript",
        langaugeFile:"js"
    },
    {
        languageName:"Python",
        langaugeFile:"py"
    },
    {
        languageName:"java",
        langaugeFile:"java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})


