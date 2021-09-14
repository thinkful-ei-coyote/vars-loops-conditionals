//Const with Arrays and Objects
//Change items within but not the type
const x = [1,2,true,'5'];
const obj = {
    occupation: 'Instructor',
    location: 'Nebraska',
    firstName: 'Terra',
    age:110
};

//console.log(obj.occupation);
//console.log(obj['occupation']);


let globalVariable = 'I am a global variable';

const fn = function() {
  let localVariable = 'I am a local variable';
  console.log(globalVariable);
  console.log(localVariable);
};

function funcName(){
 console.log('Test');
}

fn();
funcName();
funcName='We want the funk';
funcName(); //We get an error here because funcName is no longer a function and can't be executed
console.log(funcName); //This logs 'We want the Func


//console.log(globalVariable);
//console.log(localVariable);