
/* 

    Fill with appropriate and required javascript global variables  code here 

*/

var p,r,n,emi,totalPayment,totalInterest;



function EstimateReducingInterestLoan()
{
	/* Fill with required javascript code to read input values from HTML Components  */


	  calculateEMI();
      totalPayment();
      totalInterest();
      EstimateFixedInterestLoan();


    
}

function EstimateFixedInterestLoan()
{
    /* Fill with required javascript code here  */
    totalInterest=p*r*n;
    document.getElementById("tInterestFixed").innerHTML = parseFloat(totalInterest).toFixed(2); /*Assign total Interest value here*/
    
     /* Fill with required javascript code here  */
    totalPayment=parseInt(p)+totalInterest;
    document.getElementById("tPaymentFixed").innerHTML = parseFloat(totalPayment).toFixed(2);; /*Assign total payment value here*/
    
     /* Fill with required javascript code here  */
     
     emi=totalPayment/n;
    document.getElementById("EMIFixed").innerHTML = parseFloat(emi).toFixed(2);; /*Assign emi  value here*/
    
    
}

function calculateEMI(){
	
    /* Fill with required javascript code here  */
    p=document.getElementById("principalAmount").value;
    r=document.getElementById("interestRate").value;
    n=document.getElementById("tenure").value;

    r=(r*1.0/100)/12;

    var power=Math.pow(1+r,n);

    emi= p*r*(power/(power-1));

    // var emi= p*r*(Math.pow(1+r,n)/Math.pow(1+r,n-1));
    // alert(r+":"+p+":"+n+":"+emi);
    
    document.getElementById("EMI").innerHTML = parseFloat(emi).toFixed(2);;/*Assign emi value here*/
}

function totalPayment(){
	
	/* Fill with required javascript code here  */
	
    totalPayment=emi*n;
	
    document.getElementById("tPayment").innerHTML = parseFloat(totalPayment).toFixed(2);; /*Assign total payment value here*/
}

function totalInterest(){
	
/* Fill with required javascript code here  */

    totalInterest=totalPayment-p;

    document.getElementById("tInterest").innerHTML = parseFloat(totalInterest).toFixed(2);; /*Assign total Interest value here*/
}


