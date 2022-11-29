function display(){

    var name=document.getElementById("sname").value;
    var course=document.getElementById("course").value;
    var str;
    if(name.length==0)
        str="Name cannot be empty";
    else
        str="Hi,"+name+". You have successfully registered for the "+course+" course.";
    document.getElementById("greet").innerHTML=str;
    return false;

}