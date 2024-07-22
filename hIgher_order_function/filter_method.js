const coding = ["js", "ruby", "java", "python", "cpp"]

//what happen if we return  in for each?

const values = coding.forEach((item)=>{
return item
})

//console.log(values)
// forEach method doesn,t return any value 

//use filter

const myNums=[1,2,3,4,5,6,7,8,9,0]
 const newNums = myNums.filter((num)=>{
// return num>7
 })
//console.log(newNums)

// filter , map & reduce methods return new array and take a callback function

//filter() ka kam forEach() se krvana 
myNums.forEach((num)=>{
  if(num>7){
    newNums.push(num)
  }
})
//console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //practices filter 

  // wo book jinka genere science hai

   let userBooks = books.filter((item)=>  item.genre == 'Science'
  );
  // console.log(userBooks)
  // console.log(userBooks[0].title)

  userBooks =books.filter((bk)=>{
    
     if(bk.genre=='Non-Fiction'&& bk.publish<2000){
      return bk 
     }
      
     
  })
  console.log(userBooks)   //vo books jo non fiction hai and unko 2000 se phle publish kiya gya hai


