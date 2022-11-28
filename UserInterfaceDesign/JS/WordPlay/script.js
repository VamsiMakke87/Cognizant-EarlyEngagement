function wordPlay(number){
    //fill the code
    if(number>50)return "Range is High";
    else if(number<1)return "Not Valid";
    else{
        var str="";

        for(i=1;i<=number;i++){
            var three=Boolean(i%3===0);
            var five=Boolean(i%5===0);

            if(three && five)
                str+="Jump ";
            else if(three)
                str+="Tap ";
            else if(five)
                str+="Clap ";
            else 
                str+=i+" ";
        }

        return " "+str.trim();

    }
}
