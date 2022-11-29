class Employee 
{
//fill code here


    constructor(name, designation, year_of_experience){
        this.name=name;
        this.designation=designation;
        this.year_of_experience=year_of_experience;

    }

}

function createEmployee(name, designation, year_of_experience)
{
//fill code here
    return new Employee(name, designation, year_of_experience);
}

function validateObject(employee)
{
//fill code here
    return employee instanceof Employee;
}

function displayEmployee(name, designation, year_of_experience){
    var emp=createEmployee(name, designation, year_of_experience);
    var str="";
    if(validateObject(emp)){
        var exp=new Date().getFullYear()-emp.year_of_experience;
        str=emp.name+" is serving the position of "+emp.designation+" since "+exp;
    }

    // console.log(emp.name);
    return str;


}
