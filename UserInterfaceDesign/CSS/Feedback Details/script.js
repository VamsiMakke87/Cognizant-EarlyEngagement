var arr=[];

function addFeedback(){

    //Fill the required logic  

    var feedback=document.getElementById('feedback').value;

    arr.push(feedback);

    document.getElementById('feedback').value="";

    document.getElementById("result").innerHTML="<h2>Feedback Details</h2><h3>Successfully Added Feedback Details!<h3>";

}



function displayFeedback(){

    //Fill the required logic

    var txt="";

    var count=1;

    for (var i =1; i < arr.length+1; i++) {

        txt+="Feedback "+i+"<br>"+arr[i-1]+"<br>";

    }

    document.getElementById('result').innerHTML="<h2>Feedback Details<h2>"+txt;

}