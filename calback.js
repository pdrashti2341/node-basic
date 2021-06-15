 function greet(name,callback){
     console.log('hey' + ' ' + name);
     callback();

 }

 function callme(){
     console.log("I'm call back");

 }

 greet('drashti',callme)