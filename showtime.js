function showtime(){
let dateTime = new Date();
let time=dateTime.toLocaleTimeString();
console.log(time);
setTimeout(showtime,3000);
}

showtime();