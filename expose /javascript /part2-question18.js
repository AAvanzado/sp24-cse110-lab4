function myTimer(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(myTimer, 1000);
