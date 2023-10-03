let a=10;
const b=20;
var c=30
if(true){
    let a=100
    const b=20;
var c=300
}
//console.log(a)
///console.log(b)
//console.log(c)

function one(){
    const a=10
    function two(){
        const b=20
        console.log(a)

    }
    
    two()
   
}
one()