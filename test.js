const d = new Date();
const hours = [
    new Date(d.getFullYear(), d.getMonth(), d.getDate(), 08, 00),
    new Date(d.getFullYear(), d.getMonth(), d.getDate(), 09, 30),
    new Date(d.getFullYear(), d.getMonth(), d.getDate(), 10, 35),
    new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12, 10),
    new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12, 30),
    new Date(d.getFullYear(), d.getMonth(), d.getDate(), 14, 35)
    new Date(d.getFullYear(), d.getMonth(), d.getDate(), 16, 10),
]
for(hour in hours){
    var node = document.createElement("LI");
    var textnode = document.createTextNode(`${hours[hour].getHours()}:${hours[hour].getMinutes()}`);
    node.appendChild(textnode); 
    document.getElementById("now").appendChild(node);
}

var toDate;

for(hour in hours){
    if(hours[hour] > d){
	toDate = hours[hour].getTime()
	break
    }
}

var mainLoop = setInterval(function(){
    const d = new Date().getTime();
    var distance = toDate - d

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(`${hours}:${minutes}:${seconds} to start of next lesson`)
    document.getElementById("counter").innerHTML = hours + "h "
+ minutes + "m " + seconds + "s ";


    if(distance < 0){
	clearInterval(mainLoop);
    }
}, 1000)
