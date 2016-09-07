//i will make an array of different models of Xiaomi phones
var phoneArray=['Mi2','Mi3','Mi4','Mi4i'];

// this variable will find the first item in my phoneArray
var firstPhone=phoneArray[0];

//i will make an if...else...if conditional that will test
//to see whether the first phone in the array is Mi2
//we will also test whether the third phone is Mi4
if(firstPhone=='Mi2'){
  console.log('The fist phone is Mi2');
}else if(phoneArray[2]=='Mi4'){
  consle.log('The third phone is Mi4');
}else{
  console.log('The first phone is not Mi2');
  console.log('Actually, the first phone is'+firstPhone);
}
