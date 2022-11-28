function modifyString(str)
{
//fill code here
    str=str.toLowerCase();
    var temp="";

    for(i=0;i<str.length;i++)
        if(str.charAt(i)!==' ')
            temp+=str.charAt(i);

    return temp;
}

function uniqueCharacters(str)
{
//fill code here
    str=modifyString(str);
    var temp="";
    for(i=0;i<str.length;i++)
        if(!temp.includes(str.charAt(i)))
            temp+=str.charAt(i);

    return temp
}

