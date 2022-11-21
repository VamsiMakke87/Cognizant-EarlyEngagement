const arr=[]; 
function addFeedback(){
    //Fill the required logic
    arr.push(document.getElementById("feedback").value);
    document.getElementById("feedback").value="";

    var display=
        '<h2>Feedback Details</h2><h4>Successfully Added Feedback Details!</h4>';

    document.getElementById("result").innerHTML=display;
    

}
   
function displayFeedback(){
       //Fill the required logic
       
       var output='<h2>Feedback Details</h2>';

       for(var i=0;i<arr.length;i++)
        output+='Feedback'+(i+1)+'<br>'+arr[i]+'<br>';

       document.getElementById("result").innerHTML=output;
}