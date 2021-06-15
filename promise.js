var pro=new Promise(function(resolve,reject){
const x=100;
const y=100;
if(x==y){
    resolve();
} 
    
else{
    reject();
}
    
});
pro.then(function(){
    console.log("success");
}).catch(function(){
    console.log("Error");
});