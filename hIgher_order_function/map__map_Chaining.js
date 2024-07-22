const myNumbers =[1,2,3,4,5,6,7,8,9,0]

//const newNum= myNumbers.map((num)=>num+10)
//console.log(newNum)

//yhi  kam forEach se krna?

//map chaining 

newNumbers  = myNumbers
.map((num)=> num+100)
.map((num)=> num/3)
.filter((num)=>num>35)

console.log(newNumbers)

