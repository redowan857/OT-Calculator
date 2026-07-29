let otList = JSON.parse(localStorage.getItem("otList")) || [];

let editIndex = -1;



function saveOT(){


let date =
document.getElementById("date").value;


let outTime =
document.getElementById("outTime").value;



if(date==""){

alert("Select Date");

return;

}



if(outTime==""){

alert("Select Out Time");

return;

}



// OT start 05:00 PM

let start = 17 * 60;



let time = outTime.split(":");



let outMinute =
(Number(time[0])*60) + Number(time[1]);



let difference =
outMinute - start;



if(difference < 0){

difference = 0;

}



let hour =
difference / 60;



let data = {

date:date,

out:outTime,

hour:hour

};




if(editIndex == -1){

otList.push(data);

}

else{

otList[editIndex] = data;

editIndex = -1;

}




localStorage.setItem(

"otList",

JSON.stringify(otList)

);



clearInput();

showHistory();


}





function showHistory(){


let html="";

let total=0;



// Date small to big

otList.sort(function(a,b){

return new Date(a.date)-new Date(b.date);

});





otList.forEach(function(item,index){



let d = new Date(item.date);



let day =
String(d.getDate()).padStart(2,"0");



let month =
String(d.getMonth()+1).padStart(2,"0");



let year =
d.getFullYear();



let displayDate =
day+"-"+month+"-"+year;




// শুধু Friday show

let dayName="";



if(d.getDay()==5){

dayName=" (Friday)";

}




html += `

<div class="historyBox"
onclick="editOT(${index})">


${displayDate}

|

${item.out}

|

${item.hour.toFixed(2)} Hour

${dayName}


</div>

`;



total += item.hour;



});




document.getElementById("history").innerHTML =
html;



document.getElementById("totalHour").innerHTML =
total.toFixed(2);



}





function editOT(index){



let data = otList[index];



document.getElementById("date").value =
data.date;



document.getElementById("outTime").value =
data.out;



editIndex=index;



window.scrollTo({

top:0,

behavior:"smooth"

});


}





function clearInput(){


document.getElementById("date").value="";


document.getElementById("outTime").value="";


}





showHistory();
