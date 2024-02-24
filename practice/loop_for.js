for(let i =1;i<=10;i++){
    if(i==5){
        // console.log(i+"pretty number");
    }
//  console.log(i); 
}

for(let i=1;i<=10;i++){
  //console.log(`outer loop value: ${i}`);
  for(let j=1;j<=10;j++){
    //console.log(`inner loop vale ${j} and outer loop ${i}`);

    //console.log(i + "*"+ j + "=" + i*j);
  }
}

//iteratin array 
let cities = ['lucknow','Kanpur','Varansi','Delhi','Mumbai','Pune'];
//console.log(cities.length);
for(let i=0;i<cities.length;i++){
  //console.log(cities[i]);

 
  //console.log(typeof(element));
  //console.log(element);
}

//break and continue
for(let index=1;index<=10;index++){
  if(index==5){
    //console.log(`Detected 5`);
    break;
  }
 // console.log(`value of i is ${index}`)
}

for(let index=1;index<=10;index++){
  if(index==5){
    console.log(`skipped`);
    continue;
  }
  console.log(`value of i is ${index}`)
}