function OrderCake(str) {
	//fill the code
    var wt=parseFloat(str.substring(0,4));
    var order=str.substring(4,str.length-3);
    var oId=parseInt(str.substring(str.length-3));

    wt=wt/1000;

    var price=Math.round(wt*450);
    wt=Math.round(wt);
    

    return "Your order for "+wt+" kg "+order+" cake has been taken. You are requested to pay Rs. "+price+" on the order no "+oId;
  
}
