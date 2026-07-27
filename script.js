function calculateOT(){


let salary =
Number(document.getElementById("salary").value);


let workingHour =
Number(document.getElementById("workingHour").value);


let start =
document.getElementById("startTime").value;


let end =
document.getElementById("endTime").value;



let startMinutes =
Number(start.split(":")[0])*60 +
Number(start.split(":")[1]);


let endMinutes =
Number(end.split(":")[0])*60 +
Number(end.split(":")[1]);



if(endMinutes < startMinutes){

    endMinutes += 1440;

}


let minutes =
endMinutes - startMinutes;


let otHour =
minutes / 60;



let otRate =
salary / workingHour;


let total =
otHour * otRate;



document.getElementById("otHour").innerHTML =
otHour.toFixed(2);


document.getElementById("otRate").innerHTML =
otRate.toFixed(2);


document.getElementById("total").innerHTML =
total.toFixed(2);


}
