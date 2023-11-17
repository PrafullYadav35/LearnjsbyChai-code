const student = {
    name:"Prafull Kumar Yadav",
    rollno:35,
    adress:"faridaha Khanpur Ghazipur",
    morning:function(){
        // console.log(`Good Morning ${this.name}`);
        // console.log(this);
    }

}
student.morning();
student.name="Diksha Mam ";
student.morning();
//console.log(this);

//function me this 
function oneadd(num){
    console.log(this);
    return num+1;

}
oneadd(20);