// Code for Nested loop starts
// var countryName = ["Pakistan","India","srilanks","china","Iran","Afghanistan"]
// var userName = ["User01","User02","User03","User04","User05","User06",]
// for(var i = 0; i < countryName.length; i++){
//     console.log(countryName[i])
//     for(var j = 0; j < userName.length; j++){
//         document.write(countryName[i] + " " + userName[j] + "<br/>")
//     }
// }




// for (var i = 0; i < countryName.length; i++) {
//     console.log(countryName[i]);
//     for (var j = 0; j < userName.length; j++) {
//         if (i % 2 === 0) { // Only print combinations for even-indexed countries
//             console.log("- " + countryName[i] + " " + userName[j]);
//         }
//     }
//     console.log();
// }





// for(var a = 1; a <= 100; a = a+10){
//     for(var b = a; b < a+10; b++ ){
//         document.write(b + " ")
//     }
//     document.write("<br/>")
// }




// for(var a = 1; a <=5; a++){
//     for(var b = 1; b <= a; b++ ){
//         document.write(b + " ")
//     } 
//     document.write("<br/>")
// }



// Code for nested lopp ends





// var paragraph = "Browse our range of global standard digital courses which are designed by expert IT professionals and are based on real situations and life’s business cases. After geting training courses at iHunar, you will have systemic theoretical knowledge in the profession and become a specialist with current practical skills to find jobs."
// console.log(paragraph)
// var search = prompt("Type any word that you want to target")
// var replace = prompt("Type any word that you wanna to replace")
// var counter = 0;


// for (var i = 0; i < paragraph.length; i++) {
//     if (paragraph.slice(i, i + search.length) === search) {
//         paragraph = paragraph.slice(0, i) + replace + paragraph.slice(i + search.length);
//         counter++;
//         console.log("Index Number:-", i)
//     }
// }
// console.log(paragraph)
// console.log("The word", search, "written in this para", counter, "times.")












// var date = new Date();
// console.log(date)




// var date = new Date();
// var day = date.getDay("Dec 25, 2023");
// if( day === 0 ){
//     console.log("Today is Sunday")    
// }else if(day === 1){
//     console.log("Today is Monday")
// }else if(day === 2 ){
//     console.log(" Today is Tuesday")
// }else if(day === 3){
//     console.log("Today is Wednesday")
// }else if(day === 4){
//     console.log("Today is Thursday")
// }else if(day === 5){
//     console.log("Today is Friday")
// }else if(day === 6){
//     console.log("Today is Saturday")
// }




// var date = new Date();
// var time = date.getTime();
// console.log(time)







// var date = new Date();
// console.log(date);
// var currentDay = date.getDay();
// var currentHour = date.getHours(); 
// var currentMinutes = date.getMinutes(); 
// var currentSeconds = date.getSeconds(); 
// var time = "currentTime:-" + " " + currentDay + " " + currentHour + ":" + currentMinutes + ":" + currentSeconds;
// console.log(time)

// console.log(" ")

// var futureDate = new Date("september 1,2023");
// console.log(futureDate)
// var futureHour = futureDate.getHours();
// var futureMinutes = futureDate.getMinutes();
// var futureSeconds = futureDate.getSeconds();

// var futureTime = "futureTime:-" + " "  + futureHour + ":" + futureMinutes + ":" + futureSeconds;
// console.log(futureTime)


var date = new Date();
var futureDate = new Date("september 1,2023")
var timeDifference = futureDate - date;
var daysDiffernce = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))
var hoursDiffernce = Math.ceil(timeDifference / (1000 * 60 * 60 ))
var minutesDiffernce = Math.ceil(timeDifference / (1000 * 60 ) )
var secondsDiffernce = Math.ceil(timeDifference / (1000) )
console.log("Days until September 1st:", daysDiffernce);
console.log("Hours until September 1st:", hoursDiffernce);
console.log("Minutes until September 1st:",minutesDiffernce);
console.log("Seconds until September 1st:",secondsDiffernce);
console.log("Time Until September 1st is:",daysDiffernce,"days", hoursDiffernce , "hours",minutesDiffernce , "minutes", secondsDiffernce ,"seconds" )



function loop(){
    for(var i = 0; i <= 10; i++){
        console.log(i)
    }
}
// loop();

function remainingTime(){
var date = new Date();
var futureDate = new Date("september 1,2023")
var timeDifference = futureDate - date;
var daysDiffernce = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))
var hoursDiffernce = Math.ceil(timeDifference / (1000 * 60 * 60 ))
var minutesDiffernce = Math.ceil(timeDifference / (1000 * 60 ) )
var secondsDiffernce = Math.ceil(timeDifference / (1000) )
console.log("Days until September 1st:", daysDiffernce);
console.log("Hours until September 1st:", hoursDiffernce);
console.log("Minutes until September 1st:",minutesDiffernce);
console.log("Seconds until September 1st:",secondsDiffernce);
console.log("Time Until September 1st is:",daysDiffernce,"days", hoursDiffernce , "hours",minutesDiffernce , "minutes", secondsDiffernce ,"seconds" )
}

// remainingTime();

function login(){
    alert("Signup form appear")
}
// login();









