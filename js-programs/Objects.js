

const EmployeeDetails={
    FirstName:"Rakesh",
    lastName:"Samal",
    "experience":12,
    Dept:"Java Developer",
    Sal:"50000",
    logIn:["monday","Tuesday"]
    
}
// console.log(EmployeeDetails.FirstName)
// console.log(EmployeeDetails["lastName"])
// console.log(EmployeeDetails["experience"]);
EmployeeDetails.greeting=function(){
    console.log("Hello js Students");
}
EmployeeDetails.greetingTwo=function(){
    console.log(`Hello i am Rakesh ${this.FirstName,this.lastName}`)
}
// console.log(EmployeeDetails.greeting())
// console.log(EmployeeDetails.greetingTwo())

const num1={
    1:"a",
    2:"b"
}
const num2={
    3:"c",
    4:"d"
}

const num3={...num1,...num2};
const num4=Object.assign({},num1,num2)
//console.log(num3)

const school={
    HeadTeacher:"Rakhi",
    age:56
}
const {HeadTeacher : teacher}=school
//console.log(HeadTeacher)
console.log(teacher)