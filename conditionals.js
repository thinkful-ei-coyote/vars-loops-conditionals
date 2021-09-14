function checkId(age){
  /*  if(age >= 21 && age<200){
        console.log('Heres your purchase, have a good day');
    }
    else if(age>200 ){
        console.log('Wow, good for you!');
    }
    else{
        console.log('You are not old enough, Calling the cops!');
    }*/
    switch (age) {
        case 25:
            console.log('Come on in youre old enough')
            break;
        case 15:
            console.log('Not old enough, go play pokemon');
            break;
        default:
            console.log('Well how old are you then?');
            break;
    }
}


let customerAges = [21,15,250,99];

for(let i =0; i< customerAges.length; i++){
    checkId(customerAges[i]);
}