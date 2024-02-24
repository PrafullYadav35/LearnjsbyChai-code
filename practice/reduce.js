const myNums= [1,2,3];
const myTotal = myNums.reduce(
    function(acc,currval){
       // console.log(`acc:${acc} and currval:${currval} `);
        return acc+currval;
    },0
)
const myTotals =myNums.reduce((acc,curvalue)=>acc+curvalue,0);
console.log(myTotals);
console.log(myTotal);

//task : what is acc ?
// watch lecture of reduce samajh nhi aa rha hai?